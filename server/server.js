// server/server.js
const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..")));

const apiKey = process.env.OPENROUTER_API_KEY;

if (!apiKey || apiKey === "your_openrouter_api_key_here") {
    console.warn("\n==============================================================");
    console.warn("⚠️  WARNING: OPENROUTER_API_KEY is not configured!");
    console.warn("👉  Create server/.env and add: OPENROUTER_API_KEY=your_key_here");
    console.warn("==============================================================\n");
}

app.post("/chat", async (req, res) => {
    const key = process.env.OPENROUTER_API_KEY;
    if (!key || key === "your_openrouter_api_key_here") {
        return res.json({
            choices: [{
                message: {
                    role: "assistant",
                    content: "SYSTEM ALERT: OPENROUTER_API_KEY is not configured. Please create a .env file in the 'server' folder with your OpenRouter API key and restart the server."
                }
            }]
        });
    }

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${key}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: process.env.AI_MODEL || "openai/gpt-4o-mini",
                messages: req.body.messages
            })
        });

        const data = await response.json();
        res.json(data);

    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(3000, () => {
    console.log("JARVIS backend running on port 3000");
    console.log("Open http://localhost:3000 in your browser to interact.");
});