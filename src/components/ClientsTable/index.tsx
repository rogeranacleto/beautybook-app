import { RxPencil1 } from "react-icons/rx";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiPlus } from "react-icons/hi2";
import { LuUserSearch } from "react-icons/lu";
import { AnimatePresence } from "motion/react";
import { ClientsModal } from "../ClientsModal";
import { useState, useEffect, useContext } from "react";
import { ClientsUpdateContext } from "../../contexts/ClientsUpdateContext";
import { onSnapshot, collection, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../services/FirebaseConnection";
import { ClientsModalUpdate } from "../ClientsModalUpdate";
import toast from "react-hot-toast";
export interface ClientsProps {
  id: string;
  name: string;
  phone: string;
  email: string;
  status: "active";
  notes: string;
}
export function ClientsTable() {
const [clientsList, setClientsList] = useState<ClientsProps[]>([]);
const [openModal, setOpenModal] = useState(false);
const {changeUpdateClientsModal} = useContext(ClientsUpdateContext);
const [openModalUpdateClient, setOpenModalUpdateClient] = useState(false);
const [search, setSearch] = useState("");
function changeModal() {
  setOpenModal(true);
}

useEffect(() => {
  async function loadReacords() {
    onSnapshot(collection(db, "clients"), (snapshot) => {
      let listRecords: ClientsProps[] = [];
      snapshot.forEach((doc) => {
        listRecords.push({
          id: doc.id,
          name: doc.data().name,
          phone: doc.data().phone,
          email: doc.data().email,
          status: doc.data().status,
          notes: doc.data().notes,
        });
      });
      setClientsList(listRecords);
    });
  }
  loadReacords();
}, []);

const filterClients = clientsList.filter((item) => {
  const fullText = Object.values(item).join(" ").toLowerCase();
  const normalizedSearch = search.toLowerCase();
  return fullText.includes(normalizedSearch);
});

async function deleteClient(id: string) {
  const docRef = doc(db, "clients", id);
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

function openUpdateModal(register: ClientsProps) {
  changeUpdateClientsModal(register);
  setOpenModalUpdateClient(true);
}

  return (
    <div>
      <AnimatePresence>
        {openModal && <ClientsModal onClose={() => setOpenModal(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {openModalUpdateClient && (
          <ClientsModalUpdate
            onCloseModal={() => setOpenModalUpdateClient(false)}
          />
        )}
      </AnimatePresence>
      <div className="flex justify-end mt-7">
        <button
          className="text-white flex items-center gap-3 bg-[#ff00aa86] h-10 max-w-[12em] w-full rounded-lg cursor-pointer pl-1.5 hover:bg-[#f0a] duration-300 ease-in-out text-sm"
          onClick={changeModal}
        >
          <HiPlus className="text-white text-lg" />
          Adicionar Cliente
        </button>
      </div>
      <div className="w-full mt-4 relative">
        <input
          type="text"
          placeholder="Pesquise um registro"
          className="w-full border border-solid bg-black border-[#a1999918] rounded-lg p-2 text-[#bbbbbba6] focus:outline-0 focus:ring-0.5 focus:border-[#bbbbbb3b] text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <LuUserSearch className="text-[#2b2b2ba6] text-2xl absolute right-4 top-1.5" />
      </div>
      <div className="overflow-x-auto w-full bg-black mt-4 rounded-lg border border-solid border-[#a1999918]">
        <div className="p-7">
          <table className="w-full min-w-max text-left border-separate border-spacing-y-3">
            <thead>
              <tr className="text-gray-400 text-sm">
                <th className="pb-7 pl-7.5 text-left border-b border-[#a1999918]">
                  NOME
                </th>
                <th className="pb-7 pl-7.5 text-left border-b border-[#a1999918]">
                  TELEFONE
                </th>
                <th className="pb-7 pl-7.5 text-left border-b border-[#a1999918]">
                  EMAIL
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
              {filterClients.map((item) => (
                <tr className="bg-black duration-300 ease-in-out">
                  <td className="pb-7.5 pt-7 pl-7.5 font-medium border-b border-[#a1999918]">
                    {item.name}
                  </td>
                  <td className="pb-7.5 pt-7 pl-7.5 font-medium border-b border-[#a1999918]">
                    {item.phone}
                  </td>
                  <td className="pb-7.5 pt-7 pl-7.5 font-medium border-b border-[#a1999918]">
                    {item.email}
                  </td>
                  <td className="pb-7.5 pt-7 pl-7.5 border-b border-[#a1999918]">
                    {item.status === "active" ? (
                      <span className="text-white bg-[#02e9299c] pl-3 pr-3 pt-2 pb-2 rounded-2xl font-medium">
                        Ativo
                      </span>
                    ) : (
                      <span className="text-white bg-[#e902029c] pl-3 pr-3 pt-2 pb-2 rounded-2xl font-medium">
                        Inativo
                      </span>
                    )}
                  </td>
                  <td className="pb-7.5 pt-7 pl-7.5 border-b border-[#a1999918]">
                    <div className="flex items-center justify-end gap-6 mr-6">
                      <button className="hover:scale-110 transition cursor-pointer">
                        <RxPencil1
                          className="text-white text-bold cursor-pointer"
                          onClick={() => openUpdateModal(item)}
                        />
                      </button>
                      <button
                        className="hover:scale-110 duration-300 ease-in-out cursor-pointer"
                        onClick={() => deleteClient(item.id)}
                      >
                        <FaRegTrashAlt className="text-white text-bold duration-300 ease-in-out hover:text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            {filterClients.length === 0 && (
              <tr>
                <td
                  colSpan={10}
                  className=" pt-5 text-center text-gray-400 text-sm"
                >
                  Nenhum cliente cadastrado.
                </td>
              </tr>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}
