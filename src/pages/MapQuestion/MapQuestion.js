import { useContext, useState } from 'react'
import map from '../../assets/images/13x16 sem legenda AD.png'
import '../MapQuestion/MapQuestion.css'
import { AirdromeQuestionsContext } from './Question.tsx';


export const MapQuestion = ()=>{
    const airdromeQuestionsContext = useContext(AirdromeQuestionsContext);
    const answerSize = 30;
    const [isCorrect, setCorrect] = useState(false);
    const [isWrong, setWrong] = useState(false);
    const [ansColor, setColor] = useState();
    
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
    }
    function wrongAns(){
        setWrong(true);
        setCorrect(false);
        setColor('red');
    }


    return(    
        <div className="app">
        <div><h1>Onde está o {airdromeQuestionsContext.type} {airdromeQuestionsContext.icao}?</h1></div>
        <div className="img">
            <img src={map} className="map" alt="Video Mapa" onClick={wrongAns}/>
            <div id="answer" style={{   width:answerSize,
                                        height:answerSize,
                                        top: y_answer(airdromeQuestionsContext.ans_y),
                                        left: x_answer(airdromeQuestionsContext.ans_x),
                                        backgroundColor: ansColor                                                                           
                                        }}
            onClick={correctAns}>    
            </div>
            {isCorrect|isWrong ?  
                <div className="result" style={{}}>
                    {isCorrect? <p>Você acertou!</p>:""}
                    {isWrong? <p>Você errou!</p>:""}
                    <div className='DadosAD'>
                        <p className='item'>Nome:{airdromeQuestionsContext.name}</p>
                        <p className='item'>ICAO:{airdromeQuestionsContext.icao}</p>
                        <p className='item'>Tipo:{airdromeQuestionsContext.type}</p>                            
                    </div>
                </div>:""}
        </div>
        </div>
    )
}

