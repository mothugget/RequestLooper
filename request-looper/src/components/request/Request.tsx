import { Dispatch, SetStateAction, useState } from "react";
import TextInput from "../TextInput";
import ToggleButton from "../ToggleButton";

interface RequestInput {
  label:string;
  showState:boolean;
  showStateSetter:Dispatch<SetStateAction<boolean>>
}


function Request() {
  const [showResource, setShowResource] = useState(false);
  const [showMethod, setShowMethod] = useState(false);
  const [showHeaders, setShowHeaders] = useState(false);
  const [showBody, setShowBody] = useState(false);
  const [showMode, setShowMode] = useState(false);
  const [showCredentials, setShowCredentials] = useState(false);
  const [showCache, setShowCache] = useState(false);
  const [showRedirect, setShowRedirect] = useState(false);
  const [showReferrer, setShowReferrer] = useState(false);
  const [showReferrerPolicy, setShowReferrerPolicy] = useState(false);
  const [showIntegrity, setShowIntegrity] = useState(false);
  const [showKeepalive, setShowKeepalive] = useState(false);
  const [showSignal, setShowSignal] = useState(false);
  const [showPriority, setShowPriority] = useState(false);

  



  return (
    <div>
      <ToggleButton label={"toggle"} state={showBody} setter={setShowBody} />
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
