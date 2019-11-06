import React from 'react'
import { connect } from "react-redux";
import { } from "../js/actions/index";
import {Link} from 'react-router-dom'
import Rating from "./Rating"
const MovieDescription = (props) => {
    const movie=props.movie.find(el=> el.id===Number(props.id))
    return (
        <div className="movie-card">
      
        <div className="movie-rating"><Rating count={movie.rating} /></div>
        <img className="movie-image" alt="" src={movie.image}/>
       <div className="movie-description">{movie.title} - {movie.year} </div>
    
         <Link to='/'>Retour</Link>
        
     </div>
    )
}


const MapStateToProps = state => ({movie:state.movie})
   export default connect(MapStateToProps)(MovieDescription);
