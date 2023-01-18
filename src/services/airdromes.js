import { collection, getDocs, getFirestore, DocumentData, addDoc } from "firebase/firestore"; 
import { app } from "./firebaseConfig";


const db = getFirestore(app)

export async function getAirdromesData(){
    let airdromes = await getDocs(collection(db, "airdromes"));
    let airdromesArray = []
    airdromes.forEach((ad) => {
        airdromesArray.push({id:ad.id,
                             name: ad.get('name'),
                             icao: ad.get('icao'),
                             ans_x: ad.get('ans_x'),
                             ans_y: ad.get('ans_y')})
    });
    return airdromesArray
}

export async function addAirdrome(name, icao, ans_x, ans_y){ 
    try {
        const docRef = await addDoc(collection(db, "airdromes"), {
            name: name,
            icao: icao,
            ans_x: ans_x,
            ans_y:  ans_y
        });
        alert("Cadastro realizado")
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
        alert("Erro no cadastro")
    }
}