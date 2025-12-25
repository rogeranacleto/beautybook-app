import { Header } from "../Header";
import bgHero from "../../assets/background-hero-1.png";
import { FaArrowRight } from "react-icons/fa6";

export function Hero() {
  return (
    <div
      className="relative min-h-screen bg-cover max-w-350 w-full"
      style={{
        backgroundImage: `url(${bgHero})`,
        backgroundPosition: "center 10%",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-white">
        <header>
          <Header />
        </header>
        <div className="flex flex-col items-center mt-20">
          <p className="text-xs bg-[#0A0A0A] px-4 py-1 rounded-3xl border border-solid border-[#646161] flex items-center gap-2">
            <div className="h-2 w-2 bg-white rounded-full"></div>LOREM IPSUM
            LOREM
          </p>
          <p className="text-6xl font-medium mt-3 bg-linear-to-r from-white to-pink-800 bg-clip-text text-transparent pb-6">
            BeautyBook
          </p>
          <p className="text-center">
            Lorem ipsum molestias illum eligendi cupiditate <br /> fuga sed
            alias, possimus quasi nemo dicta fuga sed alias quas.
          </p>
          <button className="text-xs bg-white text-black px-8 py-4 flex items-center gap-3 rounded-3xl hover:scale-110 duration-200 ease-in-out mt-8 cursor-pointer">
            ACESSAR <FaArrowRight className="text-xs" />
          </button>
        </div>
      </div>
    </div>
  );
}
