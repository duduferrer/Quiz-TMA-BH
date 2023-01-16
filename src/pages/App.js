import '../style/App.css';
import map from '../assets/images/13x16 sem legenda AD.png'
import {MapQuestion} from './MapQuestion/MapQuestion';
import { AirdromeQuestionsProvider } from './MapQuestion/Question.tsx';

function App() {
  return (
    <AirdromeQuestionsProvider>
      <MapQuestion/>
    </AirdromeQuestionsProvider>
  );
}

export default App;
