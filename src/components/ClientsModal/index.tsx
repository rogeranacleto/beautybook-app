import { db } from "../../services/FirebaseConnection";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { motion } from "motion/react";
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";

interface ModalProps {
  onClose: (changed: boolean) => void;
}

export function ClientsModal({ onClose }: ModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  function onCloseModal() {
    onClose(true);
  }

  async function saveVehicleRecord(e: React.FormEvent) {
    e.preventDefault();

    try {
      await addDoc(collection(db, "clients"), {
        name,
        phone,
        email,
        notes,
        status: "active",
      });

      toast.success(
        <div>
          <h2 className="text-white font-bold text-sm">Cliente Cadastrado</h2>
          <p className="text-gray-400 text-sm">
            Cliente cadastrado com sucesso.
          </p>
        </div>
      );

      onClose(true);
    } catch (error) {
      toast.error(
        <div>
          <h2 className="text-white font-bold text-sm">Erro</h2>
          <p className="text-gray-400 text-sm">
            Houve um erro inesperado, ligue para o suporte.
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
        onClick={() => onCloseModal()}
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
            <IoClose className="text-[#888585d7] hover:text-[#e60505] text-2xl duration-300 ease-in-out" />
          </button>

          <h2 className="text-white text-lg font-medium">
            Cadastrar Novo Cliente
          </h2>
          <p className="text-[#888585d7] mb-5.5">
            Preencha os campos para cadastrar um novo cliente.
          </p>

          <form className="flex flex-col" onSubmit={saveVehicleRecord}>
            <div className="flex justify-between gap-4">
              <div className="flex flex-col w-full">
                <label className="text-white text-sm font-medium pb-2">
                  Nome
                </label>
                <input
                  type="text"
                  className="border border-[#3d3c3c56] p-2 rounded-lg text-white mb-6.5 focus:border-gray-400/40 outline-none text-sm"
                  placeholder="Nome do cliente"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label className="text-white text-sm font-medium pb-2">
                  Telefone
                </label>
                <input
                  type="text"
                  className="border border-[#3d3c3c56] p-2 rounded-lg text-white mb-6.5 focus:border-gray-400/40 outline-none text-sm"
                  placeholder="Digite o telefone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label className="text-white text-sm font-medium pb-2">
                  Email
                </label>
                <input
                  type="text"
                  className="border border-[#3d3c3c56] p-2 rounded-lg text-white mb-6.5 focus:border-gray-400/40 outline-none text-sm"
                  placeholder="nome@exemplo.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-white text-sm pb-2">Notas</label>
              <textarea
                rows={5}
                className="border border-[#3d3c3c56]  rounded-lg focus:border-gray-800/40 outline-none text-white p-3.5 text-sm"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>

            <button
              className="text-white bg-[#ff00aa86] mt-4 p-2 rounded-lg cursor-pointer hover:bg-[#f0a] hover:brightness-125 duration-300 text-sm"
              type="submit"
            >
              Cadastrar Cliente
            </button>
          </form>
        </div>
      </motion.div>
    </>
  );
}
