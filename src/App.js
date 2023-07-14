import { BrowserRouter as Router, Route } from 'react-router-dom';
import GenderRevealButton from './components/GenderRevealButton';
import GenderRevealPage from './components/GenderRevealPage';
import './App.css';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={GenderRevealButton} />
        <Route exact path="/revelation" component={GenderRevealPage} />
      </div>
    </Router>
  );
};

export default App;
