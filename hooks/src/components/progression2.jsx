import React from "react";
import { useState } from "react";
import "../App.css"

function UseState2(){
    const [currAge,setAge] = useState(19);
    const [currSib, setSib] = useState(1);
    
     
  const handleAge = ()=>{
    setAge(currAge+1);
  }
  
  const handleSib = ()=>{
    setSib(currSib+1);
  }


  return(
    <div>
      <h3>Current age {currAge}</h3>
      <h3>My siblings {currSib}</h3>
      <button onClick={handleAge}>Get Older</button>
      <button onClick={handleSib}>Get more sib</button>
    </div>
  )
}

export default UseState2