import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)
    function isState(){
      setIsOn((isOn) => !isOn)
    }
let color = isOn ? "red" : "white"

  return <button onClick={isState} style={{background:color}}>{isOn ? "ON":"OFF" }</button>;
}

export default Toggle;
