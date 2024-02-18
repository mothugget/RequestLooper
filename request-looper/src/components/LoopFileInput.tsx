import { FC } from "react";

interface LoopFileInputProps {
  file: []|null;
  setFile: React.Dispatch<React.SetStateAction<[]|null>>;
}

const LoopFileInput:FC<LoopFileInputProps> = ({file,setFile}) => {
  const fileReader = new FileReader();


  
  const handleOnChange = (e:any) => {
   setFile(e.target.files?e.target.files[0]:null);
  };

  const handleOnSubmit = (e:Event) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const csvOutput = event.target&&event.target.result;
      };

      fileReader.readAsText(file);
    }
  };

  return <>
        <form>
        <input type={"file"} accept={".csv"} />
        <button>IMPORT CSV</button>
      </form>
  </>;
};

export default LoopFileInput;