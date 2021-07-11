import img from "./../../assets/img/pnf.jpeg";

function PageNotFoundComponent(props) {
  return (
    <>
      <h1 style={{ color: "red" }}>404 Page Not Found...!</h1>
      <img src={img} width="100%" />;
    </>
  );
}

export default PageNotFoundComponent;
