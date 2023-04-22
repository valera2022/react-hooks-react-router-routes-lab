import React from "react";
import { directors } from "../data";
import { v4 as uuidv4 } from 'uuid';

//This component should render the text `Directors Page` in an `<h1>`, and make a
// new `<div>` for each director. The `<div>` should contain the director's name
// and a `<ul>` with a list of their movies.
// let directores = directors.map((data)=>{
//   <div>{data.name}</div>})

//   console.log(directores)
console.log(directors)

function Directors() {
  return (<div> 
    <div><h1>Directors Page</h1></div>
    <div>{directors.map((dic)=> <div key={uuidv4()}>{dic.name}
    
    
    <ul><li>{"movies :"+dic.movies}</li></ul>
    
    </div>
   
    )}</div>
</div> 
        
  )
}

export default Directors;
