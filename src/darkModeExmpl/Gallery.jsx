import React from 'react'
import DarkModeContext from './DarkModeContext';
import { useContext } from 'react';

export default function Gallery() {
  const { isDarkMode } = useContext(DarkModeContext);
  const galleryStyle = {
    backgroundColor: isDarkMode ? "#000000" : "#ffffff",
    color: isDarkMode ? "#ffffff" : "#000000",
    border: isDarkMode ? "1px solid #40c4f5" : "1px solid #000000",

  }

  const h4Style = {
    borderBottom: isDarkMode ? "1px solid #40c4f5" : "1px solid #000000"
  };

  return (
    <>
      <div className='rounded h-100' style={galleryStyle} >
            <h4 className='text-center p-2' style={h4Style}>Gallery</h4>
            <div>
              <div className='row p-2'>
                <div className='  col-4'>
                  <img src='https://images.pexels.com/photos/12162438/pexels-photo-12162438.png?auto=compress&cs=tinysrgb&w=600' width={"100%"}></img>
                </div>
                <div className=' col-4'>
                  <img src='https://media.istockphoto.com/id/2096574438/photo/young-woman-works-remotely-from-home.jpg?b=1&s=612x612&w=0&k=20&c=4iAvaO-Kc9a7WlMy_a9Weg1vgNVbJX9LMsYArQMCgBA=' width={"100%"}></img>
                </div>
                <div className=' col-4'>
                  <img src='https://images.pexels.com/photos/12204296/pexels-photo-12204296.jpeg?auto=compress&cs=tinysrgb&w=600' width={"100%"}></img>
                </div>

                <div className='mt-4  col-4'>
                  <img src='https://images.pexels.com/photos/12548694/pexels-photo-12548694.jpeg?auto=compress&cs=tinysrgb&w=600' width={"100%"}></img>
                </div>
                <div className='mt-4  col-4'>
                  <img src='https://images.pexels.com/photos/11112729/pexels-photo-11112729.jpeg?auto=compress&cs=tinysrgb&w=600' width={"100%"}></img>
                </div>
                <div className='mt-4  col-4'>
                  <img src='https://images.pexels.com/photos/6947281/pexels-photo-6947281.jpeg?auto=compress&cs=tinysrgb&w=600' width={"100%"}></img>
                </div>
              </div>
            </div>

          </div>
    </>
  )
}
