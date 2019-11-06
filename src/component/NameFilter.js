import React from 'react';
import { connect } from "react-redux";
import { actionFilterTitle} from "../js/actions/index";

const NameFilter = (props) => (
    <div className="name-filter">
        <input className="name-filter-text" type="text"   onChange={(event) => {
                props.Ratingtitle(event.target.value)
            }}/>
      </div>
)



const mapDispatchToProps = dispatch => ({
    Ratingtitle: x => dispatch(actionFilterTitle(x))
   });
   
   const mapStateToProps = state => ({
     filerT: state.title
   });
   
   export default connect(
       mapStateToProps,
       mapDispatchToProps
     )(NameFilter);

