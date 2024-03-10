import {
  Dispatch,
  SetStateAction,
  useContext,
  ChangeEvent,
  useState,
  useEffect,
} from "react";
import TextInput from "../TextInput";
import ToggleShowOptionButton from "./ToggleShowOptionButton";
import { RequestContext } from "../../contexts/RequestContext";
import TextArea from "../TextArea";
import { sendFetchRequest } from "../../utils/fetchRequests";
import { FetchParameters } from "../../types/types";

interface RequestInput {
  label: string;
  showState: boolean;
  showStateSetter: Dispatch<SetStateAction<boolean>>;
}

function Request() {
  const { fetchRequest, setFetchRequest } = useContext(RequestContext);
  const [fetchResponse, setFetchResponse] = useState<string>("");
  const [optionsNoBody, setOptionsNoBody] = useState<string>(JSON.stringify(fetchRequest.fetchParameters.options&&removeBody(fetchRequest.fetchParameters.options),null,4)); 
  const [body, setBody] = useState<string>(JSON.stringify(JSON.parse(fetchRequest.fetchParameters.options!.body!.toString()),null,4)||"");
  const [resource, setResource] = useState<string>(fetchRequest.fetchParameters.resource.toString());
  
  useEffect(() => {
    sendFetchRequest(fetchRequest).then((res) => setFetchResponse(res));
  }, [fetchRequest]);

  function removeBody(options:RequestInit):RequestInit{
    const returnOptions= {...options};
    delete returnOptions.body;
    return  returnOptions
  }

  function valueUpdater(event: ChangeEvent<HTMLTextAreaElement>, stateSetter:Dispatch<SetStateAction<string>>) {
   stateSetter(event.target.value)
  }

  

  return (
    <div>
      {/* <ToggleShowOptionButton
        label={"body"}
        state={fetchRequest}
        setter={setFetchRequest}
      />
      <TextInput
        error={false}
        type={"text"}
        label={"label"}
        value={""}
        name={"name"}
        placeholder={"placeholder"}
        onChange={(e) => console.log(e)}
        disabled={false}
      /> */}
      <TextArea
        maxHeight={false}
        fontSize={16}
        error={false}
        label={"resource"}
        value={fetchRequest.fetchParameters.resource.toString()}
        name={"resource"}
        placeholder={"placeholder"}
        onChange={(e)=>valueUpdater(e,setResource)}
        disabled={false}
      />
      <TextArea
        maxHeight={false}
        fontSize={16}
        error={false}
        label={"options"}
        value={optionsNoBody}
        name={"options"}
        placeholder={"placeholder"}
        onChange={(e)=>valueUpdater(e,setOptionsNoBody)}
        disabled={false}
      />
            <TextArea
        maxHeight={false}
        fontSize={16}
        error={false}
        label={"body"}
        value={body}
        name={"body"}
        placeholder={"placeholder"}
        onChange={(e)=>valueUpdater(e,setBody)}
        disabled={false}
      />
      <TextArea
        maxHeight={300}
        fontSize={14}
        error={false}
        label={"response-log"}
        value={fetchResponse}
        name={"name"}
        placeholder={""}
        onChange={(e) => {}}
        disabled={false}
      />
    </div>
  );
}

export default Request;
