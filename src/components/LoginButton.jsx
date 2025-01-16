import Cookies from 'universal-cookie';
import {auth, googleProvider} from '../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';



const cookies = new Cookies();

const LoginButton = ({setIsUser }) => {


  const handleLogin = () => {
        signInWithPopup(auth,googleProvider).then((result)=>{
          console.log("welcome", result.user);
          cookies.set('kidkod-user', result.user.refreshToken);
          setIsUser(true);
        })
  }
  


  return (
    <button onClick={handleLogin}>Login</button>
  )
}

export default LoginButton;


