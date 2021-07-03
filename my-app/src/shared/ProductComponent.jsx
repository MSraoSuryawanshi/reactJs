function ProductComponent(props) {
  console.log(props.prdData);
  return (
    <>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img
              src="https://materializecss.com/images/sample-1.jpg"
              alt="prod Name"
            />
            <span className="card-title">Card Title</span>
            <a
              href="!#"
              className="btn-floating halfway-fab waves-effect waves-light red"
            >
              <i className="material-icons">add</i>
            </a>
          </div>
          <div className="card-content">
            <p>{props.prdData.prodId} </p>
            <p>{props.prdData.prodName} </p>
          </div>
        </div>
      </div>
    </>
  );
}

export { ProductComponent };
