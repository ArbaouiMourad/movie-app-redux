import {
  SET_RATING_FILTER,
  ADD_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE,
  SET_TITLE_FILTER
} from "../constants";

const initialState = {
  movie: [
    {
      id: 1,
      title: "Inception",
      rating: 5,
      image: "https://i.ytimg.com/vi/E1iqGiX0lSg/movieposter.jpg",
      year: 2010
    },
    {
      id: 2,
      title: "iat",
      rating: 4,
      image: "https://i.ytimg.com/vi/E1iqGiX0lSg/movieposter.jpg",
      year: 2010
    } ,
    {
      id: 3,
      title: "beirut",
      rating: 3,
      image: "https://i.ytimg.com/vi/E1iqGiX0lSg/movieposter.jpg",
      year: 2010
    }
  
  ],
  newrate:0,
  title:""

};

const movies = (state = initialState, action) => {
  if (action.type === ADD_MOVIE) {
    return { ...state, movie: state.movie.concat(action.payload) };
  }
  if (action.type === EDIT_MOVIE) {
    return {
      ...state,
      movie: state.movie.map(el =>
        el.id === action.payload.id ? { ...action.payload } :el
      ) 
    };
  }
  if (action.type === DELETE_MOVIE) {
    return { ...state, movie: state.movie.filter(el => el.id !== action.payload) };
  }
  if (action.type === SET_RATING_FILTER) {
    return {
      ...state,
      newrate:action.payload
    };
  }
  if (action.type === SET_TITLE_FILTER) {
    return {
      ...state,
      title:action.payload
    };
  }
  return state;
};

export default movies;
