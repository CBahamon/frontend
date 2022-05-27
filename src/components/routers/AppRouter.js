import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import { Detail } from '../Detail/Detail';
import { Main } from '../main/Main';
import { Navbar } from '../navbar/Navbar';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/list-all" element={<Detail />} />
			</Routes>
		</BrowserRouter>
	)
}