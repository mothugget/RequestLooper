import { FC, useState } from "react";
import FileInput from "./components/LoopListInput";
import { LoopData } from "./types/types";

const App:FC = () => {
  const [loopList, setLoopList] =useState<LoopData|null>(null);
  const [newLine, setNewLine] =useState<string>('\r\n');
  console.log(loopList);
  return <>
  <FileInput newLine={newLine} loopList={loopList} setLoopList={setLoopList} />
  </>;
};

export default App;
