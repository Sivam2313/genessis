import './App.css';
import { Route, Routes } from "react-router-dom";
import Seller from './pages/Seller';
import SellerProduct from './pages/SellerProduct';
import Customer from './pages/Customer';

function App() {
  return (
    <div className="App bg-background min-h-screen h-fit pd-6">
      <Routes>
        <Route path="/" element={<Seller />}></Route>
        <Route path="/seller" element={<SellerProduct />}></Route>
        <Route path="/customer" element={<Customer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
