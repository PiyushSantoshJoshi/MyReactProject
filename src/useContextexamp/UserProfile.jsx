import React, { useContext } from 'react'
import UserContext from './UserContext'

export default function UserProfile() {
    const username= useContext(UserContext);
  return (
    <>
        <p> Hello {username}!</p>
    </>
  )
}
