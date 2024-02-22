import { createContext, Dispatch, FC, SetStateAction, useState } from "react";
import { LoopData } from "../types/types";

interface LoopDataContextType {
  loopList: LoopData | null;
  setLoopList: Dispatch<SetStateAction<LoopData | null>> ;
  newLine: string;
  setNewLine: Dispatch<SetStateAction<string>> ;
  separator: string;
  setSeparator: Dispatch<SetStateAction<string>> ;
}


const   dummySetLoopList= "dummy" as unknown as Dispatch<SetStateAction<LoopData | null>> ;
const   dummySetNewLine= "dummy" as unknown as  Dispatch<SetStateAction<string>> ;
const   dummySetSeparator= "dummy" as unknown as  Dispatch<SetStateAction<string>>;

const LoopDataContext = createContext<LoopDataContextType>({
  loopList: null,
  setLoopList: dummySetLoopList,
  newLine: "\r\n",
  setNewLine: dummySetNewLine,
  separator: ";",
  setSeparator: dummySetSeparator,
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
