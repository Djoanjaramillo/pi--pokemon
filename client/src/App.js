import './App.css';
import { Routes, Route ,useLocation } from "react-router-dom"; 
import Landing from './Landing/Landing';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';
import Home from './components/Home/Home';
import Create from './components/Create/Create';

function App() {
  const location = useLocation();
  return (
   
    <div className="App">
      
    <Routes>
    
      <Route path="/" element={<Landing />} />  
      <Route path="/home" element={<Home />} />
      <Route path="/create" element={<Create/>} />
      <Route path="/detail/:id" element={<CharacterDetail />} />
      </Routes> 
      {location.pathname !== "/"}
    </div>
    
  );
}

export default App;
