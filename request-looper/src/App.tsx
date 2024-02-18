import { FC, useState } from "react";
import FileInput from "./components/LoopFileInput";

const App:FC = () => {
  const [file, setFile] =useState<[]|null>(null);
  return <>
  <FileInput file={file} setFile={setFile} />
  </>;
};

export default App;
