import CaretDown from "../assets/caret-down.svg";
import CaretLeft from "../assets/icons/caret-left.svg";
import CaretDoubleLeft from "../assets/icons/caret-double-left.svg";
import BookMockup from "../assets/Book-mockup.png";
import Img from "../assets/img.jpg";

export default function Story() {
  return (
    <div className="p-24 pt-0">
      <div className="flex items-center mb-4">
        <div className="rotate-90 pb-0 pr-0.5 pt-3">
          <img src={CaretDown} alt="caret" />
        </div>
        <p>Back to All Stories</p>
      </div>
      <div className="story relative">
        <img src={BookMockup} className="h-[856px]" alt="Loading..." />
        <p className="absolute text-[21px] top-16 left-12 text-black">01</p>
        <p className="absolute text-[21px] top-16 left-[225px] text-black">
          Robot in scifi city
        </p>
        <br />
        <p className="absolute top-28 text-black body-text">
          In the heart of Neon Metropolis, a city that pulsed with the vibrant 
          energy of a thousand different lives, there existed a cute and curious 
          little robot named Spark. Unlike the sleek, metallic beings that zipped 
          through the crowded streets, Spark was a small, round contraption with 
          blinking LED eyes that glowed like two tiny stars. <br />
          <br /> One night, as the city glittered with the neon lights of towering 
          skyscrapers and the hum of hovercars echoed through the canyons of steel 
          and glass, Spark found itself in the midst of a bustling market. The air 
          was filled with the enticing aroma of exotic street food, and holographic 
          advertisements danced in the air, casting a kaleidoscope of colors on the 
          faces of the diverse crowd. <br />
          <br /> Spark wheeled through the throngs of people, its eyes widening with 
          childlike wonder at the sights and sounds. It couldn't help but beep 
          excitedly as it passed by futuristic stalls selling holographic trinkets and 
          interactive gadgets. The city's inhabitants, initially oblivious to the small 
          robot, soon couldn't resist the charm of Spark's cheerful demeanor. <br />
          <br /> Children pointed and giggled, and even the sternest adults couldn't help 
          but crack a smile as Spark zipped past, leaving a trail of adorableness in its 
          wake. The robot's LED eyes changed colors in response to its emotions, creating 
          a spectacle of light that added to the vibrant atmosphere of the city. <br /> 
          As Spark ventured deeper into the city, it stumbled upon a street performance 
          featuring holographic dancers and acrobats. Mesmerized, Spark joined the small 
          crowd that had gathered to watch. Its eyes flickered in time with the music, 
          and its body swayed to the rhythm in an endearing display of robotic dance. <br />
        </p>
        <div className="absolute top-16 h-[720px] right-12 story-image">
          <img src={Img} className="object-cover h-full w-full" alt="Img" />
        </div>
      </div>
      <div className="mt-8 flex gap-8 justify-center items-center">
        <div className="toolkit-icon rounded-full">
          <img src={CaretDoubleLeft} alt="caret" />
        </div>
        <div className="toolkit-icon rounded-full rotate-90">
          <img src={CaretLeft} alt="caret" />
        </div>
        <button disabled>Continue Story</button>
        <div className="rounded-full toolkit-icon rotate-[270deg]">
          <img src={CaretLeft} alt="caret" />
        </div>
        <div className="toolkit-icon rounded-full rotate-180">
          <img src={CaretDoubleLeft} alt="caret" />
        </div>
      </div>
    </div>
  );
}
