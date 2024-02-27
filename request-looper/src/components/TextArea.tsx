import { ChangeEvent } from "react";
import '../styles/TextArea.css'


interface TextAreaProps {
  type: "text" | "number" | "email" | "password";
  label: string;
  value: string | number;
  name: string;
  placeholder: string;
  error: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

function TextArea({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
}: TextAreaProps) {
  return (
    <div className={"window "+label+"-textarea-wrapper"}>
      <textarea
      className='fit-container'
        onChange={onChange}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <p className="error">Input filed can't be empty!</p>}
    </div>
  );
}

export default TextArea;
