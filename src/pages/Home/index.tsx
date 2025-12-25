import { Hero } from "../../components/Hero"
import { MdCheckCircleOutline } from "react-icons/md";

export function Home(){
    return (
      <div className="max-w-350">
        <Hero />
        <div className="min-h-screen bg-black w-full flex items-center justify-center flex-col">
          <div className="flex flex-col">
            <h1 className="text-white mb-10 text-3xl font-medium max-w-sm">
              Pilares essenciais para um agendamento simples
            </h1>
            <div className="flex gap-5">
              <div className="max-w-sm bg-black rounded-lg p-10 h-70 hover:scale-105 duration-300 ease-in-out border border-solid border-[#f0a]">
                <div className="bg-[#000000] border border-solid border-[#f0a] w-10 h-10 flex items-center justify-center rounded-lg">
                  <MdCheckCircleOutline className="text-2xl text-[#f0a]" />
                </div>
                <p className="font-bold text-lg mt-5 text-white">Dashboard</p>
                <p className="mt-5 text-gray-400 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
                  architecto unde sed minima recusandae odit dicta quod sint,
                  voluptate ex velit similique molestias saepe tenetur? Libero
                  quod nihil quae soluta?
                </p>
              </div>
              <div className="max-w-sm bg-black rounded-lg p-10 h-70 hover:scale-105 duration-300 ease-in-out border border-solid border-[#f0a]">
                <div className="bg-[#000000] border border-solid border-[#f0a] w-10 h-10 flex items-center justify-center rounded-lg">
                  <MdCheckCircleOutline className="text-2xl text-[#f0a]" />
                </div>
                <p className="font-bold text-lg mt-5 text-white">Dashboard</p>
                <p className="mt-5 text-gray-400 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
                  architecto unde sed minima recusandae odit dicta quod sint,
                  voluptate ex velit similique molestias saepe tenetur? Libero
                  quod nihil quae soluta?
                </p>
              </div>
              <div className="max-w-sm bg-black rounded-lg p-10 h-70 hover:scale-105 duration-300 ease-in-out border border-solid border-[#f0a]">
                <div className="bg-[#000000] border border-solid border-[#f0a] w-10 h-10 flex items-center justify-center rounded-lg">
                  <MdCheckCircleOutline className="text-2xl text-[#f0a]" />
                </div>
                <p className="font-bold text-lg mt-5 text-white">Dashboard</p>
                <p className="mt-5 text-gray-400 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
                  architecto unde sed minima recusandae odit dicta quod sint,
                  voluptate ex velit similique molestias saepe tenetur? Libero
                  quod nihil quae soluta?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-screen bg-black">
          <div>
            <div className="bg-[#070707]"></div>
          </div>
        </div>
      </div>
    );
}