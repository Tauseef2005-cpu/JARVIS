# J.A.R.V.I.S. Terminal Interface

An Iron Man / Stark Industries inspired futuristic HUD and terminal interface connected to an AI core via OpenRouter.

![J.A.R.V.I.S.](https://img.shields.io/badge/Status-Online-00d4ff?style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green?style=flat-square)

---

## ⚡ Features

- **Futuristic Stark HUD:** Holographic particle background, animated Arc Reactor, live rotating radar sweep, and real-time system logs.
- **AI Core:** Integrated with OpenRouter (`openai/gpt-4o-mini`) with dynamic typewriter message rendering.
- **Responsive Terminal UI:** Built with React and customized cybernetic CRT/scanline styling.

---

## 🚀 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.

### 2. Installation & Configuration
Clone this repository and navigate to the project directory:

```bash
git clone <your-repo-url>
cd "Jarvis main"
```

Install backend dependencies:
```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:
```bash
cp .env.example .env
```
Add your OpenRouter API key inside `server/.env`:
```env
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

### 3. Launching Jarvis
From the `server` directory:
```bash
node server.js
```

Open your browser and navigate to:
```
http://localhost:3000
```
