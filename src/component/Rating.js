import React from 'react'

const Rating = (props) => {
 let starsHtml = []
    for(let i = 0; i < 5; i++) {
        if(i < props.count) {
            starsHtml.push(<span  onClick={() => props.onChangeRating(i+1)} key={i}>★</span>)
        }
        else {
            starsHtml.push(<span  onClick={() =>props.onChangeRating(i+1)} key={i}>☆</span>)
        }
    }


    return (
        <div>
           {starsHtml}
        </div>
    )
}

export default Rating
