import './App.css';
import "./styles/global.scss";
import { Navbar } from './components/Navbar';
import { Topbar } from './components/Topbar';
import { Footer } from './components/Footer';
import { Products } from './components/Products';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { ShopProduct } from './components/ShopProduct';
import { Checkout } from './components/Checkout';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import AccountOrders from './components/AccountOrders';
import { useAuth } from './components/generic/useAuth';
import ProtectedRoute from './ProtectedRoute';
import Home from './Home';
import ScrollToTop from './components/ScrollToTop';
function App() {
  
const {user} = useAuth();
const location = useLocation();
const hideNavbarFooter = location.pathname==="/login" || location.pathname==="/signup";
  return (
    <div className="App"> 
   <ScrollToTop/>
    {!hideNavbarFooter && <><Topbar/><Navbar/></>}
          
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/shop-product/:id1" element={<ShopProduct/>}/>
        <Route path="/checkout" element={user ? <ProtectedRoute><Checkout/></ProtectedRoute>:<LogIn/>}/>
        <Route path="/account-orders" element={user ? <ProtectedRoute><AccountOrders/></ProtectedRoute>:<LogIn/>}/>
        <Route path="*" element={<h2>404 - Page Not Found</h2>}/>
      </Routes>                     
      
      {!hideNavbarFooter && <Footer/>}
      
      
  
    </div>
  );
}

export default App;
