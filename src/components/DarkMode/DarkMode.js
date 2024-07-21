import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = ({ darkMode, setDarkMode }) => {
    const toggleDarkMode = (e) => {
        // Toggle dark mode state
        setDarkMode(prevMode => !prevMode);
    };

    // Update body attribute to reflect theme change
    React.useEffect(() => {
        document.querySelector("body").setAttribute('data-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                checked={darkMode}
                onClick={toggleDarkMode} // Toggle dark mode on change
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun className='sun' />
                <Moon className='moon' />
            </label>
        </div>
    );
};

export default DarkMode;
