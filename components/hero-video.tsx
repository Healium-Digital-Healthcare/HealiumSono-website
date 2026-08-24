
export default function HeroVideo() {

  return (
    <div id="about" className="relative w-full h-[30vh] md:h-[90vh] overflow-hidden">
      <div
        className="relative w-full h-full cursor-pointer"
      >
        <div className="absolute inset-0 w-full h-full">
        <iframe 
        className="w-full h-full"
        src="https://www.youtube.com/embed/OuQjcn0XPic?si=G6T_PfXG0bJCysmE"
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen/>
      </div>
      </div>
    </div>
  );
}
