import { useContext, useEffect, useState } from "react";
import { LoopData } from "../../types/types";
import { LoopDataContext } from "../../contexts/LoopDataContext";
import FileLoader from "../FileLoader";


function LoopListLoader() {
  const [csvString, setCsvString] = useState<Blob | null>(null);
useEffect(()=>{
  csvString&&setLoopList(generateLoopData(csvString.toString(), newLine, separator));
  //  not sure why I have to cast this to string, as I already did this in the file loader Component. Someone Help Please!
},[csvString]);

  const {
    setLoopList,
    newLine,
    separator,
  } = useContext(LoopDataContext);

  const generateLoopData = (csvString: string, newLine:string, separator:string): LoopData => {
    const loopArray = csvString
      .split(newLine)
      .map((lineString) => lineString.split(separator));
    const variables = loopArray.shift() || [];
    const loopData: LoopData = { variables, loopArray };
    return loopData;
  };

 

  return (
    <>
<FileLoader stateSetter={setCsvString} acceptType={'.csv'}/>
    </>
  );
}

export default LoopListLoader;
