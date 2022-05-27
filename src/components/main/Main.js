import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FormCar } from './FormCar';
import { TableCar } from './TableCar';

import { fetchvehicles, fetchvehiclesActives } from '../../service/service';

export const Main = () => {

  //state para los vehiculos
	const [cars, setCars] = useState([]);


  const data = async() => {
    // const getData = await fetch('http://localhost:3000/api/vehicles')
    // const getData = await axios.get('http://localhost:3000/api/vehicles');
    const getData = await fetchvehiclesActives();
    setCars(getData.data);
  }
 
//useeffect para traer los vehiculos que estan activos en la bd
	useEffect(() => {
    data();
	}, []);

  return (
    <div className="bg-white  ">
      <div className=" py-24 flex  flex-1 justify-center ">
        <div className=''>
          {/* componente del formulario para crear vehiculo */}
          <FormCar/>
        </div>


        <div className="w-auto">
          {/* componente de la tabla que muestra los vehiculos activos */}
          <TableCar cars={cars}/>
        </div>
      </div>
    </div>
  )
}