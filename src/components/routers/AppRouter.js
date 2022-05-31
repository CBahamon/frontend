import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import { Detail } from '../Detail/Detail';
import { EditData } from '../main/EditData';
import { Main } from '../main/Main';
import { Modal } from '../main/Modal';
import { Navbar } from '../navbar/Navbar';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/list-all" element={<Detail />} />
				<Route path="/delete/:idVehicle" element={<EditData />} />
			</Routes>
		</BrowserRouter>
	)
}