import { dirt, stone } from '../../assets/index'
import { useEffect, useRef, useState } from 'react';
import { handleCommand } from '../Terminal/Commands';
import type { CommandType, Line } from "../Terminal/LineType";
import ContentPanel from '../Panels/ControlPanel';
import { AnimatePresence, motion } from "framer-motion";

// Animation Related Variables
const panelVariant = {
  hidden: { opacity: 0, y: 80 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.67, ease: "easeOut" as const, delay: 0.2 }
  }
};

const panelSwitchVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.2, ease: "easeIn" as const }
  }
};

function App() {

  const [input, setInput] = useState("");
  const [activePanel, setActivePanel] = useState<CommandType>("none");
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

  // Handles terminal scrolling
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

  // Function for handling inputs
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    
    // If the Enter key was pressed
    if (e.key === "Enter" && input.trim() !== "") {
      let output: Line;

      // Checks if input was a command, showcases an error message if not
      if (!input.startsWith("/")) {
        output = {
          type: "error",
          command: "none",
          text: "Unknown command. Please try /help for a list of commands."
        };
      } else {
        output = handleCommand(input.slice(1));
      }

      // Handles each command type that was given
      if (output.type === "command") {
        switch (output.command) {
          case "about":
            setActivePanel("about");
            break;
          case "projects":
            setActivePanel("projects");
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
    
    // If user presses up or down arrow keys, they go to
    // the next or previous command entered if it exists
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
      <div className="min-h-[43rem] w-full bg-repeat bg-center bg-[length:60%] pt-[3rem]" style={{ backgroundImage : `url(${dirt})`}}>
        <div className={`font-[Minecraft] w-[90%] mx-auto flex gap-6`}>

          {/*
            -------------------------------------
            Terminal Logic
            -------------------------------------
          */}
          <div className={`w-[45%] h-[35rem] bg-black/50 border border-white/20 rounded-md text-xl p-4 flex flex-col`}>

            <div className="flex-1 overflow-y-auto min-h-0" ref={terminalRef}>
              <div className="flex flex-col justify-end min-h-full">
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
                        case "help":
                          color = "text-blue-500";
                          break;
                        default:
                          color = "text-green-400";
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
          <motion.div className="w-[55%] h-[35rem] min-h-0 overflow-y-auto" variants={panelVariant} initial="hidden" animate="visible">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activePanel} 
                variants={panelSwitchVariant} 
                initial="hidden" 
                animate="visible" 
                exit="exit"
              >
                <ContentPanel activePanel={activePanel} />
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </>
  )
}

export default App
