import { ProductComponent } from "./../../shared/ProductComponent";

function ProductsComponent() {
  var products = [
    {
      prodId: 1001,
      prodName: "Mobile Screen",
    },
    {
      prodId: 1002,
      prodName: "Mobile Charger",
    },
    {
      prodId: 1003,
      prodName: "Mobile Hradphones",
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
          {products.map((product) => {
            return <ProductComponent prdData={product} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductsComponent;
