import axios from 'axios'

let api = axios.create({
    headers: {
        'Client-ID': '5ggct4b3lgzo7ocfjn0stna6pyau0t'
    }
})

console.log(api);

export default api;