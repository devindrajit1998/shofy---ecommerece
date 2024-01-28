import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Productdetails from './components/product/Productdetails';
import Shop from './components/shop/Shop';
import Cart from './components/cart/Cart';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ResetPW from './components/password/ResetPW';
import Coupon from './components/coupon/Coupon';
import Error from './components/404/Error';
import Wish from './components/wish/Wish';

function App() {
  return (
  <>
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/product' element={<Productdetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/reset-password' element={<ResetPW/>}/>
        <Route path='/coupon' element={<Coupon/>}/>
        <Route path='/404' element={<Error/>}/>
        <Route path='/wishlist' element={<Wish/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
