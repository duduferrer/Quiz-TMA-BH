import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "./firebaseConfig";


const db = getFirestore(app)

export async function addScore(name, score){ 
    try {
        const docRef = await addDoc(collection(db, "ranking"), {
            name: name,
            score: score,
            
        });
        console.log(docRef.id)
        return docRef.id
    } catch (e) {
        console.error("Error adding document: ", e);
        alert("Erro no cadastro")
    }
}

export async function getScores(){
    let ranking = await getDocs(collection(db, "ranking"));
    let rankingArray = []
    ranking.forEach((score) => {
        rankingArray.push({  
                             name: score.get('name'),
                             score: score.get('score'),
                             id: score.id
                          })
    });
    return rankingArray
}
