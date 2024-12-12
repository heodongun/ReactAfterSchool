import { useState } from 'react'
import './App.css' 
function Toggle(){
    const [toggle, setToggle] = useState(false)
    return(
      <div className='toggle-container'>
        <h1 className='toggle-header'>
          toggle is  <span style={{'color' : 'red'}}>{toggle?"켜짐":"꺼짐"}</span>
        </h1>
        <button className='toggle-button' onClick={()=>{setToggle(!toggle)}}>toggle</button>
      </div>
    )
  }

export default Toggle
  