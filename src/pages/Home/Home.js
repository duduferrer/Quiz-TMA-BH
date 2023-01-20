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
          <Link to={'/quizAD'} className={"link"}><button className='button' id='buttonQuiz'>Quiz Aeródromos</button></Link>
          <Link to={'/ranking'} className={"link"}><button className='button'onClick={viewRanking}id='buttonRk'>Ranking</button></Link>
        </div>
      </div>
      </div>
  );
}

export default Home;