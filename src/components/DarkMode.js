import DarkModeToggle from "react-dark-mode-toggle";
import styled from 'styled-components';
import {useState} from 'react';


export const toogleState = (colorMode) => {
    let mode = colorMode;
    return mode;
}
export const ToggleDark = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => true);
    toogleState(isDarkMode);
    return (
      <DarkModeToggle
        onChange={setIsDarkMode}
        checked={isDarkMode}
        size={80}
      />
    );
    
  };

  
  
