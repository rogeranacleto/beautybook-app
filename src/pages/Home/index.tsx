import { Hero } from "../../components/Hero"
import { MdCheckCircleOutline } from "react-icons/md";
import bgBeautyBook from "../../assets/bg-beautybook.png";
import { Footer } from "../../components/Footer";
export function Home(){
    return (
      <div className="max-w-350">
        <Hero />
        <div className="min-h-screen bg-black w-full flex items-center justify-center flex-col p-5">
          <div className="flex flex-col">
            <h1 className="text-white mb-10 text-3xl font-medium max-w-sm">
              Pilares essenciais para um agendamento simples
            </h1>
            <div className="flex gap-5 flex-wrap">
              <div className="max-w-sm bg-black rounded-lg p-10 h-80 hover:scale-105 duration-300 ease-in-out border border-solid border-[#f0a]">
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
              <div className="max-w-sm bg-black rounded-lg p-10 h-80 hover:scale-105 duration-300 ease-in-out border border-solid border-[#f0a]">
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
              <div className="max-w-sm bg-black rounded-lg p-10 h-80 hover:scale-105 duration-300 ease-in-out border border-solid border-[#f0a]">
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
        <div className="min-h-screen bg-black flex items-center justify-center p-5">
          <div className="flex gap-5 items-center flex-wrap">
            <div>
              <h1 className="text-white mb-10 text-3xl font-medium max-w-sm">
                A plataforma é 100% grátis, utilize sem nenhum custo
              </h1>
              <img
                src={bgBeautyBook}
                alt="Beauty Book Background"
                className="h-145 "
              />
            </div>
            <div className="mt-1 flex flex-col gap-5">
              <div className="mt-37 hover:scale-105 duration-300 ease-in-out bg-black text-white max-w-lg border border-solid border-[#a199995e] p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <MdCheckCircleOutline className="text-lg text-[#f0a] font-bold" />
                  <p className="text-[13px] text-[#f0a] font-bold">AGILIDADE</p>
                </div>
                <p className="text-lg mb-2 font-medium">Agendamento ágil</p>
                <p className="text-sm text-[#a19999] mb-2">
                  Lorem odit quasi, cumque consequuntur, sunt aspernatur
                  doloribus, et iure laudantium!
                </p>
                <p className="text-[#a19999] text-sm">R$0,00</p>
              </div>
              <div className="hover:scale-105 duration-300 ease-in-out bg-black text-white max-w-lg border border-solid border-[#a199995e] p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <MdCheckCircleOutline className="text-lg text-[#f0a] font-bold" />
                  <p className="text-[13px] text-[#f0a] font-bold">AGILIDADE</p>
                </div>
                <p className="text-lg mb-2 font-medium">Agendamento ágil</p>
                <p className="text-sm text-[#a19999] mb-2">
                  Lorem odit quasi, cumque consequuntur, sunt aspernatur
                  doloribus, et iure laudantium!
                </p>
                <p className="text-[#a19999] text-sm">R$0,00</p>
              </div>
              <div className="hover:scale-105 duration-300 ease-in-out bg-black text-white max-w-lg border border-solid border-[#a199995e] p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <MdCheckCircleOutline className="text-lg text-[#f0a] font-bold" />
                  <p className="text-[13px] text-[#f0a] font-bold">AGILIDADE</p>
                </div>
                <p className="text-lg mb-2 font-medium">Agendamento ágil</p>
                <p className="text-sm text-[#a19999] mb-2">
                  Lorem odit quasi, cumque consequuntur, sunt aspernatur
                  doloribus, et iure laudantium!
                </p>
                <p className="text-[#a19999] text-sm">R$0,00</p>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
}