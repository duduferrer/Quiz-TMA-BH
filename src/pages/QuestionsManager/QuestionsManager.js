import { useState } from 'react';
import { Link } from 'react-router-dom';
import addAirdrome from '../../services/addAD';
import '../Home/Home.css'

function QuestionsManager() {
  const [name, setName] = useState('')
  const [icao, setIcao] = useState('')
  const [ans_x, setAns_x] = useState('')
  const [ans_y, setAns_y] = useState('')
  
  async function submitAirdrome(e){
    e.preventDefault();
    if(name!=""){
      await addAirdrome(name, icao, ans_x, ans_y)
      clearForm();
    }else{alert("Preencha os dados")}
  }

  function clearForm(){
    setName('')
    setIcao("")
    setAns_x("")
    setAns_y("")
  }

  return (
    <div className="Manager">
      <div><h1>Inserção de aeródromo </h1></div>
      <div>
        <p>Para inserir um aeródromo, você precisa de 3 informações: <br/> 
      1. Nome oficial/comumente chamado; <br/>
      2. Indicativo ICAO do aeródromo; <br/>
      3. As coordenadas X e Y do aeródromo, no PSD que serve de base.(866px x 1155px)
        </p>
      </div>
        <form id={'add'} style={{width: "50vw", textAlign:"justify"}} onSubmit={submitAirdrome}>
          <label>Nome do Aeródromo: </label>
          <input type={"text"} name={"name"} placeholder={"Aeroporto de Confins"} onChange={(e)=>setName(e.target.value)} value={name}/><br/> 
          <label>Indicativo ICAO: </label>
          <input type={"text"} name={"icao"} placeholder={"SBCF"} onChange={(e)=>setIcao(e.target.value)}value={icao}/><br/> 
          <label>Coordenada X: </label>
          <input type={"text"} name={"ans_x"} placeholder={"625"} onChange={(e)=>setAns_x(e.target.value)}value={ans_x}/><br/> 
          <label>Coordenada Y: </label>
          <input type={"text"} name={"ans_y"} placeholder={"727"} onChange={(e)=>setAns_y(e.target.value)}value={ans_y}/><br/> 
          <input type={"submit"} value="Cadastrar"/>
        </form>
      </div>
  );
}

export default QuestionsManager;