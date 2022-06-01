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

//cambiar el estado de un vehiculo para que no se muestre la informacion "eliminar"

export const fetchvehiclesDelete = async (id,data) => {
    try {
        const deleteVehicle = await axios.put(`${url}/vehicles/delete/${id}`, data);
        return deleteVehicle;
    } catch (e) {
        console.log(e)
    }
}


//traer solo los vehiculos activos que no han sido "eliminados"
export const fetchvehiclesActivesData = async () => {
    try {
        const allVehiclesActiveData = await axios.get(`${url}/vehicles/activeData`);
        return allVehiclesActiveData;
    } catch (e) {
        console.log(e)
    }
}

//traer un solo vehiculo 
export const fetchGetOneVehicle = async (id) => {
    try {
        const getOneVehicle = await axios.get(`${url}/vehicles/${id}`);
        return getOneVehicle;
    } catch (e) {
        console.log(e)
    }
}


//cambiar el estado de un vehiculo para que no se muestre la informacion "eliminar"

export const fetchDeleteRegister = async (id,data) => {
    try {
        const deleteVehicle = await axios.put(`${url}/vehicles/deleteRegister/${id}`, data);
        return deleteVehicle;
    } catch (e) {
        console.log(e)
    }
}