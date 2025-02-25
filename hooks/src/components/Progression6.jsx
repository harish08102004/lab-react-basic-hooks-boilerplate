
import React,{ useState } from 'react';
import '../App.css';
import UseContext from './Darkmode';

export const ToggleTheme = React.createContext()

function UseState6() {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <UseContext/>
    </ToggleTheme.Provider>
  );
}

export default UseState6;
