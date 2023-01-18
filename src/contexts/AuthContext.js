import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { createContext, useState } from "react";
import {addUser, getUsers} from "../services/users";
import { app } from "../services/firebaseConfig";

const provider = new GoogleAuthProvider();

export const AuthContext = createContext({})

export const AuthProvider = ({children})=>{
    const auth = getAuth(app);
    const [user, setUser] = useState()
    
    const signInGoogle = async()=>{
        signInWithPopup(auth, provider)
        .then(async(result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user
            setUser(user);
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("user", JSON.stringify(user))
            let usersArray = await getUsers();
            console.log(usersArray)
            console.log(user)
            let usersArrayFiltered = usersArray.filter(x=> user.uid === x.uid)
            console.log(usersArrayFiltered)
            console.log(user.displayName, user.uid)
            if(usersArrayFiltered.length === 0){
                await addUser(user.displayName, user.uid)
            }else{
                console.log("Usuario ja existe")
            }
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode,errorMessage,credential)
        });
    }
    return(
        <AuthContext.Provider value={{signInGoogle, signed: !!user}}>
            {children}
        </AuthContext.Provider>
    )
}