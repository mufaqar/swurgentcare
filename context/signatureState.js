import { useState } from "react";
import { Context } from "./signatureContext";

export default function SignatureState(props) {
  const mokeState = {
    signatureData : "",
  };
  const [state, setState] = useState(mokeState);

  const updateState = ({ signatureData }) => {
    console.log("🚀 ~ file: signatureState.js:11 ~ updateState ~ signatureData", signatureData)
    //update the state to get the props and update state accordingly
    setState({ signatureData: signatureData });
  };

  return (
    <Context.Provider value={{ state, updateState }}>
      {props.children}
    </Context.Provider>
  );
}