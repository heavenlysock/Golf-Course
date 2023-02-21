import { useEffect, useState } from "react"
import ReviewDetail from "./ReviewDetail"




function ReviewList() {

    const [reviewList, setReviewList] = useState([])

    useEffect(() => {
        fetch('/reviews')
            .then(res => res.json())
            .then(reviews => setReviewList(reviews))
    }, [])



    return(
        <div>
            <h1>
               Reviews
            </h1>
            <div className="container-fluid">
                <div className="row">
                    {reviewList.map(review => <ReviewDetail key={review.id} review={review}/>)}
                </div>
            </div>
        </div>
    )
}

export default ReviewList 