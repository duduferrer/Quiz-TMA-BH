import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext} from "../../contexts/AuthContext";
import { Menu } from '../../components/Menu/Menu';



function Login() {
    const {signInGoogle, isManager} = useContext(AuthContext)
    const navigate = useNavigate();
    
    useEffect(()=>{
      if(isManager){
        navigate('/addquestion')   
      }

  },[isManager])


    async function handleClick(){
      signInGoogle()
    }

  return (
    <div className="Login">
            <Menu/>
      <div><h1>Login</h1></div>
        <button onClick={handleClick}>Login</button>
      </div>
  );
}

export default Login;