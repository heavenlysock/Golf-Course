import React from 'react';

function User({user, review}) {
    console.log(review)
    const url = window.course.href
   const split = url.split("/")
    const finalSplit = split.at(-1)
    return (
        <div>
            {parseInt(finalSplit) === review.course_id ? 
            <><div>{review.user === user.id ? user.name : null}</div> <div>{review.user.id === user.id ? user.recommendation : null}</div> <div>{review.user.id === user.id ? user.pros : null}</div><div>{review.user.id === user.id ? user.cons : null}</div><div>{review.user.id === user.id ? user.rating : null}</div></> 
            : null}
        </div>
    );
}

export default User;