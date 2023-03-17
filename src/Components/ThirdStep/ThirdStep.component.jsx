import { useContext } from "react";
import { AppContext } from "../../App";
import Photo from "../Img/Photo.component";
import Button from "../Button/Button.component";
import InputImg from "../Inputs/InputImg.component";

export default function ThirdStep() {
  const { dispatch } = useContext(AppContext);

  const onClickPreviousHendler = () =>
    dispatch({
      type: "STEP-BTN",
      payload: { formPages: "SecondStep" },
    });

  const onClickNextHendler = () =>
    dispatch({
      type: "STEP-BTN",
      payload: { formPages: "FourthStep" },
    });

  return (
    <>
      <h2>Step 3</h2>

      <InputImg />
      <Photo />

      <div>
        <Button onClick={onClickPreviousHendler}>Previous</Button>
        <Button onClick={onClickNextHendler}>Next</Button>
      </div>
    </>
  );
}
