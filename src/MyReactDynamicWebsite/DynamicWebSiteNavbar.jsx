import React from 'react'
// import { useReducer } from 'react';
// import RedRouteReducer from '../ReducerRouting/RedRouteReducer';
import { useContext } from 'react'
import DarkModeContext from '../darkModeExmpl/DarkModeContext'
import LightMode from '../assets/Svgfolder/LightMode.svg'
import DarkMode from '../assets/Svgfolder/DarkMode.svg'


export default function DynamicWebSiteNavbar() {

    const {isDarkMode, toggleDarkMode} = useContext(DarkModeContext);

  return (
    <>
    <div className='container-fluid'>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={"https://www.w3schools.com/bootstrap5/img_avatar1.png"} alt={"Avatar Logo"}  className="rounded-pill" width={'40px'}/> 
                </a>
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
                                <a className="nav-link" href="/Marklist">
                                    Marklist
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/UpdateStudent">
                                    Update
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">
                                    Add Student
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex">
                        <a className="nav-link" onClick={toggleDarkMode}>
                            <img src={isDarkMode ? DarkMode : LightMode} width={'100%'} alt=''/>
                        </a>    
                        </form>
                    </div>
                </div>
            </nav>
    </div>
    </>
  )
}
