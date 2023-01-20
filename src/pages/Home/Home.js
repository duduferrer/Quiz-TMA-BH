import { Link } from 'react-router-dom';
import { viewRanking } from '../../components/Ranking';
import '../Home/Home.css'


//TODO criar menu fixo para navegacao
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
        <button onClick={viewRanking}><Link to={'/ranking'} className={"link"}>Ranking</Link></button>
      </div>
  );
}

export default Home;