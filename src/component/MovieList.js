import React from "react";
import MovieCard from "./MovieCard";

import { connect } from "react-redux";

const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movieList
        .filter(
          e =>
            e.rating >= props.newRate &&
            (e.title.toLowerCase()).includes(props.title.toLowerCase())
        )
        .map(el => (
          <MovieCard key={el.id} movie={el} />
        ))}
    </div>
  );
};
const mapStateToProps = state => ({
  movieList: state.movie,
  newRate: state.newrate,
  title: state.title
});
export default connect(mapStateToProps)(MovieList);
