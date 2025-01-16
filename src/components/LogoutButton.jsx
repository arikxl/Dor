import React from 'react'
import Cookies from 'universal-cookie';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';


const cookies = new Cookies();

const LogoutButton = ({ setIsUser , setRoom}) => {

    
    const logOut = async () => {
        await signOut(auth);  //שרת
        cookies.remove('kidkod-user'); // קוקי בדפדפן
        setIsUser(false); // המשתנה של היוזר
        setRoom(null); // המשתנה של החדר

    }


  return (
      <button onClick={logOut}>Log Out</button>
  )
}

export default LogoutButton