import React, { useContext } from 'react'
import UserContext from './UserContext'

export default function ABout() {
    const username = useContext(UserContext);
    return (
        <>
            <p> Hello {username} from about</p>
        </>
    );
}
