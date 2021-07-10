import PropTypes from "prop-types";

function ProductComponent(props) {
  const myCSS = { color: props.prdData.prodRange };

  console.log(props.prdData);
  return (
    <>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            {/* <img src={require(props.prdData.pImg).default} width="100px" /> */}
            <img src={props.prdData.prodImg} alt="prod Name" height="300px" />
            <span className="card-title">Card Title</span>
            <a
              href="!#"
              className="btn-floating halfway-fab waves-effect waves-light red"
            >
              <i className="material-icons">add</i>
            </a>
          </div>
          <div className="card-content">
            <p>Prod Id: {props.prdData.prodId}</p>
            <p>Prod Name: {props.prdData.prodName}</p>
            <p>Prod MRP: &#8377; {props.prdData.price}</p>

            <div>
              {props.prdData.inStock ? (
                <p>Prod in stock: {props.prdData.inStock} </p>
              ) : (
                "Out Of Stock"
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { ProductComponent };

ProductComponent.defaultProps = {
  prdData: {
    prodId: 1111,
    prodName: "dummy prod",
    inStock: 11,
    prodRange: "orange",
    prodImg:
      "https://www.path-tec.com/wp-content/uploads/2015/02/shop-placeholder.png",
  },
};

ProductComponent.propTypes = {
  prdData: {
    prodId: PropTypes.number,
    prodName: PropTypes.string,
    inStock: PropTypes.number,
    prodRange: PropTypes.string,
    prodImg: PropTypes.string,
  },
};
