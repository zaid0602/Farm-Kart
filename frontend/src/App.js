
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import grainbanner from './Components/Assets/Frontend_Assets/grainsbanner.png';
import pulsesbanner from './Components/Assets/Frontend_Assets/pulsesbanner.png';
import veggiesbanner from './Components/Assets/Frontend_Assets/veggiesbanner.png';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Shop/>}/>
       <Route path='/Grains' element={<ShopCategory banner={grainbanner} category="Grains"/>}/>
       <Route path='/Pulses' element={<ShopCategory banner={pulsesbanner} category="Pulses"/>}/>
       <Route path='/Veggies' element={<ShopCategory banner={veggiesbanner} category="Veggies"/>}/>
       <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
       </Route>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>  
    </div>
  );
}

export default App;
