import React from "react";
import { useContext } from "react";
import { AppContext } from "../../App";

export default function InputImg() {
  const { dispatch } = useContext(AppContext);

  const onChangeImgHendler = (e) => {
    e.preventDefault();
    dispatch({
      type: "DATA-INPUT",
      payload: { imgSrc: URL.createObjectURL(e.target.files[0]) },
    });
  };
  return (
    <div className="input-container">
      <input
        className="input-img"
        type="file"
        accept="image/png, image/jpeg"
        onChange={onChangeImgHendler}
      />
    </div>
  );
}
