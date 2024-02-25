import { Dispatch, SetStateAction, useContext, useState } from "react";
import TextInput from "../TextInput";
import ToggleShowOptionButton from "./ToggleShowOptionButton";
import { RequestContext } from "../../contexts/RequestContext";


interface RequestInput {
  label:string;
  showState:boolean;
  showStateSetter:Dispatch<SetStateAction<boolean>>
}


function Request() {

const{fetchRequest, setFetchRequest} =useContext(RequestContext);
console.log(fetchRequest.showOptions.body);
  return (
    <div>
      <ToggleShowOptionButton label={"body"} state={fetchRequest} setter={setFetchRequest} />
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
