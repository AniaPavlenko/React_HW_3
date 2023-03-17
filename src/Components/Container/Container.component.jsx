import React from "react";
import "./Container.style.css";

export default function Container({ children }) {
  return <section className="main-container">{children}</section>;
}
