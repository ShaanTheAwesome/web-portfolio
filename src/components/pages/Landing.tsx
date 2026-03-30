import { useState } from "react";
import { clouds } from '../../assets/index';

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
        <p className="font-[Minecraft] text-red-400 text-xl mt-4">
          Unknown command. Try /start
        </p>
      )}
    </div>
  );
}