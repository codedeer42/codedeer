import logo from './logo.svg';
import NavBar from './components/NavBar';
import {Aufgabe1} from './pages/Aufgabe1';
import {HashRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './pages/Home';


function App() {
  return (
    <>
      <NavBar/> 

      {/* <Aufgabe1/> */}
      <HashRouter>
       <Routes> 
        <Route index element={<Aufgabe1/>}></Route>
        <Route path='/home'      element={<Home/>}></Route>
        <Route path='/aufgaben'  element={<Aufgabe1/>}></Route>
      </Routes> 
     </HashRouter>
      </>
         //<Aufgabe1></Aufgabe1>
  );
}

export default App;
