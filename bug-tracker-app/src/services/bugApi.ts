import axios from 'axios';

function getAll(){
    return axios.get('http://localhost:3000/bugs')
        .then((response: any) => response.data)
        
}

export default { getAll };