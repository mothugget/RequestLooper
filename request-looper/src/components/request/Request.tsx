import { Dispatch, SetStateAction, useContext, useState } from "react";
import TextInput from "../TextInput";
import ToggleButton from "../ToggleButton";
import { RequestContext } from "../../contexts/RequestContext";

interface RequestInput {
  label:string;
  showState:boolean;
  showStateSetter:Dispatch<SetStateAction<boolean>>
}


function Request() {

const{fetchRequest, setFetchRequest} =useContext(RequestContext);

  return (
    <div>
      <ToggleButton label={"body"} state={fetchRequest} setter={setFetchRequest} />
      <TextInput
        error={false}
        type={'text'}
        label={'label'}
        value={'value'}
        name={'name'}
        placeholder={'placeholder'}
        onChange={(e) => console.log(e)}
        disabled={false}
      ></TextInput>
    </div>
  );
}

export default Request;
