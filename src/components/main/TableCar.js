import React from 'react';
import {NavLink} from 'react-router-dom';

export const TableCar = () => {
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
					<tr>
						<td className="px-6 py-4 whitespace-nowrap">
							<div className="text-sm font-light text-gray-900">
								19:45
							</div>
						</td>
						<td className="px-6 py-4 whitespace-nowrap">
							<div className="text-sm font-light text-gray-900">
								1193126104
							</div>
						</td>
						<td className="px-6 py-4 whitespace-nowrap">
							<div className="text-sm font-light text-gray-900">
								Cristian Bahamon
							</div>
						</td>
						<td className="px-6 py-4 whitespace-nowrap">
							<div className="text-sm font-light text-gray-900">
								JMI28E
							</div>
						</td>
						<td className="px-6 py-4 whitespace-nowrap">
							<div className="text-sm font-light text-gray-900">
								Motocicleta
							</div>
						</td>
						<td className="px-6 py-4 whitespace-nowrap">
							<div className="text-sm font-light text-gray-900">
								Vivar Cool
							</div>
						</td>
						<td className="px-6 py-4 whitespace-nowrap">
								<button
									type='submit'
									className="inline-flex items-center px-3 py-2 border border-red-500 rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								// onClick={() => handleDeleteUser(person.id)}
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
				</tbody>
			</table>
		</>
	)
}