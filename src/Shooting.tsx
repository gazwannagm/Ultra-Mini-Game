import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Weapons() {
  const [weapon, setwapon] = useState(30);
  const [enemey, setenemy] = useState(100);
  const [shield, setshield] = useState(100);
  const [isDisabled, setIsDisabled] = useState(false);

  //const notify = () => {
    //toast.success("Half HP", {
      //position: "top-center",
    //});
  //};

  //const notify2 = () => {
    //toast.success("Low HP", {
      //position: "top-center",
    //});
  //};

  //const notify3 = () => {
    //toast.success("Slight Shoot", {
      //position: "top-center",
    //});
  //};

  //const notifyshield = () => {
    //toast.success("Shield Has Been Destroyed", {
      //position: "top-center",
    //});
  //};

  function Reset() {
    setwapon(30);
    setenemy(100);
    setshield(100);
    setIsDisabled(false);
  } // for Reseting the game

  function shootme() {
    
    if(shield === 100 || shield > 0){
      setwapon(weapon -1);
      setshield(shield -10);
    }else if(enemey===100 || enemey > 0){
      setwapon(weapon-1);
      setenemy(enemey-10);
    }
    else{
      setIsDisabled(true);
    }

    
  }
  return (
    <>
      <button value={weapon} disabled={isDisabled} onClick={shootme}>
        Shoot
      </button>
      <Toaster />
      <button onClick={Reset}>Reset Game</button>

      <p>You're Wapon : {weapon}</p>
      <p>enemy Health : {enemey}</p>
      <p>enemy Shield : {shield}</p>
    </>
  );
}
