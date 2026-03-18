import stone from "../assets/stone.jpg";
import About from "./About";

interface Props {
  activePanel: string;
}

export default function ContentPanel({ activePanel }: Props) {

  let content, title;

  switch (activePanel) {
    case "about":
      content = <About />;
      title = "About Me"
      break;

    case "projects":
      content = <div>My Projects are Coming Soon</div>;
      break;

    case "stuff":
      content = <div>Experience Coming Soon</div>;
      break;

    default:
      content = <div>Select something...</div>;
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
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${stone})`,
        }}
      >
        {content}
      </div>

    </div>
  );
}