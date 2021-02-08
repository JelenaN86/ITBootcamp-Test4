import axios from 'axios'


//https://api.spacexdata.com/v4
const BASE_URL = 'https://api.spacexdata.com/v4'
const LAUNCHES = '/launches'



export const getAllLaunches = () => axios.get(`${BASE_URL}${LAUNCHES}`)
export const getRocketById = () => axios.get('https://api.spacexdata.com/v4/rockets/:id')