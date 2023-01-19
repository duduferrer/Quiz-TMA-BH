import {useState } from 'react'
import { Link } from 'react-router-dom';
import map from '../../assets/images/13x16 sem legenda AD.png'
import {getAirdromesData} from '../../services/airdromes';
import '../MapQuestion/MapQuestion.css'


export default function MapQuestion(){
    const answerSize = 30;
    const [isCorrect, setCorrect] = useState(false);
    const [isWrong, setWrong] = useState(false);
    const [isBlocked, setBlock] = useState(true)
    const [ansColor, setColor] = useState();
    const [nameOrICAO, setNameOrICAO] = useState();
    const [score, setScore] = useState(0);
    const [isOver, setIsOver] = useState(false);
    const [airdrome, setAirdrome] = useState({
        id: 0,
        name: "",
        icao: "",
        ans_x: 0,
        ans_y: 0,
        alreadyAnswered: false 
    });
    

    async function newGame(){
        setIsOver(false)
        setScore(0)
        console.log('clicou')
        sessionStorage.clear()
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
            sessionStorage.setItem('airdromesArray', JSON.stringify(airdromesArray))
        }
        
        
    function selectAD(){
        let airdromesArray = (JSON.parse(sessionStorage.getItem('airdromesArray')))
        let total = airdromesArray.length
        if(total === 0){ 
            endGame()
        }else{
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
                    default: 
                        setNameOrICAO(airdromesArray[i].icao)
                }
        }
    }
    function removeAlreadyAns(){
        sessionStorage.setItem('correctAnswer', JSON.stringify(airdrome.id))
        const valueToRemove = sessionStorage.getItem("correctAnswer")
        let airdromesArray = (JSON.parse(sessionStorage.getItem('airdromesArray')))
        airdromesArray = airdromesArray.filter(x=>'"'+x.id+'"' !== valueToRemove)
        sessionStorage.setItem('airdromesArray', JSON.stringify(airdromesArray))

    }

    function endGame(){
        setIsOver(true);
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
        updateScore(50)
        removeAlreadyAns()
    }
    function wrongAns(){
        setWrong(true);
        setCorrect(false);
        setColor('red');
        updateScore(-10)
    }

    function updateScore(pts){
        if(score+pts<0){

        }else{
            setScore(score + pts)
        }
    }

    
    return(    
        <div className="app">
            {isOver?
                <div className='screenCover'>
                    <div className='coverText'>
                        <h2>Fim de Jogo!</h2>
                        <h3>Você quer voltar para página inicial ou jogar novamente?</h3>
                        <h3>Pontuação: {score}pts.</h3>
                        <button onClick={newGame} style={{width: '20em', height:'3em', marginTop: 100}}>Jogar Novamente</button>
                        <button style={{width: '20em', height:'3em', marginTop: 100}}><Link to={'/'}>Voltar para o Menu</Link></button>
                    </div>
                </div>:""
            }
                
            {isBlocked?
                <div className='screenCover'>
                    <div className='coverText'>
                        <h2>Como jogar:</h2>
                        <h3>Você será perguntado sobre a localização dos principais aeródromos da terminal BH. Clique onde você acha que está o aeródromo. Caso você acerte, ganhará pontos! Caso erre, você pode tentar de novo!</h3>
                        <button onClick={newGame} style={{width: '20em', height:'3em', marginTop: 100}}>Jogar</button>
                    </div>
                </div>:""
            }
        <div id='heading'>
            <h1>Onde está o aeródromo {nameOrICAO}?</h1>
            <p style={{textAlign: "center"}}>Pontos: {score}</p>
        </div>
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
                <div className="screenCover" style={{backgroundColor:'#00000022'}}>
                    <div className='result'>
                        {isCorrect? <h2>Você acertou!</h2>:""}
                        {isWrong? <h2>Quase!</h2>:""}
                        <div className='DadosAD'>
                            <p className='item'>Nome:{airdrome.name}</p>
                            <p className='item'>ICAO:{airdrome.icao}</p>
                            <div id="continue">
                                <button onClick={newQuestion}>Continuar</button>
                            </div>                            
                        </div>
                    </div>
                </div>:""}
        </div>
        </div>
    )
}

