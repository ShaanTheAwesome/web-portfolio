import { me } from "../../assets";

export default function About() {

  return (
    <div className="flex w-full h-full gap-[5%] text-xl">

      {/* LEFT — TEXT (55%) */}
      <div className="flex-1 min-w-0 flex flex-col gap-[1rem]">
        <p>
          Hey, I'm Shaan! I completed a Computer Science degree at the University of Melbourne and am actively looking for roles revolving around Software Development.
        </p>
        <p>
          I currently work as a remote freelancer for the company Votanic Limited which is based in Hong Kong SAR. Our aim is to close the gap between VR and education by building interactive applications that illustrate science concepts for up to grade 12 students.
        </p>
        <p>
          Outside of work, I enjoy learning about the latest tech, playing video games, speedcubing, going out for walks, gymming, coffee chats, and am very open to trying new things. Feel free to shoot me a message if you would like to do anything.
        </p>
      </div>

      {/* RIGHT — IMAGE (40%) */}
      <div className="flex-shrink-0 flex justify-center items-start">
        <img
          src={me}
          alt="Profile"
          className="w-full h-[25rem] object-cover border-2 border-black"
        />
      </div>

    </div>
  );
}