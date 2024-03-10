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

  // useEffect(() => {
  //   sendFetchRequest(fetchRequest).then((res) => setFetchResponse(res));
  // }, [fetchRequest]);

  function resourceValueUpdater(event: ChangeEvent<HTMLTextAreaElement>) {
    const updatedReqObject = { ...fetchRequest };
    updatedReqObject.fetchParameters.resource = event.target.value;
    setFetchRequest(updatedReqObject);
  }

  function optionValueUpdater(event: ChangeEvent<HTMLTextAreaElement>) {
    const updatedReqObject = { ...fetchRequest };
    const optionsObject = JSON.parse(event.target.value.replace(/\s/g, ""));
    updatedReqObject.fetchParameters.options = optionsObject;
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
        maxHeight={false}
        fontSize={16}
        error={false}
        label={"resource"}
        value={fetchRequest.fetchParameters.resource.toString()}
        name={"resource"}
        placeholder={"placeholder"}
        onChange={resourceValueUpdater}
        disabled={false}
      />
      <TextArea
        maxHeight={false}
        fontSize={16}
        error={false}
        label={"options"}
        value={JSON.stringify(fetchRequest.fetchParameters.options!, null, 4)}
        name={"options"}
        placeholder={"placeholder"}
        onChange={optionValueUpdater}
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
