import { useState } from "react";
import { useEffect } from "react";
import { viewRanking } from "../../components/Ranking";
import "./Ranking.css"


function Ranking() {
    const [arrayRanking, setArrayRanking] = useState([{}]);
    let pos = 0
    function position(){
        return pos + 1 
    }
    useEffect( () => {
        setArrayRanking(JSON.parse(sessionStorage.getItem("ranking")))
        
    }, [sessionStorage.getItem("ranking")]);

    
    
    return (
      <div className="Ranking">
        <h1> Ranking de Pontuação: </h1>
        <div id={"ranking"}>    
        {
            arrayRanking.map((item, index)=>
            <p key={index} id={"rk"+(index+1)}className={"rkItems"}>
                {index+1}.&ensp;{item.name}&emsp;{item.score}    
            </p>
            )
        
        }
        </div>
      </div>
    );
  }
  
  export default Ranking;