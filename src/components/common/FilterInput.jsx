import React from "react";

export default function FilterInput(props) {
  return (
    <>
      <input id={props.cate} type="checkbox" />
      <label htmlFor={props.cate}>{props.name}</label>
    </>
  );
}
