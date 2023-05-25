import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Home from "../Home";
import IPhones from "../IPhones";
import Cart from "../Cart";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iphones" element={<IPhones />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
