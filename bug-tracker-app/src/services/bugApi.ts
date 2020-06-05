import axios from 'axios';

const serviceEndPoint = 'http://localhost:3000/bugs';
function getAll(){
    return axios.get(serviceEndPoint)
        .then((response: any) => response.data)
        
}

function save(bugData : any){
    if (bugData.id === 0){
        return axios.post(serviceEndPoint, bugData)
            .then(response => response.data);
    } else {
        return axios.put(`${serviceEndPoint}/${bugData.id}`, bugData)
            .then(response => response.data);
    }
}

function remove(bugData : any){
    return axios.delete(`${serviceEndPoint}/${bugData.id}`)
        .then(response => response.data);
}

export default { getAll, save, remove };