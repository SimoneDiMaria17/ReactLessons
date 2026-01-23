import { useEffect, useState } from "react"
import MovieDataService from "../Services/MovieDataService"

export default function MovieList(props){
    const [films,setFilm]= useState([]);

        useEffect(()=>{
            GetMovies();
        },[]);
    async function GetMovies(){
        MovieDataService.getAll().then(response=>{
            console.log(response.data)
            setFilm(response.data);
        });
    }

    return(<ol>
        {films.map((film)=>(
            <li key={film.id}>{film.title}</li>
        ))}
    </ol>)
}
