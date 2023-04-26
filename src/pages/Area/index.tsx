import { useParams } from "react-router-dom";

const AreaPage = () => {
  const { id } = useParams();
  return (<div>Area page!! ${id}</div>)
};

export default AreaPage;