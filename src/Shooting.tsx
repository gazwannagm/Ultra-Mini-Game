import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import { EventEmitter } from "stream";

export default function Weapons() {
  const [weapon, setwapon] = useState(30);
  const [enemey, setenemy] = useState(100);
  const [isDisabled, setIsDisabled] = useState(false);
  

  function shootme() {
    setwapon(weapon - 1);
    setenemy(enemey - 10);
    if(enemey ===50 ){
      alert("warning 50% Health")
    }
    if(enemey===30){
      alert("the enemy is going to die ")
     

    }

    if(enemey===10){
      alert("The Enemy Is Dead")
      setIsDisabled(true);
    }
    
  }
  

  return (
    <>
      <button value={weapon}  disabled={isDisabled}  onClick={shootme} >
        Shoot
      </button>
      <p>You're Wapon : {weapon}</p>
      <p>enemy Health : {enemey}</p>
    </>
  );
}
