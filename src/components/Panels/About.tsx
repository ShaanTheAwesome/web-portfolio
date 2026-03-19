import ME from "../../assets/me.jpg";

export default function About() {

  return (
    <div className="flex w-full h-full gap-[5%] text-xl">

      {/* LEFT — TEXT (55%) */}
      <div className="flex-1 min-w-0 flex flex-col gap-[1rem]">
        <p>
          Hey, I'm Shaan, a recent CS Grad looking for job positions in Software Engineering, Backend, and Frontend.
        </p>
        <p>
          I'm originally from Okinawa, Japan, but moved to Hong Kong when I was around 5 years old. I then went on to complete my A-Levels and moved to Melbourne to pursue my degree in Computer Science.
        </p>
        <p>
          I enjoy learning about the latest tech, playing video games, speedcubing, going out for walks, gymming, coffee chats, and am very open to trying new things. Feel free to shoot me a message if you would like to do anything.
        </p>
      </div>

      {/* RIGHT — IMAGE (40%) */}
      <div className="flex-shrink-0 flex justify-center items-start">
        <img
          src={ME}
          alt="Profile"
          className="w-full h-[25rem] object-cover border-2 border-black"
        />
      </div>

    </div>
  );
}