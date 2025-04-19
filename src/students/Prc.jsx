import React, { useState, useEffect } from 'react'

export default function Prc() {
  // Suggested code may be subject to a license. Learn more: ~LicenseLog:2649000920.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3228690669.
  const [currentTime,setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() =>{
    const timerid=setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString());
  },1000);

  return() => clearInterval(timerid);
},[]);

  return (
    <>
      <h1 className='text-center'>Current Time</h1>
      <h6 className='text-center'>{currentTime}</h6>

    </>
  )
}
