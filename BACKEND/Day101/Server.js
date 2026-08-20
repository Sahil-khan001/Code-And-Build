const express = require("express");
const main = require("./llm");
const connectDB = require("./database");
const AiDb = require("./Model/Collection");

const app = express();

app.use(express.json());



app.post("/chat", async (req, res) => {
    try {
        const msg = req.body.msg;
        const id = req.body.id;

        if (!msg || !id) {
            return res.status(400).send("msg and id are required");
        }

        // Find existing chat
        let chat = await AiDb.findOne({ id });

        // If chat doesn't exist, create it
        if (!chat) {
            chat = await AiDb.create({
                id: id,
                messages: []
            });
        }

        // Previous conversation
        const history = chat.messages.map((message) => ({
            type: message.type,
            content: message.content
        }));

        // New user message
        const userMessage = {
            type: "user_input",
            content: [
                {
                    type: "text",
                    text: msg
                }
            ]
        };

        // Send previous history + new message to Gemini
        const promptMessage = [
            ...history,
            userMessage
        ];

        const answer = await main(promptMessage);

        // Save user message
        chat.messages.push(userMessage);

        // Save AI response
        chat.messages.push({
            type: "model_output",
            content: [
                {
                    type: "text",
                    text: answer
                }
            ]
        });

        // Save to MongoDB
        await chat.save();

        res.status(200).send(answer);

    } catch (err) {
        console.log("Error:", err.message);
        res.status(500).send("Something went wrong");
    }
});


async function startServer() {
    try {
        await connectDB();

        app.listen(1000, () => {
            console.log("Server is listening on port 1000");
        });

    } catch (err) {
        console.error("Database connection failed:", err);
        process.exit(1);
    }
}

startServer();