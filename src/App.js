import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import RoutesPath from './Components/RoutesPath';


function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
    
    <Navbar/>
    <RoutesPath/>
    
    
    
    
    </BrowserRouter>
      
      
      
      
    </div>
  );
}

export default App;
