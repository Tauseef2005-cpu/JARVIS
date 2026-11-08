// server/server.js
const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..")));

app.post("/chat", async (req, res) => {
    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
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

app.listen(3000, () => console.log("JARVIS backend running on port 3000"));