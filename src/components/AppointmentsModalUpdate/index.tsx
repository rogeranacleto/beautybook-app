import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { db } from "../../services/FirebaseConnection";
import { updateDoc, doc } from "firebase/firestore";
import { useState, useContext } from "react";
import { AppointmentsUpdateContext } from "../../contexts/AppointmentsUpdateContext";
import { type AppointmentsProps } from "../AppointmentsTable";
import toast from "react-hot-toast";
interface ChangeModalUpdate {
  onCloseModal: (changed: boolean) => void;
}

export function AppointmentsModalUpdate({ onCloseModal }: ChangeModalUpdate) {
  const { appointmentsUpdate } = useContext(AppointmentsUpdateContext);
  const [clientName, setClientName] = useState(appointmentsUpdate?.clientName || "");
  const [procedure, setProcedure] = useState(appointmentsUpdate?.procedure || "");
  const [scheduledDate, setScheduledDate] = useState(appointmentsUpdate?.scheduledDate || "");
  const [value, setValue] = useState(appointmentsUpdate?.value || "");
  const [notes, setNotes] = useState(appointmentsUpdate?.notes || "");
  const [status, setStatus] = useState<AppointmentsProps["status"]>(appointmentsUpdate?.status || "scheduled" || "in_progress" || "finished");

  function onCloseModalUpdate() {
    onCloseModal(true);
  }

  async function saveClientsUpdate(appointments: AppointmentsProps | null) {
    if (!appointments) return;

    try {
      const refDoc = doc(db, "appointments", appointments.clientId);

      await updateDoc(refDoc, {
        clientName,
        procedure,
        scheduledDate,
        value,
        notes,
        status
      });

      toast.success(
        <div>
          <h2 className="text-white font-bold text-sm">Registro Atualizado</h2>
          <p className="text-gray-400 text-sm">
            O registro foi atualizado com sucesso.
          </p>
        </div>
      );

      onCloseModal(true);
    } catch (error) {
      toast.error(
        <div>
          <h2 className="text-white font-bold text-sm">Erro</h2>
          <p className="text-gray-400 text-sm">
            Ocorreu um erro inesperado, acione o suporte!
          </p>
        </div>
      );
    }
  }

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/70 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onCloseModalUpdate}
      />
      <motion.div
        className="fixed inset-0 z-50 flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="bg-black w-lg flex flex-col border border-[#3d3c3c56] p-5.5 rounded-lg relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="cursor-pointer absolute right-5 top-4"
            onClick={onCloseModalUpdate}
          >
            <IoClose className="text-[#888585d7] hover:text-[#e60505] text-2xl duration-300 ease-in-out" />
          </button>
          <h2 className="text-white text-lg font-medium">Atualizar Registro</h2>
          <p className="text-[#888585d7] mb-5.5">
            Preencha os campos necessários para a atualização.
          </p>
          <div className="flex flex-col">
            <div className="flex justify-between gap-4">
              <div className="flex flex-col w-full">
                <label className="text-white pb-2 font-medium text-sm">
                  Cliente
                </label>
                <input
                  type="text"
                  className="border border-[#3d3c3c56] p-2 rounded-lg text-white mb-6.5 focus:border-gray-400/40 outline-none text-sm"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                />
                <label className="text-white pb-2 font-medium text-sm">
                  Procedimento
                </label>
                <input
                  type="text"
                  className="border border-[#3d3c3c56] p-2 rounded-lg text-white mb-6.5 focus:border-gray-400/40 outline-none text-sm"
                  value={procedure}
                  onChange={(e) => setProcedure(e.target.value)}
                />
                <label className="text-white pb-2 font-medium text-sm">
                  Valor
                </label>
                <input
                  type="number"
                  className="border border-[#3d3c3c56] p-2 rounded-lg text-white mb-6.5 focus:border-gray-400/40 outline-none text-sm"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <label className="text-white pb-2 font-medium text-sm">
                  Data agendada
                </label>
                <input
                  type="date"
                  className="border border-[#3d3c3c56] p-2 rounded-lg text-white mb-6.5 focus:border-gray-400/40 outline-none text-sm"
                  value={scheduledDate}
                  onChange={(e) => setScheduledDate(e.target.value)}
                />
                <label className="text-white pb-2 font-medium text-sm">
                  Status
                </label>
                <select
                  className="border border-[#3d3c3c56] p-2 rounded-lg text-white mb-6.5 text-sm"
                  value={status}
                  onChange={(e) =>
                    setStatus(e.target.value as AppointmentsProps["status"])
                  }
                >
                  <option value="scheduled" className="bg-black text-white">
                    Agendado
                  </option>
                  <option value="in_progress" className="bg-black text-white">
                    Em andamento
                  </option>
                  <option value="finished" className="bg-black text-white">
                    Finalizado
                  </option>
                </select>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-white pb-2 font-medium text-sm">
                Notas
              </label>
              <textarea
                rows={5}
                className="border border-[#3d3c3c56]  rounded-lg focus:border-gray-800/40 outline-none text-white p-3.5 text-sm"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
            <button
              className="text-white bg-[#ff00aa86] mt-4 p-2 rounded-lg cursor-pointer hover:bg-[#f0a] hover:brightness-125 duration-500 text-sm"
              type="button"
              onClick={() => saveClientsUpdate(appointmentsUpdate)}
            >
              Atualizar Registro
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
