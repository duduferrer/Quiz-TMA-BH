import { collection, addDoc, getFirestore, getDocs, query, where } from "firebase/firestore"; 
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

// export async function getUserByUID(uid){
//     uid = 'EemOdiOfxAcq4Hya3HINy7WlMTp1'
//     let users = ""
//     let q = query(collection(db,"users"),where("uid", "==", uid)) 
//     users = await getDocs(q)
//     users.forEach((doc)=>
//         console.log(doc.uid)
//     )
//     console.log(users[0].uid)
    
//     // await db.collection("users").where("uid", "==", uid).get()
    
// }
