import React, { useReducer } from "react";
import "./App.css";
import Container from "./Components/Container/Container.component";
import PhotoDefault from "./Components/Img/PhotoDefault";
import FirstStep from "./Components/FirstStep/FirstStep.componenet";
import SecondStep from "./Components/SecondStep/SecondStep.component";
import ThirdStep from "./Components/ThirdStep/ThirdStep.component";
import FourthStep from "./Components/FourthStep/FourthStep.component";
import FifthStep from "./Components/FifthStep/FifthStep.component";

export const AppContext = React.createContext(null);

const initialState = {
  userFirstName: "",
  userLastName: "",
  email: "",
  city: "",
  street: "",
  buildingNumber: "",
  password: "",
  confirmPassword: "",
  imgSrc: PhotoDefault,
  formPages: "FirstStep",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DATA-INPUT":
      return {
        ...state,
        ...action.payload,
      };

    case "STEP-BTN":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // _______________________

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div>
        <Container>
          {state.formPages === "FirstStep" && <FirstStep />}
          {state.formPages === "SecondStep" && <SecondStep />}
          {state.formPages === "ThirdStep" && <ThirdStep />}
          {state.formPages === "FourthStep" && <FourthStep />}
          {state.formPages === "FifthStep" && <FifthStep />}
        </Container>
      </div>
    </AppContext.Provider>
  );
}
