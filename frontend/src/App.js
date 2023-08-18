import './App.css';
import { Route, Routes } from "react-router-dom";
import Seller from './pages/Seller';
import SellerProduct from './pages/SellerProduct';

function App() {
  return (
    <div className="App bg-background min-h-screen h-fit pd-6">
      <Routes>
        <Route path="/" element={<SellerProduct />}></Route>
        <Route path="/seller" element={<Seller />}></Route>
      </Routes>
    </div>
  );
}

export default App;
