import { ChangeEvent } from "react";
import "../styles/TextArea.css";

interface TextAreaProps {
  maxHeight: number | false;
  fontSize: number;
  label: string;
  value: string | number;
  name: string;
  placeholder: string;
  error: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

function TextArea({
  maxHeight,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
  fontSize,
}: TextAreaProps) {
  const height = (value.toString().split(/\r\n|\r|\n/).length+2) * (fontSize+2.4) ;
  return (
    <div className={"window " + label + "-textarea-wrapper"}>
      <textarea
        className={label}
        style={{
          fontSize: fontSize.toString() + "px",
          height: maxHeight?Math.min(maxHeight,height).toString() + "px":height.toString() + "px",
        }}
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
