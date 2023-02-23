import { Link } from 'react-router-dom'
import React from 'react'

function ReviewDetail({ review }) {
    return(
        <div className="card-deck col-sm-3 my-3">
            <div class="card text-card">
                <h4 className='card-title my-3'>fdfd</h4>
                <Link to={`/courses/${review.course.id}`}>
                    <p>{review.course.name} {review.course.location}</p>
                </Link>
                <Link to={`/users/${review.user.id}`}>
                    <p>By {review.user.name}</p>
                </Link>
                    <p className='card-body'>{review.recommendation}</p>
            </div>
        </div>
    )
}

export default ReviewDetail;