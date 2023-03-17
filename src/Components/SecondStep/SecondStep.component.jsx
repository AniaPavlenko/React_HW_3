import { useContext } from "react";
import { AppContext } from "../../App";
import Input from "../Inputs/Input.component";
import Button from "../Button/Button.component";

export default function SecondStep() {
  const { state, dispatch } = useContext(AppContext);

  const onClickPreviousHendler = () =>
    dispatch({
      type: "STEP-BTN",
      payload: { formPages: "FirstStep" },
    });

  const onClickNextHendler = () => {
    if (!state.city && !state.streetName && !state.buildingNumber) {
      alert("Please enter your details");
    } else {
      dispatch({
        type: "STEP-BTN",
        payload: { formPages: "ThirdStep" },
      });
    }
  };

  return (
    <>
      <h2>Step 2</h2>

      <div>
        <Input
          labelContent="City"
          id="city"
          type="text"
          value={state.city}
          inputName="city"
        />

        <Input
          labelContent="Street"
          id="streetName"
          type="text"
          value={state.streetName}
          inputName="streetName"
        />

        <Input
          labelContent="Building"
          id="buildingNumber"
          type="number"
          value={state.buildingNumber}
          inputName="buildingNumber"
        />
      </div>

      <div>
        <Button onClick={onClickPreviousHendler}>Previous</Button>
        <Button onClick={onClickNextHendler}>Next</Button>
      </div>
    </>
  );
}
