import { RxPencil1 } from "react-icons/rx";
import { FaRegTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { LuUserSearch } from "react-icons/lu";
import { db } from "../../services/FirebaseConnection";
import toast from "react-hot-toast";
interface HistoryProps {
  id: string;
  clientName: string;
  procedure: string;
  value: number;
  scheduledDate: string;
  status: "finished";
}

export function HistoryTable() {
const [historyList, setHistoryList] = useState<HistoryProps[]>([]);
const [search, setSearch] = useState("");
  useEffect(() => {
    const q = query(
      collection(db, "appointments"),
      where("status", "==", "finished")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list: HistoryProps[] = [];

      snapshot.forEach((doc) => {
        list.push({
          id: doc.id,
          clientName: doc.data().clientName,
          procedure: doc.data().procedure,
          value: doc.data().value,
          scheduledDate: doc.data().scheduledDate,
          status: doc.data().status,
        });
      });

      setHistoryList(list);
    });

    return () => unsubscribe();
  }, []);

  const filterHistory = historyList.filter((item) => {
    const fullText = Object.values(item).join(" ").toLowerCase();
    const normalizedSearch = search.toLowerCase();
    return fullText.includes(normalizedSearch);
  });

  function disableEditButton(){
    toast.error(
    <div>
        <h2 className="text-white font-bold text-sm">Erro</h2>
        <p className="text-gray-400 text-sm">
            Agendamentos finalizados não podem ser editados.
        </p>
    </div>
    );
  }
  return (
    <div>
      <div className="w-full mt-4 relative">
        <input
          type="text"
          placeholder="Pesquise um registro finalizado no histórico"
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
                <th className="pb-7 pl-7.5 border-b border-[#a1999918]">
                  CLIENTE
                </th>
                <th className="pb-7 pl-7.5 border-b border-[#a1999918]">
                  PROCEDIMENTO
                </th>
                <th className="pb-7 pl-7.5 border-b border-[#a1999918]">
                  VALOR
                </th>
                <th className="pb-7 pl-7.5 border-b border-[#a1999918]">
                  DATA AGENDADA
                </th>
                <th className="pb-7 pl-7.5 border-b border-[#a1999918]">
                  STATUS
                </th>
                <th className="pb-7 pr-7.5 text-right border-b border-[#a1999918]">
                  AÇÕES
                </th>
              </tr>
            </thead>

            <tbody className="text-sm text-white">
              {filterHistory.map((item) => (
                <tr key={item.id} className="bg-black">
                  <td className="pb-7.5 pt-7 pl-7.5 border-b border-[#a1999918]">
                    {item.clientName}
                  </td>
                  <td className="pb-7.5 pt-7 pl-7.5 border-b border-[#a1999918]">
                    {item.procedure}
                  </td>
                  <td className="pb-7.5 pt-7 pl-7.5 border-b border-[#a1999918]">
                    R$ {item.value}
                  </td>
                  <td className="pb-7.5 pt-7 pl-7.5 border-b border-[#a1999918]">
                    {item.scheduledDate}
                  </td>
                  <td className="pb-7.5 pt-7 pl-7.5 border-b border-[#a1999918]">
                    {item.status === "finished" && (
                      <span className="text-white bg-[#e902029c] px-4 py-2 rounded-2xl font-medium">
                        Finalizado
                      </span>
                    )}
                  </td>
                  <td className="pb-7.5 pt-7 pl-7.5 border-b border-[#a1999918]">
                    <div className="flex items-center justify-end gap-6 mr-6">
                      {item.status === "finished" && (
                        <button
                          className="hover:scale-110 transition cursor-pointer"
                          onClick={disableEditButton}
                        >
                          <RxPencil1 className="text-white" />
                        </button>
                      )}
                      <button className="hover:scale-110 transition cursor-pointer">
                        <FaRegTrashAlt className="text-white hover:text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            {filterHistory.length === 0 && (
              <tr>
                <td
                  colSpan={10}
                  className=" pt-5 text-center text-gray-400 text-sm"
                >
                  Nenhum atendimento foi finalizado.
                </td>
              </tr>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}
