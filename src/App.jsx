import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Details from './pages/Details';
import Add from './pages/Add';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/Add' element={<Add/>} />
        <Route path='/Details' element= {<Details/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
