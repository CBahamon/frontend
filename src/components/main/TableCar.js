import axios from 'axios';
import React from 'react';
import {NavLink} from 'react-router-dom';
import { fetchvehiclesNoActives } from '../../service/service';

export const TableCar = ({cars}) => {

	const url = 'http://localhost:3000/api'
	const handleExit = async (car ) => {
		console.log(car);

		const vehicle = {
			userId: car.userId,
			userName: car.userName,
			vehicleNumber: car.vehicleNumber,
			vehicleType: car.vehicleType,
			vehicleDescription: car.vehicleDescription,
			checkInDateTime: car.checkInDateTime,
			checkOutDateTime: new Date(),
			havePlace:false
		};

		const exit = await fetchvehiclesNoActives(car._id,vehicle);
		// const data ={
		// 	havePlace : false
		// }

		// try{
		// 	// await axios.put(`/vehicles/${id}`,data)
		// 	await fetchvehiclesNoActives(id,data)
		// }catch(e){
		// 	console.log(e);
		// }
	}
	
	return (
		<>
			<table className=''>
				<thead className="bg-gray-50 divide-y divide-gray-200">
					<tr>
						<th
							colSpan={7}
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
							H. Entrada
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
							className=" py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>

						</th>

					</tr>
				</thead>
				<tbody className="bg-white divide-y divide-gray-200 ">
					{cars.map((car) => (

					<tr key={car._id}>
						<td className="px-6 py-4 whitespace-nowrap">
							<div className="text-sm font-light text-gray-900">
								{car.checkInDateTime}
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
								<button
									type='submit'
									className="inline-flex items-center px-3 py-2 border border-red-500 rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									onClick={() => handleExit(car)}
								>
									Finalizar
								</button>
								<button
									// to={`/profile-edit-info/${person.id}`}
									className="ml-3 inline-flex items-center px-3 py-2 border border-green-500 rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								>
									Editar
								</button>
						</td>

					</tr>
					))}
				</tbody>
			</table>
		</>
	)
}