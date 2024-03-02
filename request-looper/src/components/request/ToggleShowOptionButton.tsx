import { Dispatch, SetStateAction } from "react";
import { FetchRequest, ShowOptions } from "../../types/types";

interface ToggleButtonType {
  label: string;
  state: FetchRequest;
  setter: Dispatch<SetStateAction<FetchRequest>>;
}

function ToggleShowOptionButton({ label, state, setter }: ToggleButtonType) {
 
  const requestWithChangedState={...state}
  
  
  return (
    <div>
      <button
      className = {'togglebutton'+label}
        onClick={() => {
          requestWithChangedState.showOptions[label as keyof ShowOptions]=!requestWithChangedState.showOptions[label as keyof ShowOptions] ;
          setter(requestWithChangedState);
        }}
      >
        {label}
      </button>
    </div>
  );
}

export default ToggleShowOptionButton;
