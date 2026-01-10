import { RxPencil1 } from "react-icons/rx";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiPlus } from "react-icons/hi2";
import { LuUserSearch } from "react-icons/lu";
import { AnimatePresence } from "motion/react";
import { AppointmentsModal } from "../AppointmentsModal";
import { useState, useEffect, useContext } from "react";
import { onSnapshot, collection, deleteDoc, doc } from "firebase/firestore";
import toast from "react-hot-toast";
import { db } from "../../services/FirebaseConnection";
import { AppointmentsModalUpdate } from "../AppointmentsModalUpdate";
import { AppointmentsUpdateContext } from "../../contexts/AppointmentsUpdateContext";
export interface AppointmentsProps {
  clientId: string;
  clientName: string;
  procedure: string;
  scheduledDate: string;
  value: number;
  status: "scheduled" | "in_progress" | "finished";
  notes: string;
}

export function formatDate(date: string) {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
}

export function formatValue(value: number) {
  const valueFormated = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return valueFormated;
}

export function AppointmentsTable() {
  const [openModal, setOpenModal] = useState(false);
  const [appointmentList, setAppointmentList] = useState<AppointmentsProps[]>(
    []
  );
  const [openModalUpdateAppointments, setOpenModalUpdateAppointments] =
    useState(false);
  const { changeUpdateAppointmentsModal } = useContext(
    AppointmentsUpdateContext
  );
  const [search, setSearch] = useState("");
  function changeModal() {
    setOpenModal(true);
  }
  useEffect(() => {
    async function loadReacords() {
      onSnapshot(collection(db, "appointments"), (snapshot) => {
        let listRecords: AppointmentsProps[] = [];
        snapshot.forEach((doc) => {
          listRecords.push({
            clientId: doc.id,
            clientName: doc.data().clientName,
            procedure: doc.data().procedure,
            scheduledDate: doc.data().scheduledDate,
            value: doc.data().value,
            status: doc.data().status,
            notes: doc.data().notes,
          });
        });
        setAppointmentList(listRecords);
      });
    }
    loadReacords();
  }, []);

  const filterAppointments = appointmentList.filter((item) => {
    const fullText = Object.values(item).join(" ").toLowerCase();
    const normalizedSearch = search.toLowerCase();
    return fullText.includes(normalizedSearch);
  });

  async function deleteAppointment(id: string) {
    const docRef = doc(db, "appointments", id);
    await deleteDoc(docRef)
      .then(() => {
        toast.success(
          <div>
            <h2 className="text-white font-bold text-sm">Cadastro Deletado</h2>
            <p className="text-gray-400 text-sm">
              O cadastro foi deletado com sucesso.
            </p>
          </div>
        );
      })
      .catch(() => {
        toast.error(
          <div>
            <h2 className="text-white font-bold text-sm">Erro</h2>
            <p className="text-gray-400 text-sm">
              Ocorreu um erro inesperado, acione o suporte!
            </p>
          </div>
        );
      });
  }

  function openUpdateModal(register: AppointmentsProps) {
    changeUpdateAppointmentsModal(register);
    setOpenModalUpdateAppointments(true);
  }

  return (
    <div>
      <AnimatePresence>
        {openModal && <AppointmentsModal onClose={() => setOpenModal(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {openModalUpdateAppointments && (
          <AppointmentsModalUpdate
            onCloseModal={() => setOpenModalUpdateAppointments(false)}
          />
        )}
      </AnimatePresence>
      <div className="flex justify-end mt-7">
        <button
          className="text-white flex items-center gap-3 bg-[#ff00aa86] h-10 max-w-[15em] w-full rounded-lg cursor-pointer pl-1.5 hover:bg-[#f0a] duration-300 ease-in-out text-sm"
          onClick={changeModal}
        >
          <HiPlus className="text-white text-lg" />
          Adicionar Atendimento
        </button>
      </div>
      <div className="w-full mt-4 relative">
        <input
          type="text"
          placeholder="Pesquise um registro de atendimento"
          className="w-full border border-solid bg-black border-[#a1999918] rounded-lg p-2 text-[#bbbbbba6] focus:outline-0 focus:ring-0.5 focus:border-[#bbbbbb3b] text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <LuUserSearch className="text-[#2b2b2ba6] text-2xl absolute right-4 top-1.5" />
      </div>
      <div className="overflow-x-auto w-full border border-solid border-[#a1999918] bg-black mt-4 rounded-lg">
        <div className="p-7">
          <table className="w-full min-w-max text-left border-separate border-spacing-y-3">
            <thead>
              <tr className="text-gray-400 text-sm">
                <th className="pb-7 pl-7.5 text-left border-b border-[#a1999918]">
                  CLIENTE
                </th>
                <th className="pb-7 pl-7.5 text-left border-b border-[#a1999918]">
                  PROCEDIMENTO
                </th>
                <th className="pb-7 pl-7.5 text-left border-b border-[#a1999918]">
                  VALOR
                </th>
                <th className="pb-7 pl-7.5 text-left border-b border-[#a1999918]">
                  DATA AGENDADA
                </th>
                <th className="pb-7 pl-7.5 text-left border-b border-[#a1999918]">
                  STATUS
                </th>
                <th className="pb-7 pr-7.5 text-right border-b border-[#a1999918]">
                  AÇÕES
                </th>
              </tr>
            </thead>
            <tbody className="text-sm text-white">
              {filterAppointments.map((item) => (
                <tr className="bg-black duration-300 ease-in-out">
                  <td className="pb-7.5 pt-7 pl-7.5 font-medium border-b border-[#a1999918]">
                    {item.clientName}
                  </td>
                  <td className="pb-7.5 pt-7 pl-7.5 font-medium border-b border-[#a1999918]">
                    {item.procedure}
                  </td>
                  <td className="pb-7.5 pt-7 pl-7.5 font-medium border-b border-[#a1999918]">
                    {formatValue(item.value)}
                  </td>
                  <td className="pb-7.5 pt-7 pl-7.5 font-medium border-b border-[#a1999918]">
                    {formatDate(item.scheduledDate)}
                  </td>
                  <td className="pb-7.5 pt-7 pl-7.5 border-b border-[#a1999918]">
                    {item.status === "scheduled" ? (
                      <span className="text-white bg-[#02e9299c] pl-3 pr-3 pt-2 pb-2 rounded-2xl font-medium">
                        Agendado
                      </span>
                    ) : item.status === "in_progress" ? (
                      <span className="text-white bg-[#e0f8039c] pl-3 pr-3 pt-2 pb-2 rounded-2xl font-medium">
                        Em andamento
                      </span>
                    ) : (
                      <span className="text-white bg-[#e902029c] pl-3 pr-3 pt-2 pb-2 rounded-2xl font-medium">
                        Finalizado
                      </span>
                    )}
                  </td>
                  <td className="pb-7.5 pt-7 pl-7.5 border-b border-[#a1999918]">
                    <div className="flex items-center justify-end gap-6 mr-6">
                      <button
                        className="hover:scale-110 transition cursor-pointer"
                        onClick={() => openUpdateModal(item)}
                      >
                        <RxPencil1 className="text-white text-bold cursor-pointer" />
                      </button>
                      <button
                        className="hover:scale-110 duration-300 ease-in-out cursor-pointer"
                        onClick={() => deleteAppointment(item.clientId)}
                      >
                        <FaRegTrashAlt className="text-white text-bold duration-300 ease-in-out hover:text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            {filterAppointments.length === 0 && (
              <tr>
                <td
                  colSpan={10}
                  className=" pt-5 text-center text-gray-400 text-sm"
                >
                  Nenhum agendamento cadastrado.
                </td>
              </tr>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}
