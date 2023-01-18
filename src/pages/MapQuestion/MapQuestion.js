import { useContext, useEffect, useState } from 'react'
import map from '../../assets/images/13x16 sem legenda AD.png'
import getAirdromesData from '../../services/retrieveAD';
import '../MapQuestion/MapQuestion.css'

//TODO Prevenir que repita AD
//TODO Adicionar esquema de pontuação
//TODO Adicionar fim de jogo

export default function MapQuestion(){
    const answerSize = 30;
    const [isCorrect, setCorrect] = useState(false);
    const [isWrong, setWrong] = useState(false);
    const [isBlocked, setBlock] = useState(true)
    const [ansColor, setColor] = useState();
    const [nameOrICAO, setNameOrICAO] = useState();
    const [airdrome, setAirdrome] = useState({
        id: 0,
        name: "",
        icao: "",
        ans_x: 0,
        ans_y: 0,
        alreadyAnswered: false 
    });
    

    async function newGame(){
        localStorage.clear()
        await getADArray()
        newQuestion()
        setBlock(false)
    }
        
    function newQuestion(){
            setCorrect(false);
            setWrong(false);
            setColor("");
            selectAD()
        }

        async function getADArray(){ 
            let airdromesArray = await getAirdromesData()
            localStorage.setItem('airdromesArray', JSON.stringify(airdromesArray))
        }
        
        
    function selectAD(){
        let airdromesArray = JSON.parse(localStorage.getItem('airdromesArray'))
        let total = airdromesArray.length
        let i = Math.floor(Math.random()*total)
        setAirdrome({
            id: airdromesArray[i].id,
            name: airdromesArray[i].name,
            icao: airdromesArray[i].icao,
            ans_x: airdromesArray[i].ans_x,
            ans_y: airdromesArray[i].ans_y,
        })
        let type = Math.floor(Math.random()*2)
            switch (type){
                case 0:
                    setNameOrICAO(airdromesArray[i].name)
                    break;
                case 1:
                    setNameOrICAO(airdromesArray[i].icao)
                    break;
            }
        
    }
        
    
    function x_answer(x){
        return (x-answerSize/2)
    } 
    function y_answer(y){
        return (y-answerSize/2)
    }

    function correctAns(){
        setCorrect(true);
        setWrong(false);
        setColor('green');
        localStorage.setItem('corretos', airdrome.id)
    }
    function wrongAns(){
        setWrong(true);
        setCorrect(false);
        setColor('red');
    }

    
    return(    
        <div className="app">
                
            {isBlocked?
                <div style={{backgroundColor:'#000000cc', width: '100%', height:'100em', position: 'absolute', zIndex: 5, margin: 0}}>
                    <div id='howToPlay'>
                        <h2>Como jogar:</h2>
                        <h3>Você será perguntado sobre a localização dos principais aeródromos da terminal BH. Clique onde você acha que está o aeródromo. Caso você acerte, ganhará pontos! Caso erre, você pode tentar de novo!</h3>
                        <button onClick={newGame} style={{width: '20em', height:'3em', marginTop: 100}}>Jogar</button>
                    </div>
                </div>:""
            }
        <div><h1>Onde está o aeródromo {nameOrICAO}?</h1></div>
        <div className="img">
            <img src={map} className="map" alt="Video Mapa" onClick={wrongAns}/>
            <div id="answer" style={{   width:answerSize,
                                        height:answerSize,
                                        top: y_answer(airdrome.ans_y),
                                        left: x_answer(airdrome.ans_x),
                                        backgroundColor: ansColor                                                                           
                                    }}
            onClick={correctAns}>    
            </div>
            {isCorrect|isWrong ?  
                <div className="result" style={{}}>
                    {isCorrect? <p>Você acertou!</p>:""}
                    {isWrong? <p>Você errou!</p>:""}
                    <div className='DadosAD'>
                        <p className='item'>Nome:{airdrome.name}</p>
                        <p className='item'>ICAO:{airdrome.icao}</p>
                        <div id="continue">
                            <button onClick={newQuestion}>Continuar</button>
                        </div>                            
                    </div>
                </div>:""}
        </div>
        </div>
    )
}

