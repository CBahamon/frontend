import React, { useRef } from 'react'

export const FormCar = () => {

	const numDocumentRef = useRef();
	const nombresRef = useRef();
	const placaRef = useRef();
	const tipoVehiculoRef = useRef();
	const descripcionRef = useRef();

	const handleSubmit = async (e) => {

		e.preventDefault();


		const data = {
			userId: numDocumentRef.current.value,
			userName: nombresRef.current.value,
			vehicleNumber: placaRef.current.value,
			vehicleType: tipoVehiculoRef.current.value,
			vehicleDescription: descripcionRef.current.value
		};

		console.log(data);
	}


	return (
		<div className="sm:mt-0">
			<h3 className="text-lg font-medium leading-6 text-gray-900 mb-3">Ingreso de Vehiculo</h3>
			<div className="md:grid md:grid-cols-2 md:gap-6">
				<div className="mt-5 md:mt-0 md:col-span-2">
					<form onSubmit={handleSubmit}>
						<div className="shadow overflow-hidden sm:rounded-md">
							<div className="px-4 py-5 bg-white sm:p-6">
								<div className="grid grid-cols-6 gap-6">
									<div className="col-span-6 sm:col-span-3">
										<label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
											Cedula
										</label>
										<input type="text" required
											className=" w-full px-3 py-2 border-b-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-blue-500  sm:text-sm" placeholder="Numero De Documento"
											ref={numDocumentRef}
										/>

									</div>

									<div className="col-span-6 sm:col-span-3">
										<label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
											Nombres
										</label>
										<input type="text" required
											className=" w-full px-3 py-2 border-b-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-blue-500  sm:text-sm" placeholder="Nombres"
											ref={nombresRef}
										/>
									</div>

									<div className="col-span-6 sm:col-span-3">
										<label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
											Placa
										</label>
										<input type="text" required
											className=" w-full px-3 py-2 border-b-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-blue-500  sm:text-sm" placeholder="Placa"
											ref={placaRef}
										/>
									</div>

									<div className="col-span-6 sm:col-span-3">
										<label htmlFor="country" className="block text-sm font-medium text-gray-700">
											Tipo de Vehiculo
										</label>
										<select
											id="country"
											name="country"
											autoComplete="country-name"
											className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
											ref={tipoVehiculoRef}
										>
											<option value='Motocicleta'>Motocicleta</option>
											<option value='Automovil'>Automovil</option>
											<option value='Bicicleta'>Bicicleta</option>
										</select>
									</div>

									<div className="col-span-6">
										<label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
											Descripcion del vehiculo
										</label>
										<input type="text" required
											className=" w-full px-3 py-2 border-b-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-blue-500  sm:text-sm" placeholder="Descripcion del Vehiculo"
											ref={descripcionRef}
										/>
									</div>

								</div>
							</div>
							<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
								<button
									type="submit"
									className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								>
									Guardar
								</button>

							</div>
						</div>
					</form>
				</div>
			</div>
		</div>

	)
}