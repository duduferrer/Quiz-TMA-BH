import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext} from "../../contexts/AuthContext";




function Login() {
    const {signInGoogle} = useContext(AuthContext)
    const uid = 'EemOdiOfxAcq4Hya3HINy7WlMTp1';
    const navigate = useNavigate();
    
    async function handleClick(){
      await signInGoogle();
      navigate('/gerenciar')
    }

  return (
    <div className="Login">
      <div><h1>Login</h1></div>
        <button onClick={handleClick}>Login</button>
        <button onClick={()=>{}}>Teste</button>
      </div>
  );
}

export default Login;