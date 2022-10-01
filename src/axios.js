import axios from 'axios';

const instance=axios.create({
    baseURL:'https://api.hunter.io/v2/'
})

export default instance