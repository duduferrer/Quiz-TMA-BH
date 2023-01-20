import { useState } from "react";
import { useEffect } from "react";
import { viewRanking } from "../../components/Ranking";
import "./Ranking.css"
import { Menu } from '../../components/Menu/Menu';


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
        <Menu/>
        <h1> Ranking de Pontuação: </h1>
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