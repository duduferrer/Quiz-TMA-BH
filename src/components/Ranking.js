import { addScore, getScores } from "../services/ranking";




export async function submitRank(name, score) {
    const idLastScore= await addScore(name, score)
    const posArray = await viewYourPosition(idLastScore)
    sessionStorage.setItem("your_ranking", JSON.stringify(posArray))
}

export async function viewRanking(){
    let scoresArray = await getScores();
    scoresArray = scoresArray.sort(_sortByScore)
    sessionStorage.setItem("ranking", JSON.stringify(scoresArray))
    return scoresArray

}


export async function viewTop10(){
    let scoresArray = await getScores();
    scoresArray = scoresArray.sort(_sortByScore)
    let scoreFiltered = scoresArray.filter((x,i)=> i<=9)
    return scoreFiltered

}


export async function viewYourPosition(idLS){
    let scoresArray = await getScores()
    scoresArray = scoresArray.sort(_sortByScore)    
    scoresArray = scoresArray.map((obj,index) => ({ ...obj, position: index+1}))
    let scoreIndex = scoresArray.findIndex(item => item.id === idLS)
    let scoreFiltered = scoresArray.filter((x,i)=> (i===scoreIndex)||(i>scoreIndex && i<=scoreIndex+2)||(i<scoreIndex && i>=scoreIndex-2))
    scoreIndex = scoreFiltered.findIndex(item => item.id === idLS)
    scoreFiltered = scoreFiltered.map((obj, index) => index === scoreIndex ? { ...obj, isPlayer: 'isPlayer'}:{...obj})
    return scoreFiltered
}

function _sortByScore(a,b){
    if(a.score > b.score){
        return -1;
    }
    if (a.score < b.score) {
        return 1;
    }
    if (a.score = b.score){
        if(a.name > b.name){
            return 1
        }
        if (a.name < b.name) {
            return -1
        }
    }
    return 0
}