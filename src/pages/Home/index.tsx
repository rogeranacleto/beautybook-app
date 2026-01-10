import { Hero } from "../../components/Hero"
import { MdCheckCircleOutline } from "react-icons/md";
import imgBeautyBook from "../../assets/img-beautybook.jpg";
import { Footer } from "../../components/Footer";
import { MdOutlinePerson } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineClipboardCheck } from "react-icons/hi";

export function Home(){
    return (
      <div className="max-w-screen w-full">
        <Hero />
        <div
          className="bg-black w-full flex items-center justify-center flex-col p-5 pl-30"
          id="mission"
        >
          <div className="flex flex-col">
            <h1 className="text-white mb-10 text-3xl font-medium max-w-sm">
              Pilares essenciais para um agendamento simples
            </h1>
            <div className="flex gap-5 flex-wrap">
              <div className="max-w-sm bg-black rounded-lg p-10 h-80 hover:scale-105 duration-300 ease-in-out border border-solid border-[#a1999918]">
                <div className="bg-[#000000] border border-solid border-[#f0a] w-10 h-10 flex items-center justify-center rounded-lg">
                  <LuLayoutDashboard className="text-2xl text-[#f0a]" />
                </div>
                <p className="font-medium text-lg mt-5 text-white">Dashboard</p>
                <p className="mt-5 text-gray-400 text-sm">
                  Tenha uma visão geral do sistema, acompanhe clientes ativos e
                  inativos, procedimentos em andamento ou finalizados, e
                  visualize tudo rapidamente em cards informativos e tabelas
                  para decisões mais rápidas.
                </p>
              </div>
              <div className="max-w-sm bg-black rounded-lg p-10 h-80 hover:scale-105 duration-300 ease-in-out border border-solid border-[#a1999918]">
                <div className="bg-[#000000] border border-solid border-[#f0a] w-10 h-10 flex items-center justify-center rounded-lg">
                  <MdOutlinePerson className="text-2xl text-[#f0a]" />
                </div>
                <p className="font-medium text-lg mt-5 text-white">Clientes</p>
                <p className="mt-5 text-gray-400 text-sm">
                  Cadastre todos os seus clientes em uma tabela organizada,
                  armazene informações importantes, ative ou inative registros
                  facilmente e acompanhe a quantidade de clientes ativos e
                  inativos para ter mais controle do seu cadastro.
                </p>
              </div>
              <div className="max-w-sm bg-black rounded-lg p-10 h-80 hover:scale-105 duration-300 ease-in-out border border-solid border-[#a1999918]">
                <div className="bg-[#000000] border border-solid border-[#f0a] w-10 h-10 flex items-center justify-center rounded-lg">
                  <HiOutlineClipboardCheck className="text-2xl text-[#f0a]" />
                </div>
                <p className="font-medium text-lg mt-5 text-white">
                  Atendimentos
                </p>
                <p className="mt-5 text-gray-400 text-sm">
                  Registre novos atendimentos vinculando clientes cadastrados,
                  defina valores e detalhes do atendimento, acompanhe status em
                  andamento ou finalizado, e visualize o histórico completo de
                  procedimentos concluídos com organização e clareza.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="min-h-screen bg-black flex items-center justify-center p-5 pb-15"
          id="platform"
        >
          <div className="flex gap-5 flex-wrap">
            <div>
              <h1 className="text-white mb-10 text-3xl font-medium max-w-sm">
                A plataforma é 100% grátis, utilize sem nenhum custo
              </h1>
              <img
                src={imgBeautyBook}
                alt="Beauty Book Background"
                className="h-147 rounded-2xl border border-solid border-[#a1999918]"
              />
            </div>
            <div className="mt-1 flex flex-col gap-5">
              <div className="mt-37 hover:scale-105 duration-300 ease-in-out bg-black text-white max-w-lg border border-solid border-[#a1999918] p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <MdCheckCircleOutline className="text-lg text-[#f0a] font-bold" />
                  <p className="text-[13px] text-[#f0a] font-bold">
                    VISÃO GERAL
                  </p>
                </div>
                <p className="text-lg mb-2 font-medium">Controle completo</p>
                <p className="text-sm text-gray-400 mb-2">
                  Visualize clientes, procedimentos em andamento e finalizados
                  rapidamente em um só lugar.
                </p>
                <p className="text-gray-400 text-sm">R$0,00</p>
              </div>
              <div className="hover:scale-105 duration-300 ease-in-out bg-black text-white max-w-lg border border-solid border-[#a1999918] p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <MdCheckCircleOutline className="text-lg text-[#f0a] font-bold" />
                  <p className="text-[13px] text-[#f0a] font-bold">CONTROLE</p>
                </div>
                <p className="text-lg mb-2 font-medium">
                  Clientes centralizados
                </p>
                <p className="text-sm text-gray-400 mb-2">
                  Cadastre clientes rapidamente, organize informações pessoais,
                  ative ou inative registros facilmente.
                </p>
                <p className="text-gray-400 text-sm">R$0,00</p>
              </div>
              <div className="hover:scale-105 duration-300 ease-in-out bg-black text-white max-w-lg border border-solid border-[#a1999918] p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <MdCheckCircleOutline className="text-lg text-[#f0a] font-bold" />
                  <p className="text-[13px] text-[#f0a] font-bold">
                    ATENDIMENTOS
                  </p>
                </div>
                <p className="text-lg mb-2 font-medium">
                  Controle de atendimentos
                </p>
                <p className="text-sm text-gray-400 mb-2">
                  Registre procedimentos, acompanhe atendimentos em andamento,
                  finalize serviços e consulte históricos facilmente.
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