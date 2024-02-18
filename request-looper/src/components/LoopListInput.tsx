import { FC,useState } from "react";

interface LoopListInputProps {
  loopList: string[]|null;
  setLoopList: React.Dispatch<React.SetStateAction<string[]|null>>;
  newLine:string;
}

const LoopListInput:FC<LoopListInputProps> = ({newLine,loopList,setLoopList}) => {
  const [file, setFile] =useState<Blob|null>(null);
  const fileReader = new FileReader();
  
  const handleOnChange = (e:any) => {
   setFile(e.target.files?e.target.files[0]:null);
  };

  const handleOnSubmit = (e:any) => {
    
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const csvOutput:string|null = event.target&&event.target.result!.toString();
        console.log(csvOutput);
        setLoopList(csvOutput!.split(newLine));
      };

      fileReader.readAsText(file);
    }
  };

  return <>
        <form>
        <input type={"file"} accept={".csv"} onChange={handleOnChange}/>
        <button          onClick={(e) => {
            handleOnSubmit(e);
          }}
        >IMPORT CSV</button>
      </form>
  </>;
};

export default LoopListInput;