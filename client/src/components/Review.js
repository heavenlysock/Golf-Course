import React from 'react';
import { useState } from 'react';
import NewReviewForm from './NewReviewForm';


function Review({user, review, id, setReviews, setCourses}) {
    const [editReview, setEditReview] = useState({
        text: ""
    })
    const [showForm, setShowForm] = useState(false)


    const handleChange = (e) => {
        setEditReview({ ...editReview, [e.target.name]: e.target.value });
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        // take data to submit
            fetch(`/reviews/${review.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(editReview)
            })
            .then(resp => resp.json())
            .then(review => {
              setReviews(current => {
                const finalEdit = current.findIndex(element => element.id === review.id)
                return [...current.slice(0, finalEdit), review, ...current.slice(finalEdit + 1)]
            })
            setShowForm((current) => !current)
          })
          
      };

      const handleDelete = () => {
        fetch(`/reviews/${review.id}`, {
            method: "DELETE",
      })
      .then(resp => resp.json())
      .then(review => setReviews(current => {
        const finalEdit = current.findIndex(element => element.id === review.id)
        return [...current.slice(0, finalEdit), ...current.slice(finalEdit + 1)]
      }))
      };

    return (
      <div>
        <div>
          {showForm ? (
            <form onSubmit={handleSubmit}>
              <input type="text" name="text" value={editReview.text} onChange={handleChange}/>
              <input type='submit' value='submit'/>
            </form>
          ) : (
            <>
              {user?.name}
              {review.text}
              {review.rating}

            </>
          )}
        </div>
        <button onClick={() => setShowForm((current) => !current)}>✏️</button>
        <button onClick={() => handleDelete()}>🗑</button>
        
      </div>
    );
}

export default Review;