type LineType = "intro" | "alt" | "command" | "error" | "plain";
type CommandType = "none" | "help" | "about" | "clear" | "projects";

interface Line {
  type: LineType;
  command: CommandType;
  text: string | string[];
}

export type { Line, LineType, CommandType };