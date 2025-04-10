import { createContext, useState } from "react";
export const InputContext = createContext();
export const InputContextProvider = ({ children }) => {
  const [inputvisible, setinputvisible] = useState(false);
  const [name, setname] = useState("");
  const [key, setkey] = useState("");
  const [reloadTrigger, setreloadTrigger] = useState(false);
  return (
    <InputContext.Provider
      value={{
        name,
        setname,
        inputvisible,
        setinputvisible,
        key,
        setkey,
        reloadTrigger,
        setreloadTrigger,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};
