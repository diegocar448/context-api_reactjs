import axios from 'axios';


//aqui apontando para url da nossa api
export default axios.create({
  baseURL: 'http://localhost:3333',
});