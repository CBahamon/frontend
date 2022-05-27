import axios from 'axios';

const url = 'http://localhost:3000/api'

export const fetchvehicles = async () => {
    try {
        const allVehicles = await axios.get(`${url}/vehicles`);
		console.log(allVehicles);
        return allVehicles;
    } catch (e) {
        console.log(e)
    }
}