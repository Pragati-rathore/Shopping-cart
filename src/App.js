
import './App.css';

import Home from './Components/Home';
import Men from './Components/Men/men';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          
        </Route>
        <Route path="/men" element={<Men/>}>
          
          </Route>
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
