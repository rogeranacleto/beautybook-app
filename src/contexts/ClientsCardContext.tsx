import { createContext, type ReactNode, useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../services/FirebaseConnection";

interface ClientsCardContextProps {
  active: number;
  inactive: number;
  total: number;
}

interface ChildrenProps {
  children: ReactNode;
}

export const ClientsCardContext = createContext({} as ClientsCardContextProps);

export function ClientsCardContextProvider({ children }: ChildrenProps) {
  const [active, setActive] = useState(0);
  const [inactive, setInactive] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "clients"), (snapshot) => {
      let activeCount = 0;
      let inactiveCount = 0;

      snapshot.forEach((doc) => {
        const status = doc.data().status;

        if (status === "active") activeCount++;
        if (status === "inactive") inactiveCount++;
      });

      setActive(activeCount);
      setInactive(inactiveCount);
      setTotal(snapshot.size);
    });

    return () => unsub();
  }, []);

  return (
    <ClientsCardContext.Provider value={{ active, inactive, total }}>
      {children}
    </ClientsCardContext.Provider>
  );
}
