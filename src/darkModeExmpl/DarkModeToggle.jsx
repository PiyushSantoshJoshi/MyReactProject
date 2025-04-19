import React, { useContext } from 'react'
import DarkModeContext from './DarkModeContext';

export default function DarkModeToggle() {
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

    const bgStyle = {
        backgroundColor: isDarkMode ? "#000000" : "#ffffff",
        color: isDarkMode ? "#ffffff" : "#000000",
    }

    return (
        <>
            {/* <div className='col-3 '>
                <div className='mt-3 mb-3'>
                    <div className="form-check form-switch d-flex justify-content-end align-items-center gap-5" onClick={toggleDarkMode}>
                    <label className="form-check-label me-2" htmlFor="flexSwitchCheckDefault">{isDarkMode ? "Dark Mode" : "Light Mode"}</label>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    </div>
                    
                </div>
            </div> */}
            <button className='btn btn-primary' onClick={toggleDarkMode}>Mode</button>
        </>
    );
}
