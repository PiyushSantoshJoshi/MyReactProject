import React from 'react'
import { useContext } from 'react'
import DarkModeContext from '../darkModeExmpl/DarkModeContext'
import DynamicWebSiteNavbar from './DynamicWebSiteNavbar'
import Contacts from '../darkModeExmpl/Contacts'
import Back from '../assets/Svgfolder/Back.svg'

export default function DynamicWebsiteContacts() {
    const { isDarkMode } = useContext(DarkModeContext);

    const bgStyle = {
        backgroundColor: isDarkMode ? "#000000" : " #ffffff",
        color: isDarkMode ? "#ffffff" : "#000000",

    }
  return (
    <>
     <div className='h-100'>
        <DynamicWebSiteNavbar />
     <div className="container-fluid p-5 text-center" style={bgStyle}>
        <div className='row'>
          <div className='row'>
            <div className='col-1' style={{ margin: '65px' }}>
              <a href='/'>
              <img src={Back} style={isDarkMode ? { filter: "invert(1)" } : { filter: "invert(0)" }} />
              </a>
            </div>
          </div>
          <div style={{margin:'65px auto',width:'50%'}}>
              <Contacts />
          </div>
        </div>
     </div>
     </div>
    </>
  )
}
