import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import ProductDetails from './pages/Admin/ProductDetails';
// import OrderDetails from './pages/Admin/OrderDetails';
import Users from './pages/Admin/Users';
import CartPage from './pages/CartPage';
import Profile from './pages/user/Profile';
import Orders from './pages/user/Orders';
import AdminOrders from './pages/Admin/AdminOrders';
// import Orders from './pages/user/Orders';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/orders" element={<Orders />} />
          {/* <Route path="admin/order-details" element={<Orders />} /> */}
        </Route>
        
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/product-details" element={<ProductDetails />} />
          <Route path="admin/order-details" element={<AdminOrders />} />
          <Route path="admin/users" element={<Users />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
