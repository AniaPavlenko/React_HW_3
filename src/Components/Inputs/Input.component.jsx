import React from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import "./Input.style.css";

export default function Input({ labelContent, id, type, value, inputName }) {
  const { dispatch } = useContext(AppContext);

  const onChangeHendler = (event) => {
    dispatch({
      type: "DATA-INPUT",
      payload: { [event.currentTarget.name]: event.currentTarget.value },
    });
  };

  return (
    <div className="input-container">
      <label htmlFor="id" className="input-label">
        {labelContent}
      </label>
      <input
        className="input"
        type={type}
        defaultValue={value}
        name={inputName}
        id={id}
        onChange={onChangeHendler}
      />
    </div>
  );
}
