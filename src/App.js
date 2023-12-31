import logo from './logo.svg';
import NavBar from './components/NavBar';
import {Quiz} from './pages/Quiz';
import {Aufgabe1}  from './pages/aufgaben/Aufgabe1';
import {Aufgabe1h}  from './pages/aufgaben/Aufgabe1h';
import {Aufgabe2}  from './pages/aufgaben/Aufgabe2';
import {HashRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './pages/Home';
import { HTML } from './pages/HTML';
import { Ptag } from './pages/erklärungen/Ptag';
import { Htmltags } from './pages/erklärungen/Htmltags';
import { JAVA } from './pages/JAVA';

function App() {
  return (
    <>
      <NavBar/> 

      {/* <Aufgabe1/> */}
      <HashRouter>
       <Routes> 
        <Route index element={<Home/>}></Route>
        <Route path='/home'      element={<Home/>}></Route>
        <Route path='/html'      element={<HTML/>}></Route>
        <Route path='/java'      element={<JAVA/>}></Route>
        <Route path='/aufgaben'  element={<Aufgabe1/>}></Route>
        <Route path='/aufgabeh'  element={<Aufgabe1h/>}></Route>
        <Route path='/aufgabe2'  element={<Aufgabe2/>}></Route>
        <Route path='/htmltags'  element={<Htmltags/>}></Route>
        <Route path='/ptag'  element={<Ptag/>}></Route>
        <Route path='/quiz'  element={<Quiz/>}></Route>
      </Routes> 
     </HashRouter>
      </>
         //<Aufgabe1></Aufgabe1>
  );
}

export default App;
