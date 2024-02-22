import { FC, useContext, useState } from "react";
import FileInput from "./components/loopList/LoopListLoader";
import { LoopData } from "./types/types";
import { LoopDataContext } from "./contexts/LoopDataContext";
import Request from "./components/request/Request";

function App() {
  const { loopList } = useContext(LoopDataContext);
  console.log(loopList);
  return (
    <>
      <FileInput />
      
    </>
  );
}

export default App;
