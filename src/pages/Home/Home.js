import '../Home/Home.css'
import map from '../assets/images/13x16 sem legenda AD.png'

function Home() {
  return (
    <div className="Home">
      <div><h1>Selecione o modo:</h1></div>
      <div className="img">
        <img src={map} class="map" alt="Video Mapa"/>
        <div id="marcador"></div>
      </div>
    </div>
  );
}

export default Home;