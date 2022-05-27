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

//traer solo los vehiculos activos
export const fetchvehiclesActives = async () => {
    try {
        const allVehiclesActive = await axios.get(`${url}/vehicles/active`);
        return allVehiclesActive;
    } catch (e) {
        console.log(e)
    }
}


//cambiar el estado de un vehiculo que salio

export const fetchvehiclesNoActives = async (id,data) => {
    try {
        const noActives = await axios.put(`${url}/vehicles/${id}`, data);
        return noActives;
    } catch (e) {
        console.log(e)
    }
}
