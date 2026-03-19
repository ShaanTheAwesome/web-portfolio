import sunset from "../assets/clouds.jpg";
import { mcBox } from "./Minecraft";

export default function Navbar() {
  
  const handleResume = () => {
    window.open("/resume.pdf", "_blank", "noopener,noreferrer");
  }

  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/shaanpirdnani/");
  }

  const handleGithub = () => {
    window.open("https://github.com/ShaanTheAwesome");
  }

  return (
    <div>
      <div className="font-[Minecraft] bg-[length:120%] bg-center w-full h-[16rem] pt-[2.7rem]" style={{ backgroundImage : `url(${sunset})`}}>
        <h1 className="text-shadow-lg text-shadow-black text-white text-[3rem] text-center text-margin">Pirdnani Shaan Satoshi Lalit</h1>
        <div className="flex my-[1rem] gap-[1rem] justify-center">

          <button
              className={`
                ${mcBox}
                text-white text-center text-[1.2rem] text-shadow-black text-shadow-lg/40 w-64 truncate p-1 block
              `}
              onClick={handleResume}>
            Resume
          </button>

          <button
              className={`
                ${mcBox}
                text-white text-center text-[1.2rem] text-shadow-black text-shadow-lg/40 w-64 truncate p-1 block
                `}
              onClick={handleLinkedIn}>
            LinkedIn
          </button>

          <button
              className={`
                ${mcBox}
                text-white text-center text-[1.2rem] text-shadow-black text-shadow-lg/40 w-64 truncate p-1 block
                `}
              onClick={handleGithub}>
            GitHub
          </button>

        </div>
      </div>
    </div>
  )
}