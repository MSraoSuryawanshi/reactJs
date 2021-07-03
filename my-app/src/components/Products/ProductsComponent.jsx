function ProductsComponent() {
  var name = "Alex";
  var names = ["Ashitosh", "Ali", "Alex"];
  return (
    <div className="container">
      <div className="section">
        {/* Icon Section */}
        <div className="row">
          <h1>Products Goes here...!</h1>
          {/* Data Bining with React Expressions... */}
          <h1> {name} </h1>
          <h1> {2 + 3} </h1>

          <h1> {names} </h1>

          {names.map((name) => (
            <h1> {name} </h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsComponent;
