const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res)=> {
    res.send("Hello World! Gemini");
})

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({model: "gemini-2.5-flash"});

// const prompt = "What is NodeJS";

const generate = async(prompt)=> {
    try{
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
        return result.response.text();
    }
    catch(err){
        console.log(err);
    }
}

// generate();

app.post('/api/content', async (req, res) => {
    try{
        const data = req.body.question;
        const result = await generate(data);
        res.send({
            "result": result
        })
    }
    catch(err){
        res.send("error: " + err);
        }
})

app.listen(3000, ()=> {
    console.log('Server is up and running on PORT 3000');
})

