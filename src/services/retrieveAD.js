import { collection, getDocs, getFirestore, DocumentData } from "firebase/firestore"; 
import { app } from "./firebaseConfig";


const db = getFirestore(app)

export default async function getAirdromesData(){
    let airdromes = await getDocs(collection(db, "airdromes"));
    let airdromesArray = []
    airdromes.forEach((ad) => {
        airdromesArray.push({id:ad.get('id'),
                             name: ad.get('name'),
                             icao: ad.get('icao'),
                             ans_x: ad.get('ans_x'),
                             ans_y: ad.get('ans_y')})
    });
    return airdromesArray
}