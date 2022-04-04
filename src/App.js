import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './components/DashBoard/DashBoard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
