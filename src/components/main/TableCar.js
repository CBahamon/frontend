import React, { useState } from 'react';
import { EditData } from './EditData';
import { Modal } from './Modal';
import {Link} from 'react-router-dom';

export const TableCar = ({ cars }) => {

	const [modalOn, setModalOn] = useState(false);
	const [precioFinal, setprecioFinal] = useState(0)
	const [timeOut, setTimeOut] = useState('')
	const [editData, setEditData] = useState(false)

	const [vehicle, setVehicle] = useState([])

	const handleExit = async (car) => {

		const horaEntrada = new Date(car.checkInDateTime);
		const horaSalida = new Date();
		setTimeOut(horaSalida);
		const precio = horaSalida - horaEntrada;

		let calculoPrecio = 0
		setModalOn(true);
		setVehicle(car)
		//1 hora = 3600 segundos
		//carro 3000 - 0.833 s
		//moto 1500 -0.416 s
		//cicla 1000 - 0.277 s

		switch (car.vehicleType) {
			case 'Automovil':
				calculoPrecio = (precio / 300 / 60 / 60).toFixed(3);
				setprecioFinal(calculoPrecio)
				break;
			case 'Motocicleta':
				calculoPrecio = (precio / 600 / 60 / 60).toFixed(3);
				setprecioFinal(calculoPrecio)
				break;
			case 'Bicicleta':
				calculoPrecio = (precio / 1000 / 60 / 60).toFixed(3);
				setprecioFinal(calculoPrecio)
				break;
			default:
				break;
		}

	}

	const handleModal = () => {
		setEditData(true)
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

								{modalOn && <Modal setModalOn={setModalOn} precioFinal={precioFinal} vehicle={vehicle} timeOut={timeOut}/>}

								<Link
									// to={`/profile-edit-info/${person.id}`}
									className="ml-3 inline-flex items-center px-3 py-2 border border-green-500 rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									// onClick={() => handleModal(car)}
									to={`/delete/${car._id}`}
								>
									Editar
								</Link>

								{/* {editData && <EditData setEditData={setEditData} car={car}/>} */}
							</td>

						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}