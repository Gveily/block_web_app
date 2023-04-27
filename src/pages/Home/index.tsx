import { City } from "../../components/City";
import React, { useEffect, useState } from "react";
import { baseUrl, CityInterface } from "../../api/api";
import axios from "axios";

const Home = () => {
  const [cities, setCities] = useState<Array<CityInterface>>([]);

  useEffect(() => {
    const fetchCities = async () => {
      const response = await axios.get<Array<CityInterface>>(baseUrl + '/cities');

      console.log(response);

      setCities(response.data);
    };

    fetchCities();
  }, [])

  return (<div className='cities-container'>
    {cities.map((city) => {
      return <City {...city} key={city.id} />
    })}
  </div>)
};

export default Home;