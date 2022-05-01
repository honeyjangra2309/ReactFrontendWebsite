
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Journey from './Components/Journey';
import Navbar from './Components/Navbar';
import Store from './Components/Store/Store';
import Team from './Components/Team/Team';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes >
        <Route path="Home" element={<Home />} />
        <Route path="Journey" element={ <Journey />} />
        <Route path="Team" element={<Team />} />
         <Route path="Store" element={ <Store />}/>
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
