import './App.css';
import { Routes, Route } from "react-router-dom"; 
import Landing from './Landing/Landing';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';
import Home from './components/Home/Home';


function App() {
  return (
   
    <div className="App">
    <Routes>
      <Route path="/" element={<Landing />} />  
      <Route path="/home" element={<Home />} />
      <Route path="/detail/:id" element={<CharacterDetail />} />
      </Routes> 
    </div>
    
  );
}

export default App;
