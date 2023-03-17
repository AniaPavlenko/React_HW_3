import React from "react";
import "./Button.style.css";

export default function Button({ children, className, ...props }) {
  const style = className ? `primary-button ${className}` : `primary-button`;

  return (
    <button className={style} {...props}>
      {children}
    </button>
  );
}
