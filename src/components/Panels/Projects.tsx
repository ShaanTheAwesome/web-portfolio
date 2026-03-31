import { chef, portfolio } from "../../assets";


type Project = {
  name: string;
  description: string;
  tech: string[];
  image?: string;
  live?: string;
  github?: string;
};

const isVideo = (src: string) => src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".ogg");

const projects: Project[] = [
  {
    name: "Portfolio Website",
    description: "This website. A Minecraft-themed interactive portfolio with a command terminal interface and dynamic content panels.",
    tech: ["React", "TypeScript XML", "Tailwind", "Framer Motion"],
    image: portfolio,
    github: "https://github.com/ShaanTheAwesome/web-portfolio",
  },
  {
    name: "Deepfake Media Detector",
    description: "Full video analysis pipeline for detecting AI-generated media. Includes frame-by-frame forensic analysis and structured report generation.",
    tech: ["ReactJS", "Flask", "Python", "Docker", "PostGreSQL"],
    image: "/ITProjectPresentation.mp4"
  },
  {
    name: "Chef's Surprise",
    description: "Random meal generator with cuisine filtering, dynamic cooking instructions, and dish images via REST APIs.",
    tech: ["JavaScript", "CSS", "HTML", "REST APIs"],
    image: chef,
    github: "https://github.com/ShaanTheAwesome/Chefs-Surprise",
  },
  {
    name: "Business Card Maker",
    description: "Drag-and-drop business card creator with live previews and export to PDF, PNG, and JPEG formats.",
    tech: ["ReactJS", "html2canvas", "jspdf"],
    github: "https://github.com/ShaanTheAwesome/business-card-maker",
  },
  {
    name: "Shadow Mario",
    description: "A 2D platformer built in Java with modular player, enemy, and physics systems using object-oriented design.",
    tech: ["Java", "Bagel"],
    github: "https://github.com/ShaanTheAwesome/ShadowMario",
  },
];

export default function Projects() {
  return (
    <div className="text-shadow-black text-shadow-lg/60 flex flex-col gap-12 p-4 pb-8">
      {projects.map((project, idx) => {
        const isLeft = idx % 2 === 0;

        return (
          <div
            key={idx}
            className={`flex items-center gap-6 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
          >
            {/* Text Side */}
            <div className={`flex flex-col gap-3 w-1/2 ${isLeft ? "items-start text-left" : "items-end text-right"}`}>

              {/* Project Name */}
              <span className="text-yellow-300 text-2xl">{project.name}</span>

              {/* Tech Stack */}
              <div className={`flex flex-wrap gap-2 ${isLeft ? "justify-start" : "justify-end"}`}>
                {project.tech.map((t, i) => (
                  <span key={i} className="text-sm bg-white/25 border border-white/20 text-green-300 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-white/80 text-base leading-relaxed">{project.description}</p>

              {/* Links */}
              <div className={`flex gap-4 text-sm ${isLeft ? "justify-start" : "justify-end"}`}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-200 transition-colors duration-200 underline underline-offset-2">
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-200 transition-colors duration-200 underline underline-offset-2">
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Image Side */}
            <div className="w-1/2 aspect-video bg-white/5 border border-white/20 rounded-md overflow-hidden flex items-center justify-center">
              {project.image ? (
                isVideo(project.image) ? (
                  <video src={project.image} controls className="w-full h-full object-cover" />
                ) : (
                  <a href={project.live ?? project.github ?? "#"} target="_blank" rel="noopener noreferrer" className="w-full h-full">
                    <img src={project.image} alt={project.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </a>
                )
              ) : (
                <span className="text-white/30 text-sm">No preview available</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}