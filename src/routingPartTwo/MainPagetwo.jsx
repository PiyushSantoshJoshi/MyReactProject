import React, { createContext } from 'react'
import { useReducer } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Abouttwo from './Abouttwo';
import ToggleBtn from './ToggleBtn';

const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light'
            };
        default:
            return state;
    }
};

export const ThemeContext = createContext();

export default function MainPagetwo() {

    const [state, dispatch] = useReducer(reducer, { theme: 'light' });

    const themeStyles = {
        light: {
            navbg: "#f8f9fa",
            navtext: "#333333"

        },
        dark: {
            navbg: "#343a40",
            navtext: "#ffffff"

        }
    };

    const currentTheme = themeStyles[state.theme];

    return (
        <>
            <ThemeContext.Provider value={{ state, dispatch, currentTheme }}>
                <div >
                    <Router>
                        <nav className="navbar-expand-sm  " style={
                            {
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '1rem',
                                backgroundColor: currentTheme.navbg,
                                color: currentTheme.navtext
                            }
                        }>
                            <div className="container-fluid">
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#mynavbar"
                                >
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="mynavbar">
                                    <ul className="navbar-nav me-auto">
                                        <li className="nav-item">
                                            <a className="nav-link" href="/" style={{ marginRight: '1rem', color: 'inherit', textDecoration: 'none' }}>Dashboard</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/about" style={{ marginRight: '1rem', color: 'inherit', textDecoration: 'none' }}>About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
                                        </li>
                                    </ul>
                                    <div className="d-flex">
                                        <ToggleBtn/>
                                    </div>
                                </div>
                            </div>

                        </nav>


                        <Routes>
                            <Route path="/about" element={<Abouttwo />} />
                        </Routes>
                    </Router>
                </div>
            </ThemeContext.Provider>


        </>
    )
}
