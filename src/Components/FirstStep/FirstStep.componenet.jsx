import React from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import Input from "../Inputs/Input.component";
import Button from "../Button/Button.component";

export default function FirstStep() {
  const { state, dispatch } = useContext(AppContext);

  const onClickHendler = () => {
    if (!state.userName && !state.userSurname && !state.email) {
      alert("Please enter your details");
    } else {
      dispatch({
        type: "STEP-BTN",
        payload: { formPages: "SecondStep" },
      });
    }
  };

  return (
    <>
      <h2>Step 1</h2>
      <div>
        <Input
          labelContent="First Name"
          id="userFirstName"
          type="text"
          value={state.userName}
          inputName="userFirstName"
        />
        <Input
          labelContent="Last Name"
          id="userLastName"
          type="text"
          value={state.userLastName}
          inputName="userLastName"
        />
        <Input
          labelContent="Email"
          id="email"
          type="email"
          value={state.email}
          inputName="email"
        />
      </div>
      <Button onClick={onClickHendler}>Next</Button>
    </>
  );
}
