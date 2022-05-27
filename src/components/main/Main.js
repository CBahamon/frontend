import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FormCar } from './FormCar';
import { TableCar } from './TableCar';

import { fetchvehicles } from '../../service/service';

export const Main = () => {

  //state para los vehiculos
	const [cars, setCars] = useState([]);

  const url = 'http://localhost:3000/api';
//useeffect para traer los vehiculos que estan activos en la bd
	useEffect(() => {
	  const getVehicles = async () => {
      try {
        // const allVehicles =  await fetchvehicles();
        const allVehicles =  await axios.get("/");
        // setCars(allVehicles.data);
        console.log(allVehicles);
      }catch(e){
          console.log(e);
      }
    }

    getVehicles();
	}, []);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        
        
        <div>
          <FormCar/>
        </div>


        <div className="grid grid-cols-1 grid-rows-2 gap-2 sm:gap-6 lg:gap-8">
          <TableCar />
        </div>
      </div>
    </div>
  )
}