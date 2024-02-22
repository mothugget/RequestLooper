import { Dispatch, SetStateAction } from "react";

interface ToggleButtonType {
  label: string;
  state: boolean;
  setter: Dispatch<SetStateAction<boolean>>;
}

function ToggleButton({ label, state, setter }: ToggleButtonType) {
  console.log(state);
  return (
    <div>
      <button
      className = {'togglebutton'+state}
        onClick={() => {
          setter(!state);
        }}
      >
        {label}
      </button>
    </div>
  );
}

export default ToggleButton;
