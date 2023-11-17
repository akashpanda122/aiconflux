import { useEffect } from "react";
import Img from "../assets/img.jpg";
import Logo from "../assets/logo.png";
import Image1 from "../assets/heroAssets/image1.jpg";
import Image2 from "../assets/heroAssets/image2.jpg";
import Image3 from "../assets/heroAssets/image3.jpg";
import Image4 from "../assets/heroAssets/image4.png";
import Image5 from "../assets/heroAssets/image5.png";
import Image6 from "../assets/heroAssets/image6.png";
import Image7 from "../assets/heroAssets/image7.png";
import Image8 from "../assets/heroAssets/image8.jpg";
import Image9 from "../assets/heroAssets/image9.jpg";
import Brush from "../assets/icons/brush.svg";
import Clapping from "../assets/icons/clapping.svg";
import Cursor from "../assets/icons/cursor.svg";
import Images from "../assets/icons/image.svg";
import Sparkle from "../assets/icons/sparkle.svg";
import Faq from "../components/Faq";
import Button from "../components/Button";

function Home() {
  useEffect(() => {
    const { hash } = window.location;

    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  return (
    <div>
      <div className="py-8 md:py-16 h-full">
        <div className="md:max-w-[75] mx-auto text-center md:mt-8">
          <h1 className="text-5xl text-white pb-4 md:text-7xl">
            Join the Future of
            <br /> Art and Creativity
          </h1>
          <p className="text-xl mx-auto md:max-w-[60%] pb-12">
            Embrace the Revolutionary Power of AIConflux: 
            Unleashing Limitless Imagination and Endless Possibilities
          </p>
          <button>Join Now</button>
        </div>
        <div className="flex gap-4 mt-32 overflow-x-clip">
          <div className="flex flex-col gap-4 -translate-y-20 min-w-fit">
            <img
              src={Image4}
              className="rounded-lg object-contain w-full"
              alt="image4"
            />
            <img
              src={Image5}
              className="rounded-lg object-contain w-full"
              alt="image5"
            />
          </div>
          <img
            src={Image3}
            className="rounded-lg object-contain w-full"
            alt="image3"
          />
          <img
            src={Image1}
            className="rounded-lg object-contain w-full"
            alt="image1"
          />
          <img
            src={Image2}
            className="rounded-lg object-contain w-full"
            alt="image2"
          />
          <div className="flex flex-col gap-4 min-w-fit -translate-y-16">
            <img
              src={Image6}
              className="rounded-lg object-contain w-full"
              alt="image6"
            />
            <img
              src={Image7}
              className="rounded-lg object-contain w-full"
              alt="image7"
            />
          </div>
        </div>
        <div className="px-16 text-center mt-36 mx-auto">
          <h1 className="pb-4">
            The Complete Toolkit for
            <br /> Digital Art Landscape
          </h1>
          <p>
            Our platform provide a comprehensive toolkit designed to simplify 
            <br /> the process of creating and collecting NFTs.
          </p>
          <div className="flex flex-wrap gap-y-24 mt-24 justify-center">
            <div className="text-center max-w-[30%]">
              <div className="toolkit-icon mx-auto">
                <img src={Sparkle} className="h-6" alt="sparkle" />
              </div>
              <p className="text-xl mt-4 mb-1 text-white font-medium">
                AI-Powered Suggestions
              </p>
              <p className="text-center max-w-[75%] mx-auto">
                Get creative inspiration and suggestions from AI algorithms for
                your storytelling.
              </p>
            </div>
            <div className="text-center max-w-[30%]">
              <div className="toolkit-icon mx-auto">
                <img src={Clapping} className="h-6" alt="Clapping" />
              </div>
              <p className="text-xl mt-4 mb-1 text-white font-medium">
                Marketplace
              </p>
              <p className="text-center max-w-[75%] mx-auto">
                Seamlessly collaborate with other users to co-create captivating
                narratives.
              </p>
            </div>
            <div className="text-center max-w-[30%]">
              <div className="toolkit-icon mx-auto">
                <img src={Brush} className="h-6" alt="Brush" />
              </div>
              <p className="text-xl mt-4 mb-1 text-white font-medium">
                Artwork Generation
              </p>
              <p className="text-center max-w-[75%] mx-auto">
                Use AI to generate stunning artwork and illustrations to
                complement your stories.
              </p>
            </div>
            <div className="text-center max-w-[30%]">
              <div className="toolkit-icon mx-auto">
                <img src={Images} className="h-6" alt="Images" />
              </div>
              <p className="text-xl mt-4 mb-1 text-white font-medium">
                Community
              </p>
              <p className="text-center max-w-[75%] mx-auto">
                Connect with other artists and collectors in our community.
                Share your artworks, get feedback, and collaborate.
              </p>
            </div>
            <div className="text-center max-w-[30%]">
              <div className="toolkit-icon mx-auto">
                <img src={Cursor} className="h-6" alt="cursor" />
              </div>
              <p className="text-xl mt-4 mb-1 text-white font-medium">
                Learning Resources
              </p>
              <p className="text-center max-w-[75%] mx-auto">
                We have got you covered with a wealth of resources to help 
                you navigate the digital art landscape.
              </p>
            </div>
          </div>
        </div>
        <div className="px-16 text-center mt-36 mx-auto">
          <h1 className="pb-4">
            Explore Our Range of
            <br /> Visual Art Styles
          </h1>
          <p>
          Dive into the diverse world of digital art! From abstract and surreal to pop art and pixel art, 
          <br /> our AI-powered platform offers a wide range of visual art styles.
          </p>
          <div className="grid grid-cols-3 mt-24 gap-x-8 gap-y-4">
            <div className="col-span-1">
              <div className="bg-blue-200 h-[250px] mb-8 overflow-clip rounded-2xl relative">
                <img src={Image3} className="object-cover w-full" alt="img" />
                <p className="absolute font-medium left-4 bottom-2">
                  Pastel Art
                </p>
              </div>
              <div className="bg-green-200 h-[373px] overflow-clip rounded-2xl relative">
                <img src={Image2} className="object-cover w-full" alt="img" />
                <p className="absolute font-medium left-4 bottom-2">
                  Realistic Art
                </p>
              </div>
            </div>
            <div className="col-span-1 row-span-2 bg-red-200 h-[655px] overflow-clip rounded-2xl relative">
              <img
                src={Img}
                className="object-cover w-full h-full"
                alt="img"
              />
              <p className="absolute font-medium left-4 bottom-2">
                Sci-fi Art
              </p>
            </div>
            <div className="col-span-1">
              <div className="bg-yellow-200 h-[373px] mb-8 overflow-clip rounded-2xl relative">
                <img src={Image8} className="object-cover w-full" alt="img" />
                <p className="absolute font-medium left-4 bottom-2">
                  3D Render
                </p>
              </div>
              <div className="bg-purple-200 h-[250px] overflow-clip rounded-2xl relative">
                <img src={Image2} className="object-cover w-full" alt="img" />
                <p className="absolute font-medium left-4 bottom-2">
                  Realistic Art
                </p>
              </div>
            </div>
            <div className="col-span-2 bg-indigo-200 h-[373px] overflow-clip rounded-2xl relative">
              <img src={Image9} className="object-cover w-full" alt="img" />
              <p className="absolute font-medium left-4 bottom-2">
                3D Render
              </p>
            </div>
            <div className="col-span-1 bg-indigo-200 h-[373px] overflow-clip rounded-2xl relative">
              <img src={Image1} className="object-cover w-full" alt="img" />
              <p className="absolute font-medium left-4 bottom-2">
                Anime Pastel Art
              </p>
            </div>
          </div>
        </div>
        <div className="px-16 text-center mt-36 mx-auto">
          <h1 className="pb-4">
            How It Works
          </h1>
          <p>
            We make the process of transforming your imagination into <br />
            captivating AI art
          </p>
          <div className="mt-12 flex gap-12 flex-col max-w-[70%] mx-auto items-center justify-center">
            <div className="steps flex items-center h-full justify-center ">
              <div className="max-w-[60%] py-24">
                <div className="toolkit-icon text-3xl px-3 py-1 text-white mx-auto font-medium">
                  1
                </div>
                <p className="text-3xl my-3">Create with AI</p>
                <p>
                  Use our AI Art Generator to create unique digital artworks. 
                  Choose from a wide range of visual art styles and let your 
                  creativity flow!
                </p>
              </div>
            </div>
            <div className="steps flex items-center h-full justify-center ">
              <div className="max-w-[60%] py-24">
                <div className="toolkit-icon text-3xl px-3 py-1 text-white mx-auto font-medium">
                  2
                </div>
                <p className="text-3xl my-3">Mint Your NFT</p>
                <p>
                  Once you are satisfied with your artwork, use our NFT Minting Tool 
                  to convert your digital artwork into an NFT with just a few clicks.
                </p>
              </div>
            </div>
            <div className="steps flex items-center h-full justify-center ">
              <div className="max-w-[60%] py-24">
                <div className="toolkit-icon text-3xl px-3 py-1 text-white mx-auto font-medium">
                  3
                </div>
                <p className="text-3xl my-3">Showcase or Collect</p>
                <p>
                  Showcase your NFTs in our Marketplace for others to appreciate and collect. 
                  You can also explore and collect unique NFTs created by other artists.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-16 text-center mt-36 mx-auto">
          <h1 className="pb-4">
            Everything You Need to <br /> Know About AIConflux
          </h1>
          <p>
            Explore our FAQ section to find answers to some common questions
            about AIConflux
          </p>
          <Faq />
        </div>
        <div className="max-w-[65%] mx-auto steps-inner">
          <div className="bg-black-gradient-2 py-32 steps flex flex-col px-16 text-center mt-48 mb-24 mx-auto items-center h-full justify-center">
            <img src={Logo} className="h-14 mx-auto" alt="logo" />
            <p className="text-5xl mt-6">Embrace the Revolutionary Power of AIConflux?</p>
            <p className="my-4">
              Immerse Yourself in a World of Boundless Creativity and
              Collaborative Storytelling.
            </p>
            <div className="flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
