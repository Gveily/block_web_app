import { useParams } from "react-router-dom";

const ProductsPage = () => {
  const { id } = useParams();
  return (<div>Products page!!</div>)
};

export default ProductsPage;