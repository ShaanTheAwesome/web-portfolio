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
              "/projects - lists my personal projects (coming soon)"
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
        text: [
          "List of Projects:",
          "> Portfolio Website - this website.",
          "> Deepfake Media Detector - full video analysis of whether media is AI generated or not. Includes frame analysis page and forensic techniques.",
          "> Chef's Surprise - random meal generator with instructions and images.",
          "> Business Card Maker - allows creation of business cards with an attachable image.",
          "> Shadow Mario - small mario-like 2D platformer made in Java."
        ]
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