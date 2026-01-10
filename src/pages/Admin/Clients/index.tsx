import { ClientsTable } from "../../../components/ClientsTable";
import { ClientsCards } from "../../../components/ClientsCards";
export function Clients() {
  return (
    <div className="bg-[#030303] max-w-screen min-h-screen rounded-2xl p-7">
      <ClientsCards/>
      <ClientsTable />
    </div>
  );
}