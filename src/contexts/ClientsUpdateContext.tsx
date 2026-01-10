import { createContext, type ReactNode } from "react";
import { useState } from "react";
import { type ClientsProps } from "../components/ClientsTable";
interface UpdateProps {
  clientsUpdate: ClientsProps | null;
  changeUpdateClientsModal: (register: ClientsProps) => void;
}

interface ChildrenProps {
  children: ReactNode;
}

export const ClientsUpdateContext = createContext({} as UpdateProps);

const ClientsUpdateProvider = ({ children }: ChildrenProps) => {
  const [clientsUpdate, setClientsUpdate] = useState<ClientsProps | null>(null);
  const changeUpdateClientsModal = (register: ClientsProps) => {
    setClientsUpdate(register);
  };
  return (
    <ClientsUpdateContext.Provider
      value={{ changeUpdateClientsModal, clientsUpdate }}
    >
      {children}
    </ClientsUpdateContext.Provider>
  );
};
export { ClientsUpdateProvider };
