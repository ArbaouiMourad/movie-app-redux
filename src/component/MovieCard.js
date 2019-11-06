import React from 'react'
import Rating from './Rating'
import { connect } from "react-redux";
import { actionDelete,actionEdit} from "../js/actions/index";
import { Link} from 'react-router-dom'
const MovieCard = (props) => {
    const {
        title = '',
        year = '',
        image = 'https://www.mearto.com/assets/no-image-83a2b680abc7af87cfff7777d0756fadb9f9aecd5ebda5d34f8139668e0fc842.png',
        rating = 0
    } = props.movie
    console.log(props.movie)
    return (
        <div className="movie-card">
      
        <div className="movie-rating"><Rating count={rating} /></div>
        <img className="movie-image" alt="" src={image}/>
       <div className="movie-description">{title} - {year} </div>
       <button onClick={()=>props.deleteMovie(props.movie.id)}> deleteMovie </button>
       <button onClick={()=>props.editMovie({
         id:props.movie.id,
         title:props.movie.title=prompt("Movie title", props.movie.title),
         rating: props.movie.rating=prompt("Movie rating", props.movie.rating),
         image: props.movie.image=prompt("Movie image", props.movie.image)})}>Edit</button>
         <Link to={`/newpage/${props.movie.id}`}><button>Movie Description </button> </Link>
        
     </div>
    )
}
const mapDispatchToProps = dispatch => ({
    deleteMovie: x => dispatch(actionDelete(x)),
    editMovie: x => dispatch(actionEdit(x))

  });
export default connect(null, mapDispatchToProps)(MovieCard)
