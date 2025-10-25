Here is a simple and effective README.md file for your project. You can copy and paste this directly into a file named README.md in your project root.

Gemini Express Server
A simple Node.js application using Express to connect to the Google Gemini API via a dedicated endpoint.

🚀 Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing.

Prerequisites
You need to have Node.js and npm installed.

Installation
Install Dependencies: Open your terminal in the project directory and run:
npm install @google/generative-ai express dotenv body-parser
et Up API Key: Create a file named .env in the project root to store your secret key:

Code snippet

API_KEY=YOUR_API_KEY_HERE
Update Model Alias (Crucial Fix): In your main JavaScript file (e.g., main.js or index.js), ensure you are using a currently supported model alias. Change this line:

JavaScript

const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});
To this (Recommended):

JavaScript

const model = genAI.getGenerativeModel({model: "gemini-2.5-flash"});
Running the Application
Start the Server:

Bash

node main.js
The server will start on port 3000.

API Endpoints
The application exposes the following endpoints. Use a tool like Postman or cURL to test these.

Note: The provided code uses a POST request for the API endpoint, which is the correct standard for sending data in the body.

1. Health Check
Method	Endpoint	Description
GET	http://localhost:3000/	Returns a simple greeting.

Export to Sheets

2. Gemini Query Endpoint
Method	Endpoint	Request Body (JSON)	Response
POST	http://localhost:3000/api/content	{"question": "Your prompt text here"}	JSON object containing the model's result.
