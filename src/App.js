
import './App.css';
import Contact from './Components/Contact';
import Journey from './Components/Journey';
import Navbar from './Components/Navbar';
import Store from './Components/Store/Store';
import Team from './Components/Team/Team';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Journey />
      <Team />
      <Store />
      <Contact />
    
    </div>
  );
}

export default App;
