import React from "react";
import { movies } from "../data";
import { v4 as uuidv4 } from 'uuid';

// //This component should render the text `Movies Page` in an `<h1>`, and make a new
// `<div>` for each movie. The `<div>` should contain the movie's title, time and a
// `<ul>` with a list of its genres, each within their own `<li>`.
let datas =  movies

function Movies(data) { 
  return ( <div>
    <div><h1>Movies Page</h1></div>
    <div>{datas.map((movie)=> <div key={uuidv4()}>{movie.title}

      ---{"at :"+movie.time},<ul><li>{"genres :"+movie.genres}</li></ul>
    </div>)}</div>
    
        </div>
    

    )
 
}

export default Movies;

// // , <ul>
// {movie.genres.map((each)=>{
//   return <li>{each}</li>
// })}</ul>