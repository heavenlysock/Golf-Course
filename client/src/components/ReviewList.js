import { useEffect, useState } from "react"
import ReviewDetail from "./ReviewDetail"
import React from 'react'



function ReviewList() {

    const [revList, setRevList] = useState([])

    useEffect(() => {
        fetch('/reviews')
            .then(res => res.json())
            .then(reviews => setRevList(reviews))
    }, [])



    return (
        <div>
          <h1>Reviews</h1>
          <div className="container-fluid">
            <div className="row">
              {Array.isArray(revList) && revList.map(review => (
                <ReviewDetail key={review.id} review={review} />
              ))}
            </div>
          </div>
        </div>
      );
    }
    
    export default ReviewList;