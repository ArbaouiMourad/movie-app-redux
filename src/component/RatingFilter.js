import React from 'react'
import Rating from './Rating'
import { connect } from "react-redux";
import { actionFilterRating} from "../js/actions/index";

const RatingFilter = (props) => {
    return (
        <div className="rating-filter">
      <span className="rating-filter-text">Minimum rating</span>
      <Rating 
      count={props.count}
      onChangeRating={(newRating) =>{
         props.RatingFilter(newRating)
        }} />
    </div> 
    )
}
const mapDispatchToProps = dispatch => ({
 RatingFilter: x => dispatch(actionFilterRating(x))
});

const mapStateToProps = state => ({
  count: state.newrate
});

export default connect(
  mapStateToProps ,
    mapDispatchToProps
  )(RatingFilter);