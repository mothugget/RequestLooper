import { Dispatch, SetStateAction, useContext, ChangeEvent } from "react";
import TextInput from "../TextInput";
import ToggleShowOptionButton from "./ToggleShowOptionButton";
import { RequestContext } from "../../contexts/RequestContext";
import TextArea from "../TextArea";
import { parseRequestString, sendFetchRequest } from "../../utils/fetchRequests";

interface RequestInput {
  label: string;
  showState: boolean;
  showStateSetter: Dispatch<SetStateAction<boolean>>;
}

function Request() {
  const { fetchRequest, setFetchRequest } = useContext(RequestContext);

  console.log(parseRequestString(fetchRequest.fetchString));
  
  function reqStringValueUpdater(event: ChangeEvent<HTMLTextAreaElement>) {
    const updatedReqObject = { ...fetchRequest };
    const fetchParameters = event.target.value.slice(
      8,
      event.target.value.length - 2
    );
    updatedReqObject.fetchString = fetchParameters;
    setFetchRequest(updatedReqObject);
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
        error={false}
        type={"text"}
        label={"request-input"}
        value={"fetch( \n" + fetchRequest.fetchString + "\n)"}
        name={"name"}
        placeholder={"placeholder"}
        onChange={reqStringValueUpdater}
        disabled={false}
      />
            <TextArea
        error={false}
        type={"text"}
        label={"response-log"}
        value={""}
        name={"name"}
        placeholder={""}
        onChange={(e)=>{}}
        disabled={false}
      />
    </div>
  );
}

export default Request;
