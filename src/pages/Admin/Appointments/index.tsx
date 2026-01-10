import { AppointmentsTable } from "../../../components/AppointmentsTable";
import { AppointmentsCards } from "../../../components/AppointmentsCards";
export function Appointments() {
  return (
    <div className="bg-[#030303] max-w-screen min-h-screen rounded-2xl p-7">
      <AppointmentsCards/>
      <AppointmentsTable/>
    </div>
  );
}
