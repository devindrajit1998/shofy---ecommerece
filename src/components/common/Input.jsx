import React from "react";

export default function Input(props) {
  return (
    <>
      <div className="tp-login-input-box">
        <div className="tp-login-input">
          <input
            id={props.name}
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
          />
        </div>
        <div className="tp-login-input-title">
          <label htmlFor={props.name}>{props.label}</label>
        </div>
      </div>
    </>
  );
}
