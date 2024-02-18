import { FC, useState } from "react";
import { LoopData } from "../types/types";

interface LoopListInputProps {
  loopList: LoopData | null;
  setLoopList: React.Dispatch<React.SetStateAction<LoopData | null>>;
  newLine: string;
}

const LoopListInput: FC<LoopListInputProps> = ({
  newLine,
  loopList,
  setLoopList,
}) => {
  const [file, setFile] = useState<Blob | null>(null);
  const fileReader = new FileReader();
  const separator = ";";
  const generateLoopData = (csvString: string): LoopData => {
    const loopArray = csvString
      .split(newLine)
      .map((lineString) => lineString.split(separator));
    const variables = loopArray.shift()||[];
    const loopData: LoopData = { variables, loopArray };
    return loopData;
  };

  const handleOnChange = (e: any) => {
    setFile(e.target.files ? e.target.files[0] : null);
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const csvOutput: string | null =
          event.target && event.target.result!.toString();
        console.log(csvOutput);
        setLoopList(generateLoopData(csvOutput!));
      };

      fileReader.readAsText(file);
    }
  };

  return (
    <>
      <form>
        <input type={"file"} accept={".csv"} onChange={handleOnChange} />
        <button
          onClick={(e) => {
            handleOnSubmit(e);
          }}
        >
          IMPORT CSV
        </button>
      </form>
    </>
  );
};

export default LoopListInput;
