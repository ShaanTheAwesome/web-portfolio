import { useState } from "react";

interface SkillRow {
  title: string;
  level: number;
  skills: string[];
}

const skillRows: SkillRow[] = [
  {
    title: "Tech Stack",
    level: 8,
    skills: ["Python", "C/C++", "Rust", "Java", "SQL", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks & Tools",
    level: 16,
    skills: ["React", "Flask", "Node.js", "FastAPI", "Pandas", "PostgreSQL", "AWS", "Docker", "Git/GitHub", "Vercel", "CloudFlare"],
  },
  {
    title: "Languages",
    level: 24,
    skills: ["English", "Chinese", "Hindi", "Sindhi"],
  },
];

// Runic glyphs (Unicode Runic block, U+16A0 onward) stand in for the
// Standard Galactic Alphabet cipher used by Minecraft's enchanting table.
const RUNES = Array.from({ length: 26 }, (_, i) => String.fromCodePoint(0x16a0 + i));

function cipher(text: string): string {
  return text
    .split("")
    .map((char) => {
      const index = char.toLowerCase().charCodeAt(0) - 97;
      return index >= 0 && index < 26 ? RUNES[index] : char;
    })
    .join("");
}

function LapisIcon() {
  return (
    <div
      className="w-4 h-4 border border-black flex-shrink-0 rounded-full"
      style={{
        background: "radial-gradient(circle at center, #145510 0%, #2a7d1f 35%, #47c22f 70%, #6ee85a 100%)",
        imageRendering: "pixelated",
      }}
    />
  );
}

export default function Skills() {
  const [revealed, setRevealed] = useState<boolean[]>(skillRows.map(() => false));

  const toggleRow = (idx: number) => {
    setRevealed((prev) => prev.map((val, i) => (i === idx ? !val : val)));
  };

  return (
    <div className="flex-1 flex flex-col justify-center max-w-2xl">

      {skillRows.map((row, idx) => (
        <div
          key={row.title}
          onClick={() => toggleRow(idx)}
          className="cursor-pointer outline outline-2 outline-black border-4 border-b-6
                      border-t-[#E4CDA5] border-l-[#E4CDA5] border-r-[#4a3c28] border-b-[#4a3c28]
                      hover:border-t-[#FABBEF] hover:border-l-[#FABBEF]
                      bg-[#A09071] hover:bg-[#B588AC] transition-colors duration-150 p-3"
        >
          <div className="flex items-center gap-3 mb-2">
            <LapisIcon />
            <span className="text-yellow-200 text-lg text-shadow-lg text-shadow-black/50">{row.title}</span>
            <span className="ml-auto text-l text-green-300 text-shadow-lg text-shadow-black/50">Lvl {row.level}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {row.skills.map((skill) => (
              <span
                key={skill}
                className={`text-sm px-2 py-0.5 rounded border ${
                  revealed[idx]
                    ? "bg-black/20 border-white/20 text-white"
                    : "bg-black/10 text-shadow-none border-white/10 text-gray-800"
                }`}
              >
                {revealed[idx] ? skill : cipher(skill)}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
