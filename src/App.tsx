import { FormEvent, ReactElement, useState } from "react";
import { AccountForm } from "./AccountForm";
import { AddressForm } from "./AddressForm";
import FormWrapper from "./FormWrapper";
import { useMultistepForm } from "./useMultistepForm";
import { UserForm } from "./UserForm";

function App() {
  type FormData = {
    firstName: string;
    lastName: string;
    age: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    email: string;
    password: string;
  };
  const INITIAL_DATA: FormData = {
    firstName: "",
    lastName: "",
    age: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    password: "",
  };
  function updateFields(  fileds : Partial<FormData>){
setData(prv =>{
  return {...prv,...fileds}
})
  }
  const [data, setData] = useState(INITIAL_DATA);
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields}/>,
      <AddressForm {...data} updateFields={updateFields}/>,
      <AccountForm {...data} updateFields={updateFields}/>,
    ]);
  function onsubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    else 
    alert("Done ! 👌")
  }
  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
        maxWidth: "max-content",
      }}
    >
      <form onSubmit={onsubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>

        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              back
            </button>
          )}
          <button type={"submit"}>{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
