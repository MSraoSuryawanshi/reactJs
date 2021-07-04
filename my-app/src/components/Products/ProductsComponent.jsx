import { ProductComponent } from "./../../shared/ProductComponent";

function ProductsComponent() {
  var products = [
    {
      prodId: 1001,
      prodName: "Mobile Screen",
      inStock: 0,
      prodRange: "red",
      prodImg:
        "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg",
    },
    {
      prodId: 1002,
      prodName: "Mobile Charger",
      inStock: 10,
      prodRange: "blue",
      prodImg:
        "https://images-na.ssl-images-amazon.com/images/I/71KJMBUedYL._UX342_.jpg",
    },
    {
      prodId: 1003,
      prodName: "Mobile Hradphones",
      inStock: 10,
      prodRange: "green",
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
      </div>
    </div>
  );
}

export default ProductsComponent;
