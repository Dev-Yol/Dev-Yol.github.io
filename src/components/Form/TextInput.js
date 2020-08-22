import React from "react";
import Icon from "@mdi/react";
import Field from "./Field";

const TextInput = ({
  isIcon = { show: false, float: "left", name: "" },
  type = "text",
  label,
  placeholder,
  onChange,
  value,
  variant = ""
}) => {
  return (
    <>
      <Field>
        <label className="label">{label}</label>
        <div
          className={`control ${
            isIcon.show ? "has-icons-" + isIcon.float : ""
          }`}
        >
          {/* <div className="control has-icons-left"> */}
          <input
            className="input"
            type={type}
            placeholder={placeholder}
            name={label}
          />
          <span
            className="icon is-small is-left"
            style={{ display: isIcon.show ? "" : "none" }}
          >
            <Icon path={isIcon.name} size={1} />
          </span>
        </div>
      </Field>
    </>
  );
};

export default TextInput;
