import { useParams } from "react-router-dom";

const ProductsPage = () => {
  const { id } = useParams();
  return (<div>Products page!! ${id}</div>)
};

export default ProductsPage;