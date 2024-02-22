import { Dispatch, SetStateAction } from "react";
import { FetchRequest } from "../types/types";

interface ToggleButtonType {
  label: string;
  state: FetchRequest;
  setter: Dispatch<SetStateAction<FetchRequest>>;
}

function ToggleButton({ label, state, setter }: ToggleButtonType) {
  console.log(state);
  return (
    <div>
      <button
      className = {'togglebutton'+state}
        onClick={() => {
          setter(state=>!state.showOptions.body);
        }}
      >
        {label}
      </button>
    </div>
  );
}

export default ToggleButton;
