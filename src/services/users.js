import { collection, addDoc, getFirestore, getDocs } from "firebase/firestore"; 
import { app } from "./firebaseConfig";


const db = getFirestore(app)



export async function addUser(name, id){ 
    try {
        const docRef = await addDoc(collection(db, "users"), {
            name: name,
            id: id,
            manager: false,
            admin:  false
        });
        console.log("Usuario cadastrado", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
        alert("Erro no cadastro")
    }
}

export async function getUsers(){
    let users = await getDocs(collection(db, "users"));
    let usersArray = []
    users.forEach((user) => {
        usersArray.push({    id:user.id,
                             name: user.get('name'),
                             uid: user.get('id'),
                             admin: user.get('admin'),
                             manager: user.get('manager')})
    });
    return usersArray
}