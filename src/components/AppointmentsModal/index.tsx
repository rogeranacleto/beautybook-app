import { db } from "../../services/FirebaseConnection";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";

interface ModalProps {
  onClose: (changed: boolean) => void;
}

interface Client {
  id: string;
  name: string;
}

export function AppointmentsModal({ onClose }: ModalProps) {
  const [clients, setClients] = useState<Client[]>([]);
  const [clientId, setClientId] = useState("");
  const [procedure, setProcedure] = useState("");
  const [value, setValue] = useState("");
  const [scheduledDate, setScheduledDate] = useState("");
  const [notes, setNotes] = useState("");

  function onCloseModal() {
    onClose(false);
  }

  useEffect(() => {
    async function loadClients() {
      try {
        const copyQuery = query(
          collection(db, "clients"),
          where("status", "==", "active")
        );

        const snapshot = await getDocs(copyQuery);

        const list: Client[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }));

        setClients(list);
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

    loadClients();
  }, []);

  async function saveAppointment(e: React.FormEvent) {
    e.preventDefault();

    const selectedClient = clients.find((c) => c.id === clientId);

    if (!selectedClient) {
        toast.error(
          <div>
            <h2 className="text-white font-bold text-sm">Erro</h2>
            <p className="text-gray-400 text-sm">
              Selecione um cliente válido!
            </p>
          </div>
        );
      return;
    }

    try {
      await addDoc(collection(db, "appointments"), {
        clientId: selectedClient.id,
        clientName: selectedClient.name,
        procedure,
        value: Number(value),
        scheduledDate,
        status: "scheduled",
        notes,
        createdAt: new Date(),
      });

      toast.success(
        <div>
          <h2 className="text-white font-bold text-sm">
            Agendamento cadastrado
          </h2>
          <p className="text-gray-400 text-sm">
            Atendimento agendado com sucesso.
          </p>
        </div>
      );

      onClose(true);
    } catch (error) {
      toast.error(
        <div>
          <h2 className="text-white font-bold text-sm">Erro</h2>
          <p className="text-gray-400 text-sm">
            Houve um erro inesperado. Tente novamente.
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
        onClick={onCloseModal}
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
            onClick={onCloseModal}
          >
            <IoClose className="text-[#888585d7] hover:text-[#e60505] text-2xl duration-300" />
          </button>

          <h2 className="text-white text-lg font-medium">
            Cadastrar novo atendimento
          </h2>
          <p className="text-[#888585d7] mb-5.5">
            Preencha os campos para agendar um atendimento.
          </p>

          <form className="flex flex-col" onSubmit={saveAppointment}>
            <label className="text-white text-sm font-medium pb-2">
              Cliente
            </label>
            <select
              className="border border-[#3d3c3c56] p-2 rounded-lg text-white mb-6.5 focus:border-gray-400/40 outline-none text-sm bg-black"
              required
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
            >
              <option value="">Selecione um cliente</option>
              {clients.map((client) => (
                <option key={client.id} value={client.id}>
                  {client.name}
                </option>
              ))}
            </select>

            <label className="text-white text-sm font-medium pb-2">
              Procedimento
            </label>
            <input
              type="text"
              className="border border-[#3d3c3c56] p-2 rounded-lg text-white mb-6.5 focus:border-gray-400/40 outline-none text-sm"
              required
              value={procedure}
              onChange={(e) => setProcedure(e.target.value)}
            />

            <label className="text-white text-sm font-medium pb-2">Valor</label>
            <input
              type="number"
              className="border border-[#3d3c3c56] p-2 rounded-lg text-white mb-6.5 focus:border-gray-400/40 outline-none text-sm"
              required
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />

            <label className="text-white text-sm font-medium pb-2">
              Data agendada
            </label>
            <input
              type="date"
              className="border border-[#3d3c3c56] p-2 rounded-lg text-white mb-6.5 focus:border-gray-400/40 outline-none text-sm"
              required
              value={scheduledDate}
              onChange={(e) => setScheduledDate(e.target.value)}
            />

            <label className="text-white text-sm pb-2">Notas</label>
            <textarea
              rows={5}
              className="border border-[#3d3c3c56] rounded-lg focus:border-gray-800/40 outline-none text-white p-3.5 text-sm"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />

            <button
              className="text-white bg-[#ff00aa86] mt-4 p-2 rounded-lg cursor-pointer hover:bg-[#f0a] hover:brightness-125 duration-300 text-sm disabled:opacity-50"
              type="submit"
              disabled={!clientId}
            >
              Cadastrar atendimento
            </button>
          </form>
        </div>
      </motion.div>
    </>
  );
}
