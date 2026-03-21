import { stone, wood } from "../../assets";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";

interface Props {
  activePanel: string;
}

export default function ContentPanel({ activePanel }: Props) {

  let content, title, background;

  switch (activePanel) {
    case "projects":
      content = <Projects />;
      title = "Projects"
      background = wood;
      break;

    case "skills":
      content = <Skills />;
      title = "Tech Stack"
      background = wood;
      break;

    default:
      content = <About />;
      title = "About Me"
      background = stone;
      break;
  }

  return (
    <div className="font-[Minecraft] w-full h-[35rem]
                    outline-4 outline-black
                    border-4 border-white bg-[#C6C6C6]">

       {title && (
          <div className="px-4 py-2 rounded-md border-b-2 border-[#8b8b8b] text-[1.4rem] text-black text-shadow-lg/15">
            {title}
          </div>
        )}

      <div
        className="m-4 p-4 border-2 border-[#1a1a1a]
                   text-white overflow-y-auto h-[28rem]
                   text-shadow-black text-shadow-lg/30
                   bg-[length:75%]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${background})`,
        }}
      >
        {content}
      </div>

    </div>
  );
}