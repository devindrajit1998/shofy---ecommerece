import React from "react";

export default function CommonBtn(props) {
  return (
    <button className={`tp-product-details-${props.style}-btn ${props.width}`} onClick={props.func}>
      {props.name}
    </button>
  );
}
