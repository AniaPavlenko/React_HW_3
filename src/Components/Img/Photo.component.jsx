import React from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import "./Photo.style.css";

export default function Photo() {
  const { state } = useContext(AppContext);

  return <img src={state.imgSrc} alt="" className="photo" />;
}
