import './App.css';
import "./styles/global.scss";
import { Navbar } from './components/Navbar';
import { Topbar } from './components/Topbar';
import { Footer } from './components/Footer';
import { Products } from './components/Products';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ShopProduct } from './components/ShopProduct';
import { Checkout } from './components/Checkout';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import AccountOrders from './components/AccountOrders';
import { useAuth } from './components/generic/useAuth';
import ProtectedRoute from './ProtectedRoute';
import Home from './Home';
function App() {
  
const {user} = useAuth();
  return (
    <div className="App"> 
   
    {user && <><Topbar/><Navbar/></>}
          
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/shop-product/:id1" element={<ShopProduct/>}/>
        <Route path="/checkout" element={<ProtectedRoute><Checkout/></ProtectedRoute>}/>
        <Route path="/account-orders" element={<ProtectedRoute><AccountOrders/></ProtectedRoute>}/>
        <Route path="*" element={<h2>404 - Page Not Found</h2>}/>
      </Routes>                     
      
      {user && <Footer/>}
      
      
  
    </div>
  );
}

export default App;
