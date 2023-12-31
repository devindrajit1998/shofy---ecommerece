import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Productdetails from './components/product/Productdetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/product' element={<Productdetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
