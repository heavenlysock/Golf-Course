import React from 'react';
import Review from './Review';
import NewReviewForm from './NewReviewForm';

function DetailContainer({reviews, users, setReviews, setCourses}) {
    console.log(window.course.href)
    const coursePath = window.course.href.slice(32)
    const filteredReviews = reviews.filter(review => review.course_id === coursePath)
    const mappedReviews = filteredReviews.map(review => <Review setReviews={setReviews} setCourses={setCourses} review={review} user={review.user} key={review.id} />)
    return (
        <div>
            {mappedReviews}
            <NewReviewForm coursePath={coursePath} users={users} setReviews={setReviews}/>
        </div>
    );
}

export default DetailContainer;