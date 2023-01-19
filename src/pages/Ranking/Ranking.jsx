import { useState } from "react";
import { useEffect } from "react";
import { viewRanking } from "../../components/Ranking";
import "./Ranking.css"


function Ranking() {
    const [arrayRanking, setArrayRanking] = useState([{}]);
    const [isLoaded, setIsLoaded] = useState(false)
    let pos = 0
    function position(){
        return pos + 1 
    }
    useEffect( () => {
      async function waitData(){
        await viewRanking()
        await setArrayRanking(JSON.parse(sessionStorage.getItem("ranking")))
        setIsLoaded(true)
      }
      waitData();
    }, [sessionStorage.getItem("ranking")]);

    
    
    return (
      <div className="Ranking">
        <h1> Ranking de Pontuação: </h1>
        {/* <div className="heading">
        <div className="pos">#</div>
        <div className="name">Nome</div>
        <div className="pts">Pontos</div>
        </div> */}
        <div id={"ranking"}>    
        {isLoaded ? (
            arrayRanking.map((item, index)=>
            <p key={index} id={"rk"+(index+1)}className={"rkItems"}>
                <div className="pos">{index+1}.</div><div className="name">{item.name}</div><div className="pts">{item.score}</div>    
            </p>
            )):<p>Carregando dados...</p>
        
        }
        </div>
      </div>
    );
  }
  
  export default Ranking;