require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");
const readlineSync = require("readline-sync");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const ConversationHistory = [];

async function main() {
    const interaction = await ai.interactions.create({
        model: "gemini-3.7-flash",
        input: ConversationHistory
    });

    return interaction.output_text;
}


// Get weather (works as a TOOL)
async function getWeather(location) {

    const weatherInfo = [];

    for (const { city, date } of location) {

        let url;

        if (date.toLowerCase() === "today") {

            url = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}&aqi=no`;

        } else {

            url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${city}&dt=${date}&aqi=no`;
        }

        const response = await fetch(url);
        const data = await response.json();

        weatherInfo.push(data);
    }

    return weatherInfo;
}


async function Chatting() {

    const question = readlineSync.question("Hey, How can I help you: ");

    const prompt = `
You are an AI agent who will respond to me in JSON format only.

Analyse the user query and try to fetch city and date details from it.

Date format should be "yyyy-mm-dd" if the user asks for future weather.

If the user asks for today's weather, mark the date as "today".

As an LLM, you don't know the current date.
Mark today's date as 2026-08-21.

To fetch weather details, I already have a function which can fetch the weather details for me.

If you need weather information, use the following JSON format:

{
  "weather_details_needed": true,
  "location": [
    {
      "city": "mumbai",
      "date": "today"
    },
    {
      "city": "delhi",
      "date": "2026-08-30"
    }
  ]
}

Once you have the weather report details, respond in JSON format only.

If I have provided weather details and you have enough information to answer the user's question, create a suitable weather report and use this format:

{
  "weather_details_needed": false,
  "weather_report": "Bhai Delhi ka mausam toh badiya hai, 18 degree temperature hai, ghar pe pakode bana lo maja aa jayega"
}

User asked this question:

${question}

Strictly follow the JSON format.

Respond only with valid JSON.

Do not include markdown, code blocks, explanations, or any text outside the JSON.
`;

    ConversationHistory.push({
        type: "user_input",
        content: [
            {
                type: "text",
                text: prompt
            }
        ]
    });


    while (true) {

        let response = await main();

        ConversationHistory.push({
            type: "model_output",
            content: [
                {
                    type: "text",
                    text: response
                }
            ]
        });

        response = response.trim();

        // Remove markdown code fences if Gemini adds them
        response = response
            .replace(/^```json\s*/i, "")
            .replace(/```$/i, "")
            .trim();

        const ans = JSON.parse(response);


        // If no weather tool is needed
        if (ans.weather_details_needed === false) {

            console.log(ans.weather_report);
            break;
        }


        // Fetch weather
        const weatherInfo = await getWeather(ans.location);

        const weatherInformation = JSON.stringify(weatherInfo);


        // Send weather information back to Gemini
        ConversationHistory.push({
            type: "user_input",
            content: [
                {
                    type: "text",
                    text: `This is the weather report I have fetched for you.
Use this weather report to generate the user response:

${weatherInformation}`
                }
            ]
        });
    }
}


Chatting();