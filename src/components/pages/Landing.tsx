import { useState } from "react";
import { clouds } from '../../assets/index';
import { mcBox } from "../MinecraftUI/Minecraft";

interface Props {
  onStart: () => void;
}

export default function Landing({ onStart }: Props) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (input.trim().toLowerCase() === "/start") {
        onStart();
      } else {
        setError(true);
        setInput("");
      }
    }
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${clouds})` }}
    >
      <h1 className="font-[Minecraft] text-white text-[3rem] text-shadow-lg text-shadow-black text-center mb-8">
        Pirdnani Shaan Satoshi Lalit
      </h1>
        <div className={`font-[Minecraft] flex items-center justify-center text-white text-xl w-[25rem] bg-black/50 border border-white/20 rounded-md p-4`}>
          <input
            type="text"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            onKeyDown={handleKeyDown}
            className="bg-transparent outline-none text-white w-64 text-center placeholder:text-center"
            placeholder="Type /start to begin..."
            autoFocus
          />
        </div>

      {error && (
        <p className="font-[Minecraft] text-red-500 text-shadow-lg text-shadow-black/40 text-xl mt-4">
          Unknown command. Try /start
        </p>
      )}
      <p className="font-[Minecraft] text-green-300 text-shadow-lg text-shadow-black/40 text-xl mt-2">
        You can also press this button
      </p>
      <button
          className={`
            ${mcBox}
            mt-4 text-white text-center text-[1.2rem] text-shadow-black text-shadow-lg/40 w-64 truncate p-1 block
          `}
          onClick={onStart}>
        Start
      </button>
    </div>
  );
}