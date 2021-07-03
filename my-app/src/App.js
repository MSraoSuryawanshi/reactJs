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
      {/* Nav */}
      <NavComponent />

      {/* BannerOne */}
      <BannerOneComponent />

      {/* Products */}
      <ProductsComponent prodId="1001" />

      {/* BannerTwo */}
      <BannerTwoComponent />

      {/* ContactUs */}
      <ContactUSComponent />

      {/* BannerThree */}
      <BannerThreeComponent />

      {/* Footer */}
      <FooterComponent />
    </>
  );
}

export default App;
