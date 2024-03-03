import { Dispatch, SetStateAction, useContext, ChangeEvent } from "react";
import TextInput from "../TextInput";
import ToggleShowOptionButton from "./ToggleShowOptionButton";
import { RequestContext } from "../../contexts/RequestContext";
import TextArea from "../TextArea";
import { sendFetchRequest } from "../../utils/fetchRequests";

interface RequestInput {
  label: string;
  showState: boolean;
  showStateSetter: Dispatch<SetStateAction<boolean>>;
}

function Request() {
  const { fetchRequest, setFetchRequest } = useContext(RequestContext);
sendFetchRequest(fetchRequest)
  function reqStringValueUpdater(event: ChangeEvent<HTMLTextAreaElement>) {
    const updatedReqObject = { ...fetchRequest };
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
        label={"resource-input"}
        value={fetchRequest.fetchParameters.resource.toString()}
        name={"name"}
        placeholder={"placeholder"}
        onChange={reqStringValueUpdater}
        disabled={false}
      />
      <TextArea
        maxHeight={false}
        fontSize={16}
        error={false}
        label={"options-input"}
        value={JSON.stringify(fetchRequest.fetchParameters.options!, null, 4)}
        name={"name"}
        placeholder={"placeholder"}
        onChange={reqStringValueUpdater}
        disabled={false}
      />
      <TextArea
        maxHeight={300}
        fontSize={10}
        error={false}
        label={"response-log"}
        value={""}
        name={"name"}
        placeholder={""}
        onChange={(e) => {}}
        disabled={false}
      />
    </div>
  );
}

export default Request;
