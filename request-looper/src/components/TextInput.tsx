import { ChangeEvent } from "react";

interface TextInputProps {
  type: "text" | "number" | "email" | "password";
  label: string;
  value: string | number;
  name: string;
  placeholder: string;
  error: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function TextInput({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
}: TextInputProps) {
  return (
    <div className="input-wrapper">
      <input
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
      {error && <p className="error">Input filed can't be empty!</p>}
    </div>
  );
}

export default TextInput;
