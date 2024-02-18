import { useState } from "react";

interface FileLoaderProps {
  stateSetter: any;
  acceptType: string;
}

function FileLoader({ stateSetter, acceptType }: FileLoaderProps) {
  const [file, setFile] = useState<Blob | null>(null);
  const fileReader = new FileReader();

  const handleOnChange = (e: any) => {
    setFile(e.target.files ? e.target.files[0] : null);
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const output: string | null = event.target!.result!.toString() || null;
        console.log(output);
        stateSetter(output);
      };

      fileReader.readAsText(file);
    }
  };

  return (
    <>
      <form>
        <input type={"file"} accept={acceptType} onChange={handleOnChange} />
        <button
          onClick={(e) => {
            handleOnSubmit(e);
          }}
        >
          IMPORT {acceptType}
        </button>
      </form>
    </>
  );
}

export default FileLoader;
