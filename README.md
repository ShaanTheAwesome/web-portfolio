# ⚔️ Minecraft Terminal Portfolio

A personal portfolio website themed around Minecraft's command terminal. Instead of a traditional static layout, visitors navigate the portfolio by typing commands into an interactive terminal — just like in-game.

🔗 **[Live Demo](https://shaanpirdnani.vercel.app)**

---

## 🎮 Concept

The experience is split into distinct stages:

- **Landing Page** — A full-screen Minecraft-themed screen with a command input. Type `/start` to begin.
- **Terminal** — A Minecraft-style command terminal where visitors type commands to navigate
- **Content Panel** — Dynamically updates based on the command entered

---

## 🧱 Tech Stack

- **React** (TypeScript / TSX)
- **Tailwind CSS**
- **Framer Motion** — page transitions and panel animations
- **Vite** — build tool
- Deployed on **Vercel**

---

## ⌨️ Commands

| Command | Description |
|---|---|
| `/start` | Begin the experience from the landing page |
| `/about` | View info about me |
| `/projects` | Browse my projects |
| `/skills` | View my tech stack |
| `/help` | View all available commands |
| `/clear` | Clear the terminal |

---

## ✅ Features

- **Landing page** — full screen Minecraft background with terminal-style input
- **Command-based navigation** — type commands to explore the portfolio
- **Terminal history** — navigate previous commands with `↑` / `↓` arrow keys
- **Auto-scroll** — terminal scrolls to latest output automatically
- **Panel animations** — content panel slides and fades on every command switch
- **Photo album panel** — scattered polaroid-style photos with captions
- **Project showcase** — alternating layout with tech badges, descriptions, GitHub links and video/image previews
- **Minecraft aesthetic** — pixel font, dirt/stone/cloud textures, dark overlays

---

## 📁 Project Structure
```txt
src/
├── assets/
│   └── index.ts
├── components/
│   ├── MinecraftUI/
│   │   ├── Minecraft.tsx
│   │   └── MinecraftModal.tsx
│   ├── Panels/
│   │   ├── About.tsx
│   │   ├── ControlPanel.tsx
│   │   ├── Default.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── Terminal/
│   │   ├── Commands.tsx
│   │   └── LineType.tsx
│   └── Landing.tsx
├── App.tsx
├── Root.tsx
├── main.tsx
└── index.css
```

---

## 🚀 Getting Started
```bash
# Clone the repo
git clone https://github.com/ShaanTheAwesome/web-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

---

## 🚧 In Progress

- `/skills` panel content
- `/contact` command and panel
- `/experience` panel
- Mobile responsiveness
- Easter egg command
- Project screenshots

---

## 💡 About This Project

This portfolio is designed to stand out — built for recruiters and developers who appreciate creativity and technical craft. The Minecraft theme reflects a genuine love for the game while demonstrating frontend skills, interactive UI design, and attention to detail.
