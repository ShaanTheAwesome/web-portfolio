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
              "/clear - clears the chat history.",
              "/projects - lists my personal projects (demos coming soon)"
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
        text: "Projects listed on the right."
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