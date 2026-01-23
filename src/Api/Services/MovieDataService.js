import axios from "axios";
//una classe che rappresenta 
 class MovieDataService{
    getAll(page=0){
       return axios.get('https://localhost:5000/api/v1/Movies')
    }
}
export default new MovieDataService();