import React from 'react'
import { useContext } from 'react'
import DarkModeContext from '../darkModeExmpl/DarkModeContext'
import DynamicWebSiteNavbar from './DynamicWebSiteNavbar'

export default function MainPage() {

    const { isDarkMode } = useContext(DarkModeContext);

    const bgStyle = {
        marginTop: '65px',
        backgroundColor: isDarkMode ? "#000000" : " #0d6efd",
        color: isDarkMode ? "#ffffff" : "#000000",

    }

    const midContainerStyle = {
        height: '100%',
        backgroundColor: isDarkMode ? "#d6d8db" : "#ffffff ",
        color : "black"
    }

    const bgInfonStyle = {
        
        backgroundColor: isDarkMode ? "#000000" : " #0d6efd",
        color: isDarkMode ? "#ffffff" : "#000000",

    }


    const boxStyle = {
        height: '100%'

    }

    return (
        <>
            <div >
                <DynamicWebSiteNavbar />
                <div className="container-fluid p-5 text-white text-center" style={bgStyle}>
                    <h1>UNIVERSITY PROFESSOR PORTAL</h1>
                    <p>Welcome to Professor portal ! </p>
                </div>
                <div style={midContainerStyle}>
                    <div className="container py-5" >
                        <div className="row">
                            <p className='mb-3 fs-1 text-center'>PROFESSOR'S GUIDE</p>
                            <div className="col-sm-4 ">
                                <div className='border border-dark rounded p-3' style={boxStyle}>
                                    <h3 className=' text-center'>MARKLIST</h3>
                                    <p>This is the unit where you can see your current marklist.</p>
                                    <p>You can also Edit and Delete your marklist on the selected student.</p>
                                    <p>Edit Button will be directing you to Update page.</p>
                                </div>
                            </div>
                            <div className="col-sm-4 ">
                                <div className='border border-dark rounded p-3 ' style={boxStyle}>
                                    <h3 className=' text-center'>UPDATE</h3>
                                    <p>This is the unit where you can Update your current marklist.</p>
                                    <p>You are provided with a form to update your marklist last student.</p>
                                    <p>To select different student you need to Navigate to Marklist and then Edit to update that particular Student.</p>

                                </div>
                            </div>
                            <div className="col-sm-4 ">
                                <div className='border border-dark rounded p-3' style={boxStyle}>
                                    <h3 className=' text-center'>ADD STUDENT</h3>
                                    <p>This is the unit where you can Add a student to your current marklist.</p>
                                    <p>You are provided with a form to Add student Credentials to your marklist.</p>
                                    <p>The Added Student Credentials will be available in Marklist after adding student.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-5 text-white text-center" style={bgInfonStyle}>

                    <div className="row">
                        <div className='d-flex flex-column justify-content-center'>
                            <a className='text-decoration-none text-white ' href='/About'><p className='a-hover fs-4'>About</p></a>
                            <a className=' mb-1  text-decoration-none text-white ' href='/Contacts'><p className='a-hover fs-4'>Contacts</p></a>
                            <a className=' mb-1  text-decoration-none text-white ' href='/Gallery'><p className='a-hover fs-4'>Gallery</p></a>
                            <a className=' text-decoration-none text-white ' href='/Services'><p className='a-hover fs-4'>Services</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
