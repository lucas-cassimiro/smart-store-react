import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Home from "../Home";
import IPhones from "../IPhones";
import Cart from "../Cart";
import Androids from "../Androids";
import { Location } from "../Location";
import Smartwatchs from "../Smartwatchs";
import Fones from "../FonesBlutetooth";
import BlackFriday from "../BlackFriday";


const AppRouter = () => {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iphones" element={<IPhones />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/android" element={<Androids/>} />
        <Route path="/localizacao" element={<Location/>} />
        <Route path="/smartwatch" element={<Smartwatchs/>} />
        <Route path="/fones-de-ouvido" element={<Fones/>} />
        <Route path="/blackfriday" element={<BlackFriday/>}/>
      </Routes>

      <Footer />

    </BrowserRouter>
  );
};

export default AppRouter;
