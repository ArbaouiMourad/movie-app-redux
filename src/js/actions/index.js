import {
  SET_RATING_FILTER,
  ADD_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE,
  SET_TITLE_FILTER
} from "../constants";

export const actionFilterRating = (payload) => {
  return {
    type: SET_RATING_FILTER,
    payload:payload
  };
};

export const actionFilterTitle = payload => {
  return {
    type: SET_TITLE_FILTER,
    payload
  };
};
export const actionAdd = payload => {
  return {
    type: ADD_MOVIE,
    payload
  };
};
export const actionEdit = id => {
  return {
    type: EDIT_MOVIE,
    payload:id
  };
};

export const actionDelete = payload => {
  return {
    type: DELETE_MOVIE,
    payload
  };
};
