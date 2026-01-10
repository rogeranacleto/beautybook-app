import { MdOutlinePersonOff } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";
import { BsPersonCheck } from "react-icons/bs";
import { useContext } from "react";
import { ClientsCardContext } from "../../contexts/ClientsCardContext";
export function ClientsCards() {
const {total, active, inactive} = useContext(ClientsCardContext);
  return (
    <div className="w-full">
      <div className="flex gap-7 flex-wrap">
        <div className="bg-black flex-1 min-w-70 min-h-45 rounded-lg flex justify-between p-6 border border-solid border-[#a1999918]">
          <div>
            <h1 className="text-white text-sm mb-2">Total de Clientes</h1>
            <p className="text-white font-bold text-3xl mb-3.5">{total}</p>
            <p className="text-sm text-[#8a8787]">
              Dados atualizados em tempo real
            </p>
          </div>
          <div className="border border-solid border-[#ff00aa71] h-12 rounded-full p-3 flex items-center">
            <MdOutlinePerson className="text-[#ff00aa71] text-2xl" />
          </div>
        </div>

        <div className="bg-black flex-1 min-w-70 min-h-45 rounded-lg flex justify-between p-6 border border-solid border-[#a1999918]">
          <div>
            <h1 className="text-white text-sm mb-2">Clientes Ativos</h1>
            <p className="text-white font-bold text-3xl mb-3.5">{active}</p>
            <p className="text-sm text-[#8a8787]">
              Dados atualizados em tempo real
            </p>
          </div>
          <div className="border border-solid border-[#ff00aa71] h-12 rounded-full p-3 flex items-center">
            <BsPersonCheck className="text-[#ff00aa71] text-2xl" />
          </div>
        </div>

        <div className="bg-black flex-1 min-w-70 min-h-45 rounded-lg flex justify-between p-6 border border-solid border-[#a1999918]">
          <div>
            <h1 className="text-white text-sm mb-2">Clientes Inativos</h1>
            <p className="text-white font-bold text-3xl mb-3.5">{inactive}</p>
            <p className="text-sm text-[#8a8787]">
              Dados atualizados em tempo real
            </p>
          </div>
          <div className="border border-solid border-[#ff00aa71] h-12 rounded-full p-3 flex items-center">
            <MdOutlinePersonOff className="text-[#ff00aa71] text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
