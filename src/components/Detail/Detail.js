import React, { useEffect, useState } from 'react';
import {  fetchvehiclesActivesData, fetchvehiclesDelete } from '../../service/service';

export const Detail = () => {

  //state para los vehiculos
  const [cars, setCars] = useState([]);


  const data = async () => {
    const getData = await fetchvehiclesActivesData();
    setCars(getData.data);
  }

  //useeffect para traer los vehiculos que estan activos en la bd
  useEffect(() => {
    data();
  }, []);

  const handleDeleteVehicle = async (car) => {

    const data = {
			...car,
      status:false
    }

    fetchvehiclesDelete(car._id, data);
    window.location.reload();

    console.log(data);
  }

  return (
    <div className='flex p-6 justify-center '>
      <table className=''>
        <thead className="bg-gray-50 divide-y divide-gray-200">
          <tr>
            <th
              colSpan={9}
              className="px-6 py-3 text-center
                                       text-2xl font-medium text-gray-500 uppercase tracking-wider ">
              Usuarios
            </th>
          </tr>
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              N.
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Cedula
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Nombres
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Placa
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Tipo Vehiculo
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Descripcion
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Fecha de Ingreso
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Fecha de Salida
            </th>
            <th
              scope="col"
              className=" py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >

            </th>

          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 ">
          {cars.map((car,index) => (

            <tr key={car._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-light text-gray-900">
                  {index + 1}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-light text-gray-900">
                  {car.userId}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-light text-gray-900">
                  {car.userName}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-light text-gray-900">
                  {car.vehicleNumber}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-light text-gray-900">
                  {car.vehicleType}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-light text-gray-900">
                  {car.vehicleDescription}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-light text-gray-900">
                 {car.checkInDateTime}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-light text-gray-900">
                {car.checkOutDateTime}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  type='submit'
                  className="inline-flex items-center px-3 py-2 border border-red-500 rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => handleDeleteVehicle(car)}
                >
                  Eliminar
                </button>
               
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}