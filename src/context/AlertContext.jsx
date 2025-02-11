import Alert from "../components/Alert";
import { createContext, useContext, useState } from "react";

const AlertContext = createContext();

function AlertProvider({ children }) {
  const [alertData, setAlertData] = useState({ type: "", message: "" });

  return (
    <AlertContext.Provider value={{ alertData, setAlertData }}>
      <Alert />
      {children}
    </AlertContext.Provider>
  );
}

function useAlertContext() {
  const context = useContext(AlertContext);
  return context;
}

export { AlertProvider, useAlertContext };
