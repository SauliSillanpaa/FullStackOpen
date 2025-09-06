import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
const api_key = import.meta.env.VITE_SOME_KEY

const get = (city) => {
    const request = axios.get(`${baseUrl}?q=${city}&appid=${api_key}&units=metric`)
    // console.log("request: ", request)
    return request.then(response => response.data)
}

export default { get }