import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FormCar } from './FormCar';
import { TableCar } from './TableCar';

import { fetchvehicles } from '../../service/service';

export const Main = () => {

  //state para los vehiculos
	const [cars, setCars] = useState([]);


  const data = async() => {
    // const getData = await fetch('http://localhost:3000/api/vehicles')
    // const getData = await axios.get('http://localhost:3000/api/vehicles');
    const getData = await fetchvehicles();
    setCars(getData.data);
  }
 
//useeffect para traer los vehiculos que estan activos en la bd
	useEffect(() => {
	
    data();
	}, [cars]);

  return (
    <div className="bg-white  ">
      <div className=" py-24 flex  flex-1 justify-center ">
        <div className=''>
          <FormCar/>
        </div>


        <div className="w-auto">
          <TableCar cars={cars}/>
        </div>
      </div>
    </div>
  )
}