import { collection, addDoc, getFirestore } from "firebase/firestore"; 
import { app } from "./firebaseConfig";
const db = getFirestore(app)
export default async function addAirdrome(name, icao, ans_x, ans_y){ 
    try {
        const docRef = await addDoc(collection(db, "airdromes"), {
            name: name,
            icao: icao,
            ans_x: ans_x,
            ans_y:  ans_y
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}