import logo from './logo.svg';
import NavBar from './components/NavBar';
import {Aufgabe1} from './pages/Aufgabe1';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './pages/Home';


function App() {
  return (
    <>
      <NavBar/> 
  
      <Routes> 
        <Route index element={<Home/>}></Route>
        <Route path='/home'  element={<Home/>}></Route>
        <Route path='/aufgaben'  element={<Aufgabe1/>}></Route>
      </Routes>
     
      </>
         //<Aufgabe1></Aufgabe1>
  );
}

export default App;
