import { Hero } from "../../components/Hero";
import { MdCheckCircleOutline } from "react-icons/md";
import imgBeautyBook from "../../assets/img-beautybook.jpg";
import { Footer } from "../../components/Footer";
import { MdOutlinePerson } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineClipboardCheck } from "react-icons/hi";

export function Home() {
  return (
    <div className="max-w-screen w-full overflow-x-hidden">
      <Hero />
      <div
        className="bg-black w-full flex items-center justify-center flex-col px-5 py-10 lg:pl-30"
        id="mission"
      >
        <div className="flex flex-col w-full max-w-7xl">
          <h1 className="text-white mb-10 text-3xl font-medium max-w-sm">
            Pilares essenciais para um agendamento simples
          </h1>

          <div className="flex gap-5 flex-wrap justify-center lg:justify-start">
            <div className="w-full sm:max-w-sm bg-black rounded-lg p-10 h-75 hover:scale-105 duration-300 ease-in-out border border-solid border-[#a1999918]">
              <div className="bg-[#000000] border border-solid border-[#f0a] w-10 h-10 flex items-center justify-center rounded-lg">
                <LuLayoutDashboard className="text-2xl text-[#f0a]" />
              </div>
              <p className="font-medium text-lg mt-5 text-white">Dashboard</p>
              <p className="mt-5 text-gray-400 text-sm">
                Tenha uma visão geral do sistema, acompanhe clientes ativos e
                inativos, procedimentos em andamento ou finalizados.
              </p>
            </div>
            <div className="w-full sm:max-w-sm bg-black rounded-lg p-10 h-75 hover:scale-105 duration-300 ease-in-out border border-solid border-[#a1999918]">
              <div className="bg-[#000000] border border-solid border-[#f0a] w-10 h-10 flex items-center justify-center rounded-lg">
                <MdOutlinePerson className="text-2xl text-[#f0a]" />
              </div>
              <p className="font-medium text-lg mt-5 text-white">Clientes</p>
              <p className="mt-5 text-gray-400 text-sm">
                Cadastre todos os seus clientes em uma tabela organizada e
                acompanhe clientes ativos e inativos.
              </p>
            </div>
            <div className="w-full sm:max-w-sm bg-black rounded-lg p-10 h-75 hover:scale-105 duration-300 ease-in-out border border-solid border-[#a1999918]">
              <div className="bg-[#000000] border border-solid border-[#f0a] w-10 h-10 flex items-center justify-center rounded-lg">
                <HiOutlineClipboardCheck className="text-2xl text-[#f0a]" />
              </div>
              <p className="font-medium text-lg mt-5 text-white">
                Atendimentos
              </p>
              <p className="mt-5 text-gray-400 text-sm">
                Registre novos atendimentos, acompanhe status e visualize o
                histórico completo de procedimentos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-black flex items-center justify-center px-5 py-10" id="platform">
        <div className="flex flex-col lg:flex-row gap-10 max-w-7xl w-full">
          <div className="w-full lg:max-w-md">
            <h1 className="text-white mb-10 text-3xl font-medium max-w-sm">
              A plataforma é 100% grátis, utilize sem nenhum custo
            </h1>
            <img
              src={imgBeautyBook}
              alt="Beauty Book Background"
              className="w-full h-auto lg:h-147 rounded-2xl border border-solid border-[#a1999918]"
            />
          </div>
          <div className="flex flex-col gap-5 w-full lg:max-w-lg">
            <div className="lg:mt-37 hover:scale-105 duration-300 ease-in-out bg-black text-white border border-solid border-[#a1999918] p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <MdCheckCircleOutline className="text-lg text-[#f0a]" />
                <p className="text-[13px] text-[#f0a] font-bold">VISÃO GERAL</p>
              </div>
              <p className="text-lg mb-2 font-medium">Controle completo</p>
              <p className="text-sm text-gray-400 mb-2">
                Visualize clientes e atendimentos rapidamente.
              </p>
              <p className="text-gray-400 text-sm">R$0,00</p>
            </div>

            <div className="hover:scale-105 duration-300 ease-in-out bg-black text-white border border-solid border-[#a1999918] p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <MdCheckCircleOutline className="text-lg text-[#f0a]" />
                <p className="text-[13px] text-[#f0a] font-bold">CONTROLE</p>
              </div>
              <p className="text-lg mb-2 font-medium">Clientes centralizados</p>
              <p className="text-sm text-gray-400 mb-2">
                Organize informações e controle registros facilmente.
              </p>
              <p className="text-gray-400 text-sm">R$0,00</p>
            </div>

            <div className="hover:scale-105 duration-300 ease-in-out bg-black text-white border border-solid border-[#a1999918] p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <MdCheckCircleOutline className="text-lg text-[#f0a]" />
                <p className="text-[13px] text-[#f0a] font-bold">
                  ATENDIMENTOS
                </p>
              </div>
              <p className="text-lg mb-2 font-medium">
                Controle de atendimentos
              </p>
              <p className="text-sm text-gray-400 mb-2">
                Registre, acompanhe e finalize serviços facilmente.
              </p>
              <p className="text-gray-400 text-sm">R$0,00</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
