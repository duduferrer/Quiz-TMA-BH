import { Link } from 'react-router-dom';
import '../Home/Home.css'

function Home() {

  return (
    <div className="Home">
      <div><h1>Selecione o modo:</h1></div>
        <button><Link to={'/quizAD'}>Quiz Aeródromos</Link></button>
      </div>
  );
}

export default Home;