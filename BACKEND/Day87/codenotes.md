The easiest way to remember HTTP status codes is by grouping them.

🔹 2xx = Success ✅ (Everything worked)
Code	Remember	When
200 OK	Done successfully	GET, PUT, PATCH worked
201 Created	New thing created	POST created a new resource

Memory trick:

200 = Success
201 = Success + New item created
🔹 4xx = Client Error ❌ (Your mistake)
Code	Remember	Meaning
400 Bad Request	Bad data	You sent invalid input
401 Unauthorized	Who are you?	Login/authentication required
403 Forbidden	I know you, but NO	You don't have permission
404 Not Found	Can't find it	Resource doesn't exist

Memory trick:

400 → Bad request
401 → Login first
403 → Access denied
404 → Not found
🔹 5xx = Server Error 💥 (Server's mistake)
Code	Remember	Meaning
500 Internal Server Error	Server crashed	Something went wrong on the server

Memory trick:

500 = Server problem, not your fault
⭐ Story to remember forever

Imagine you're entering a library:

200 → "Welcome! Here is your book." ✅
201 → "We created your new library account." ✅
400 → "Your form is filled incorrectly." ❌
401 → "Show your ID (Login first)." 🔑
403 → "We know who you are, but this room is restricted." 🚫
404 → "That book doesn't exist." 📚❌
500 → "Our library system crashed." 💥



One-line cheat sheet (interview favorite)
2xx → Success
200 → Success
201 → Created

4xx → Client's mistake
400 → Bad request
401 → Login required
403 → Permission denied
404 → Not found

5xx → Server's mistake
500 → Internal server error

If you're learning Node.js + Express, these 7 status codes are the ones you'll use about 95% of the time.