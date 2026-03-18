import { useEffect, useRef, useState } from 'react';
import dirt from './assets/dirt.jpg';
import { handleCommand } from './components/Commands';
import type { CommandType, Line } from "./components/LineType";
import stone from "./assets/stone.jpg";
import ContentPanel from './components/ControlPanel';
import { motion } from "framer-motion";

const panelVariant = {
  hidden: { opacity: 0, y: 80 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

function App() {

  const [input, setInput] = useState("");
  const [activePanel, setActivePanel] = useState<CommandType>("about");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const [lines, setLines] = useState<Line[]>([
    {
      type: "intro", 
      command: "none",
      text: "Welcome to my Minecraft command themed portfolio! This is the command terminal where you can enter any implemented command."
    },
    {
      type: "alt",
      command: "none",
      text: "On the right is where you will view information regarding whatever command you have entered."
    },
    {
      type: "error", 
      command: "none",
      text: "Please use /help to view a list of commands."
    },
    {
      type: "plain", 
      command: "none",
      text: "--------------------------------------"
    },
  ]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  // Pre-loads the stone background image in order to avoid a delay
  useEffect(() => {
      const img = new Image();
      img.src = stone;
    }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim() !== "") {

      let output: Line;

      if (!input.startsWith("/")) {
        output = {
          type: "error",
          command: "none",
          text: "Unknown command. Please try /help for a list of commands."
        };
      } else {
        output = handleCommand(input.slice(1));
      }

      if (output.type === "command") {
        switch (output.command) {

          case "about":
            setActivePanel("about");
            break;

          case "projects":
            break;
          
          case "clear":
            setLines([]);
            break;
          
          default:
            break;
        }
      }

      setLines((prev) => [...prev, output]);
      setHistory((prev) => [...prev, input]);
      setHistoryIndex(-1);
      setInput("");

    } else if (e.key === "ArrowUp") {

      if (history.length === 0) return;
      const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setInput(history[newIndex]);
      
    } else if (e.key === "ArrowDown") {

      if (history.length === 0) return;
      const newIndex = Math.min(history.length - 1, historyIndex + 1);
      setHistoryIndex(newIndex);
      setInput(history[newIndex]);
    }
  };

  return (
    <>
      <div className="min-h-screen w-full bg-repeat bg-center bg-[length:60%] pt-[3rem]" style={{ backgroundImage : `url(${dirt})`}}>
        <div className={`font-[Minecraft] w-[90%] mx-auto flex gap-6`}>

          {/*
            -------------------------------------
            Terminal Logic
            -------------------------------------
          */}
          <div className={`w-[45%] h-[35rem] bg-black/50 border border-white/20 rounded-md text-xl p-4 flex flex-col`}>

            <div className="flex-1 overflow-y-auto flex flex-col justify-end" ref={terminalRef}>

              {/* Render all previous lines */}
              {lines.map((line, idx) => {

                let color = "";

                // If there's an error
                switch (line.type) {
                  case "intro":
                    color = "text-blue-400";
                    break;
                  case "alt":
                    color = "text-green-400";
                    break;
                    case "command":
                      
                    switch (line.command) {
                      case "projects":
                        color = "text-green-400";
                        break;
                      default:
                        color = "text-blue-500";
                        break;
                    }

                    break;
                  case "error":
                    color = "text-red-500";
                    break;
                    case "plain":
                      color = "text-white";
                      break;
                }
                
                return (
                  <div key={idx} className={`${color}`}>
                    {Array.isArray(line.text)
                    ? line.text.map((t, i) => <div key={i}>{t}</div>)
                    : line.text}
                  </div>
                )
              })}
            </div>

            <div className="flex items-center text-white mt-2">
              <span>&gt;&nbsp;</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent text-white outline-none w-full"
                placeholder="Type a command..."
              />
            </div>
          </div>
          

          {/*
            -------------------------------------
            Control Panel
            -------------------------------------
          */}
          <motion.div className="w-[55%]" variants={panelVariant} initial="hidden" animate="visible">
            <ContentPanel activePanel={activePanel} />
          </motion.div>

        </div>
      </div>
    </>
  )
}

export default App
