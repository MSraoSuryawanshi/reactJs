import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";

import HomeComponent from "../home/HomeComponent";
import PageNotFoundComponent from "../PageNotFoundComponent/PageNotFoundComponent";
import { ProductComponent } from "./../../shared/ProductComponent";
import LaptopsComponent from "./LaptopsComponent";
import MobileComponent from "./MobileComponent";
import PlantsComponent from "./PlantsComponent";

function ProductsComponent() {
  var products = [
    {
      prodId: 1001,
      prodName: "Mobile Screen",
      inStock: 0,
      prodRange: "red",
      pImg: "../../assets/img/mob1.png",
      price: 1200,
      prodImg:
        "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg",
    },
    {
      prodId: 1002,
      prodName: "Mobile Charger",
      inStock: 10,
      prodRange: "blue",
      pImg: "../../assets/img/mob2.png",
      price: 1200,
      prodImg:
        "https://images-na.ssl-images-amazon.com/images/I/71KJMBUedYL._UX342_.jpg",
    },
    {
      prodId: 1003,
      prodName: "Mobile Hradphones",
      inStock: 10,
      prodRange: "green",
      pImg: "./../../assets/img/mob3.png",
      price: 1200,
      prodImg:
        "https://images-na.ssl-images-amazon.com/images/I/81bSWFV1tsL._UL1500_.jpg",
    },
  ];
  return (
    <div className="container">
      <div className="section">
        {/* 
        { }  -> comments, Block, Exp, Binding
         */}

        {/* Icon Section */}
        <div className="row">
          {products.map((product, index) => {
            return <ProductComponent prdData={product} key={index} />;
          })}
        </div>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/home" component={HomeComponent} />
          <Route path="/mobile" component={MobileComponent} />
          <Route path="/lapi" component={LaptopsComponent} />
          <Route path="/plants" component={PlantsComponent} />
          <Route component={PageNotFoundComponent} />
        </Switch>
      </div>
    </div>
  );
}

export default ProductsComponent;
