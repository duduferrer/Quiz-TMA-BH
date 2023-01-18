import { useContext } from "react";
import { AuthContext} from "../../contexts/AuthContext";



function Login() {
    const {signInGoogle} = useContext(AuthContext)

  return (
    <div className="Login">
      <div><h1>Login</h1></div>
        <button onClick={signInGoogle}>Login</button>
      </div>
  );
}

export default Login;