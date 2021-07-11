import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import BannerOneComponent from "./components/BannerOne/BannerOneComponent";
import BannerThreeComponent from "./components/BannerThree/BannerThreeComponent";
import BannerTwoComponent from "./components/BannerTwo/BannerTwoComponent";
import ContactUSComponent from "./components/ContactUs/ContactUSComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import NavComponent from "./components/Nav/NavComponent";
import ProductsComponent from "./components/Products/ProductsComponent";

function App() {
  return (
    <>
      <Router>
        <NavComponent />
        <BannerOneComponent />
        <ProductsComponent prodId="1001" />
        <BannerTwoComponent />
        <ContactUSComponent name="Alex" />
        <BannerThreeComponent />
        <FooterComponent />
      </Router>
    </>
  );
}

export default App;
