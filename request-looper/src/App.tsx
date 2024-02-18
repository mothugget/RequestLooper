import { FC, useContext, useState } from "react";
import FileInput from "./components/loopList/LoopListInput";
import { LoopData } from "./types/types";
import { LoopDataContext } from "./contexts/LoopDataContext";

function App (){
const{loopList}=useContext(LoopDataContext);
  console.log(loopList);
  return <>
  <FileInput />
  </>;
};

export default App;
