import { createContext, Dispatch, FC, SetStateAction, useState } from "react";
import { LoopData } from "../types/types";

interface LoopDataContextType {
  loopList: LoopData | null;
  setLoopList: Dispatch<SetStateAction<LoopData | null>> | null;
  newLine: string;
  setNewLine: Dispatch<SetStateAction<string>> | null;
  separator: string;
  setSeparator: Dispatch<SetStateAction<string>> | null;
}

const LoopDataContext = createContext<LoopDataContextType>({
  loopList: null,
  setLoopList: null,
  newLine: "\r\n",
  setNewLine: null,
  separator: ";",
  setSeparator: null,
});

function LoopDataProvider({ children }: any) {
  const [loopList, setLoopList] = useState<LoopData | null>(null);
  const [newLine, setNewLine] = useState<string>("\r\n");
  const [separator, setSeparator] = useState<string>(";");
  return (
    <LoopDataContext.Provider
      value={{
        loopList,
        setLoopList,
        newLine,
        setNewLine,
        separator,
        setSeparator,
      }}
    >
      {children}
    </LoopDataContext.Provider>
  );
}
export { LoopDataContext, LoopDataProvider };
