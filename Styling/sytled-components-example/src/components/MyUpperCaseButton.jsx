import React from "react";

export default function MyUpperCaseButton(props) {
  return (
      <button {...props} children={props.children.toUpperCase()}/>
  )
}
