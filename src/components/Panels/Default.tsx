import { me, baby, ymca } from '../../assets/index'

const photos = [
  { src: baby, alt: "Photo 1", caption: "baby me", rotation: "-rotate-3", top: "top-[0%]", left: "left-[2%]", width: "w-[45%]", aspect: "aspect-video" },
  { src: ymca, alt: "Photo 2", caption: "me in 2022", rotation: "rotate-8", top: "top-[8%]", left: "left-[67%]", width: "w-[22%]", aspect: "aspect-[3/4]" },
  { src: me, alt: "Photo 3", caption: "melbourne days", rotation: "-rotate-2", top: "top-[40%]", left: "left-[40%]", width: "w-[24%]", aspect: "aspect-[3/4]" },
];

export default function Default() {
  return (
    <div className="relative w-full h-full">
      {photos.map((photo, idx) => (
        <div
          key={idx}
          className={`absolute ${photo.top} ${photo.left} ${photo.width} ${photo.rotation} 
                      bg-white p-2 pb-4 shadow-lg/50 border border-black/20
                      hover:scale-105 hover:z-10 transition-transform duration-200`}
        >
          <div className={`${photo.aspect} overflow-hidden`}>
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Caption in the polaroid bar */}
          <p className="text-gray-500 text-center text-shadow-lg text-s mt-2 font-[Minecraft] tracking-wide">
            {photo.caption}
          </p>
        </div>
      ))}
    </div>
  );
}