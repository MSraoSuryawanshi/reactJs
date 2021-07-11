import { useParams } from "react-router-dom";

function LaptopsComponent(props) {
  let { id } = useParams();
  return <h1>{id} Laptops Goes here..!</h1>;
}

export default LaptopsComponent;
