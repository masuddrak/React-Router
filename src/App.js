import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import NotFund from './components/NotFund/NotFund';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='service' element={<Services></Services>}></Route>
        <Route path='*' element={<NotFund></NotFund>}></Route>
      </Routes>
    </div>
  );
}

export default App;
