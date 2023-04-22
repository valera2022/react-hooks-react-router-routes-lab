import React from "react";
import { actors } from "../data";
import { v4 as uuidv4 } from 'uuid'
//his component should render the text `Actors Page` in an `<h1>`, and make a new
// `<div>` for each actor. The `<div>` should contain the actor's name and a `<ul>`
// with a list of their movies.
// shouldnt it render name anyhow before I add the <li>?
// you too

function Actors() {
  return( <div> 
    <div><h1>Actors Page</h1></div>
    <div>{actors.map((act)=> <div key={uuidv4()}>{act.name}
    
    
    <ul><li>{"movies :"+act.movies}</li></ul>
    
    </div>
   
    )}</div>
</div> 
  )
}

export default Actors;
