import './App.css';
import NavBar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Vote from'./components/Vote/Vote'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/voting' element={<Vote/>}/>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
