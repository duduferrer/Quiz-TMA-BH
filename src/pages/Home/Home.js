import { Link } from 'react-router-dom';
import '../Home/Home.css'

function Home() {

  return (
    <div className="Home">
      <div className='menu'>
        <ul>
          <li><Link to={'/login'} className={"link"}>Painel de Controle</Link></li>
        </ul>
      </div>
      <div><h1>Selecione o modo:</h1></div>
        <button><Link to={'/quizAD'} className={"link"}>Quiz Aeródromos</Link></button>
        <button>Ranking</button>
      </div>
  );
}

export default Home;