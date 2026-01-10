import { LuCalendarCheck2 } from "react-icons/lu";
import { LuLoader } from "react-icons/lu";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useContext } from "react";
import { AppointmentsCardContext } from "../../contexts/AppointmentsCardContext";
export function AppointmentsCards() {
const {scheduled, inProgress, finished} = useContext(AppointmentsCardContext);
  return (
    <div className="w-full">
      <div className="flex gap-7 flex-wrap">
        <div className="bg-black flex-1 min-w-70 min-h-45 rounded-lg flex justify-between p-6 border border-solid border-[#a1999918]">
          <div>
            <h1 className="text-white text-sm mb-2">Agendamentos</h1>
            <p className="text-white font-bold text-3xl mb-3.5">{scheduled}</p>
            <p className="text-sm text-[#8a8787]">
              Dados atualizados em tempo real
            </p>
          </div>
          <div className="border border-solid border-[#ff00aa71] h-12 rounded-full p-3 flex items-center">
            <LuCalendarCheck2 className="text-[#ff00aa71] text-2xl" />
          </div>
        </div>

        <div className="bg-black flex-1 min-w-70 min-h-45 rounded-lg flex justify-between p-6 border border-solid border-[#a1999918]">
          <div>
            <h1 className="text-white text-sm mb-2">Em andamento</h1>
            <p className="text-white font-bold text-3xl mb-3.5">{inProgress}</p>
            <p className="text-sm text-[#8a8787]">
              Dados atualizados em tempo real
            </p>
          </div>
          <div className="border border-solid border-[#ff00aa71] h-12 rounded-full p-3 flex items-center">
            <LuLoader className="text-[#ff00aa71] text-2xl" />
          </div>
        </div>

        <div className="bg-black flex-1 min-w-70 min-h-45 rounded-lg flex justify-between p-6 border border-solid border-[#a1999918]">
          <div>
            <h1 className="text-white text-sm mb-2">Finalizados</h1>
            <p className="text-white font-bold text-3xl mb-3.5">{finished}</p>
            <p className="text-sm text-[#8a8787]">
              Dados atualizados em tempo real
            </p>
          </div>
          <div className="border border-solid border-[#ff00aa71] h-12 rounded-full p-3 flex items-center">
            <IoIosCheckmarkCircleOutline className="text-[#ff00aa71] text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
