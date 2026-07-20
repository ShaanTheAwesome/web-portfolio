import type { Line } from "./LineType";

function handleCommand(input: string): Line {
  
  const command = input.toLowerCase();

  switch (command) {
    case "help":
      return {
        type: "command",
        command: "help",
        text: [
              "Available commands:",
              "/help - gives you a list of commands.",
              "/about - provides details about myself.",
              "/me - some of my pictures",
              "/clear - clears the chat history.",
              "/projects - lists my personal projects.",
              "/skills - displays my technical skills via the enchanting table."
            ]
      };

    case "about":
      return {
        type: "command",
        command: "about",
        text: "Opening myself...",
      };

    case "clear":
      return {
        type: "command",
        command: "clear",
        text: "",
      }

    case "projects":
      return {
        type: "command",
        command: "projects",
        text: "Listing projects..."
      }

    case "skills":
      return {
        type: "command",
        command: "skills",
        text: "Opening my skills. Click to reveal..."
      }

    case "me":
      return {
        type: "command",
        command: "me",
        text: "Woah is that me on the right? I look handsome."
      }

    default:
      return {
        type: "error",
        command: "none",
        text: "Unknown command. Please try /help for a list of commands.",
      };
  }
}

export { handleCommand }