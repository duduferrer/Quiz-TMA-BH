import { Link } from 'react-router-dom';
import { viewRanking } from '../../components/Ranking';
import '../Home/Home.css'


//TODO criar menu fixo para navegacao
function Home() {

  return (
    <div className="Home">
      <div className='menu'>
          <Link to={'/login'} className={"link"} id='controlPanel'>Painel de Controle</Link>
      </div>
      <div id='menuBody'>
      <div><h1 id='menuText'>Menu</h1></div>
        <div id='buttonsMenu'>
          <button className='button' id='buttonQuiz'><Link to={'/quizAD'} className={"link"}>Quiz Aeródromos</Link></button>
          <button className='button'onClick={viewRanking}id='buttonRk'><Link to={'/ranking'} className={"link"}>Ranking</Link></button>
        </div>
      </div>
      </div>
  );
}

export default Home;