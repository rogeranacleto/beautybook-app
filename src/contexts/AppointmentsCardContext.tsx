import { createContext, type ReactNode, useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../services/FirebaseConnection";

interface AppointmentsCardContextProps {
  scheduled: number;
  inProgress: number;
  finished: number;
}

interface ChildrenProps {
  children: ReactNode;
}

export const AppointmentsCardContext = createContext({} as AppointmentsCardContextProps);

export function AppointmentsCardContextProvider({ children }: ChildrenProps) {
  const [scheduled, setScheduled] = useState(0);
  const [inProgress, setInProgress] = useState(0);
  const [finished, setFinished] = useState(0);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "appointments"), (snapshot) => {
      let scheduled = 0;
      let inProgress = 0;
      let finished = 0;

      snapshot.forEach((doc) => {
        const status = doc.data().status;
        if (status === "scheduled") scheduled++;
        if (status === "in_progress") inProgress++;
        if (status === "finished") finished++;
      });

      setScheduled(scheduled);
      setInProgress(inProgress);
      setFinished(finished);
    });

    return () => unsub();
  }, []);

  return (
    <AppointmentsCardContext.Provider value={{ scheduled, inProgress, finished }}>
      {children}
    </AppointmentsCardContext.Provider>
  );
}
