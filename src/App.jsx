import Display from "./components/Display";
import Buttons from "./components/Buttons";
import Container from "./components/Container";
import { useState } from "react";

function App() {
  let btn_n = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  let [calVal, setcalVal] = useState("");

  const onBtnClick = (btnText) => {
    if (btnText === "=") {
      let result = eval(calVal);
      setcalVal(result);
    } else if (btnText === "C") {
      setcalVal("");
    } else {
      let newVal = calVal + btnText;
      setcalVal(newVal);
    }
  };
  return (
    <Container>
      <Display dval={calVal}></Display>
      <Buttons btn_name={btn_n} onBtnClick={onBtnClick}></Buttons>
    </Container>
  );
}

export default App;
