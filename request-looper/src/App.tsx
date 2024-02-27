import { FC, useContext, useState } from "react";
import FileInput from "./components/loopList/LoopListLoader";
import { LoopData } from "./types/types";
import { LoopDataContext } from "./contexts/LoopDataContext";
import Request from "./components/request/Request";
import "98.css"

function App() {
  const { loopList } = useContext(LoopDataContext);
  console.log(loopList);
  return (
    <>
      <FileInput />
      <Request/>
    </>
  );
}

export default App;
