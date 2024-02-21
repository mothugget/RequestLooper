import { useState } from "react";
import TextInput from "../TextInput";
import ToggleButton from "../ToggleButton";

function Request() {
  const [bool, setBool] = useState(true);
  
  return (
    <div>
      <ToggleButton label={"toggle"} state={bool} setter={setBool} />
      <TextInput
        error={false}
        type={"text"}
        label={"label"}
        value={"value"}
        name={"name"}
        placeholder={"placeholder"}
        onChange={(e) => console.log(e)}
        disabled={false}
      ></TextInput>
    </div>
  );
}

export default Request;
