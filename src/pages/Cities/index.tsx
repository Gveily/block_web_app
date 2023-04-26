import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AreaInterface, baseUrl } from "../../api/api";
import axios from "axios";
import { Area } from "../../components/Area";

const CityPage = () => {
  const { id } = useParams();
  const [areas, setAreas] = useState<Array<AreaInterface>>([]);

  useEffect(() => {
    const fetchCities = async () => {
      const response = await axios.get<Array<AreaInterface>>(baseUrl + '/areas/by-city', {
        params: {
          cityId: id
        }
      });

      console.log(response);

      setAreas(response.data);
    };

    fetchCities();
  }, [id])

  return (
    <div className='areas'>
      { areas.map((el) => {
        return <Area  { ...el } key={el.id}/>
      }) }
    </div>
  )
};

export default CityPage;