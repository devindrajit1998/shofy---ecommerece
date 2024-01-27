import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Productdetails from './components/product/Productdetails';
import Shop from './components/shop/Shop';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/product/:id' element={<Productdetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
