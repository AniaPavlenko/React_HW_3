import { useContext } from "react";
import { AppContext } from "../../App";
import Input from "../Inputs/Input.component";
import Button from "../Button/Button.component";

export default function FourthStep() {
  const { state, dispatch } = useContext(AppContext);

  const disabledButton =
    state.password.length > 0 || state.confirmPassword.length > 0
      ? false
      : true;

  const btnSubmitHendler = () => {
    if (state.password !== state.confirmPassword) {
      return alert("Passwords does not match");
    }

    if (state.password.length < 5) {
      return alert("Password must contain more than 5 characters");
    }

    dispatch({
      type: "STEP-BTN",
      payload: { formPages: "FifthStep" },
    });
  };

  const onClickPreviousHendler = () =>
    dispatch({
      type: "STEP-BTN",
      payload: { formPages: "ThirdStep" },
    });

  return (
    <>
      <h2>Step 4</h2>

      <div>
        <Input
          labelContent="Password"
          id="userPassword"
          type="password"
          value={state.password}
          inputName="password"
        />

        <Input
          labelContent="Confirm Password"
          id="userConfirmPassword"
          type="password"
          value={state.confirmPassword}
          inputName="confirmPassword"
        />
      </div>

      <div>
        <Button onClick={onClickPreviousHendler}>Previous</Button>

        <Button disabled={disabledButton} onClick={() => btnSubmitHendler()}>
          Submit
        </Button>
      </div>
    </>
  );
}
