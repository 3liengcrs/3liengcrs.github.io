import {React, useEffect, useState} from 'react'
import "./Add.css"
import axios from 'axios';
import ResultCard from './ResultCard'

const Add = () => {
    const [movies , setMovies] = useState([])
    const [ searchValue, setSearchValue] = useState("");
    useEffect(()=>{
        axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=b2da7990`)
        .then(response =>{
         if (response.data.Search){
          setMovies(response.data.Search)
         }
        }).catch(error => console.log(error))
      } , [searchValue])
    
  return (
            <div className='add-content'>
                <div className='input-content'>
                    <input type="text" placeholder='Search for a movie' value={searchValue}
             onChange={(e)=> setSearchValue(e.target.value)}/>
             {
             movies.length > 0 && (<ul className='results'>
               {movies.map((movie)=>
                <li key={movie.imdbID}>{<ResultCard movie={movie}/>}</li>)}
             </ul>)
            }

                </div>
            </div>
  )
}


export default Add