import { useParams } from "react-router-dom";

const AreaPage = () => {
  const { id } = useParams();
  return (<div>Area page!!</div>)
};

export default AreaPage;