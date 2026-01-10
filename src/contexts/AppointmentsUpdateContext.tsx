import { createContext, type ReactNode } from "react";
import { useState } from "react";
import { type AppointmentsProps } from "../components/AppointmentsTable";
interface UpdateProps {
  appointmentsUpdate: AppointmentsProps | null;
  changeUpdateAppointmentsModal: (register: AppointmentsProps) => void;
}

interface ChildrenProps {
  children: ReactNode;
}

export const AppointmentsUpdateContext = createContext({} as UpdateProps);

const AppointmentsUpdateProvider = ({ children }: ChildrenProps) => {
  const [appointmentsUpdate, setAppointmentsUpdate] = useState<AppointmentsProps | null>(null);
  const changeUpdateAppointmentsModal = (register: AppointmentsProps) => {
    setAppointmentsUpdate(register);
  };
  return (
    <AppointmentsUpdateContext.Provider
      value={{ changeUpdateAppointmentsModal, appointmentsUpdate }}
    >
      {children}
    </AppointmentsUpdateContext.Provider>
  );
};
export { AppointmentsUpdateProvider };
