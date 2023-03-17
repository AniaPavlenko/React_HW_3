import { useContext } from "react";
import { AppContext } from "../../App";
import Photo from "../Img/Photo.component";

export default function FifthStep() {
  const { state } = useContext(AppContext);
  console.log(state);
  return (
    <>
      <h2>Congratulations</h2>
      <Photo />
      <div>
        <h3>Your details</h3>
        <ul className="list-info">
          <li>First Name: {state.userFirstName}</li>
          <li>Last Name: {state.userLastName}</li>
          <li>Email: {state.email}</li>
          <li>City: {state.city}</li>
          <li>Street: {state.street}</li>
          <li>Building: {state.buildingNumber}</li>
        </ul>
      </div>
    </>
  );
}
