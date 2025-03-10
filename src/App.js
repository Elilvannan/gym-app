import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Plan from './components/Plan/Plan';
import Programs from './components/Program/Programs';
import Reasons from './components/Reasons/Reasons';
function App() {
  return (
    <div className="App">
    <Hero/>
    <Programs/>
    <Reasons/>
    <Plan/>
    </div>
  );
}

export default App;
