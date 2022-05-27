import axios from 'axios';

const url = 'http://localhost:3000/api'


//traer todos los vehiculos
export const fetchvehicles = async () => {
    try {
        const allVehicles = await axios.get(`${url}/vehicles`);
        return allVehicles;
    } catch (e) {
        console.log(e)
    }
}


//crear nuevo vehiculo
export const fetchNewVehicle = async (vehicle) => {
    try {
        const newVehicles = await axios.post(`${url}/vehicles`, vehicle);
        return newVehicles;
    } catch (e) {
        console.log(e)
    }
}