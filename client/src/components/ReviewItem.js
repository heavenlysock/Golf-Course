import { NavLink } from 'react-router-dom'
import { useState } from 'react';
// import ReviewList from '/components/ReviewList'

function ReviewItem({ review, isAuthenticated, onDeleteReview, currentUser }) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
    pros: review.pros,
    cons: review.cons
    });


    const handleEditClick = () => {
        setIsEditing(true);
    }
    
    const handleCancelClick = () => {
        setIsEditing(false);
        setFormData({
            pros: review.pros,
            cons: review.cons
        });
    }
    
    const handleFormChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }
    
    const handleUpdateClick = () => {
        fetch(`/reviews/${review.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            setIsEditing(false);
        })
        .catch(error => console.error(error));
    }
    
    const handleDeleteClick = () => {
        fetch(`/reviews/${review.id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            onDeleteReview(review.id);
        })
        .catch(error => console.error(error));
    }
    
    return(
        <div className="card-deck col-sm-3 my-3">
            <div class="card text-card">
                <h4 className='card-title my-3'>Course and Location:</h4>
                {review && review.course && (
                    <NavLink to={`/courses/${review.course.id}`}>
                        <p>{review.course.name}</p>
                        <p>{review.course.location}</p>
                    </NavLink>
                )}
                {review && review.user && (
                    <NavLink to={`/users/${review.user.id}`}>
                        <p>Review:</p>
                        {isEditing ? (
                            <div>
                                <label>Pros:</label>
                                <textarea name="pros" value={formData.pros} onChange={handleFormChange}/>
                                <label>Cons:</label>
                                <textarea name="cons" value={formData.cons} onChange={handleFormChange}/>
                            </div>
                        ) : (
                            <div>
                                {review.pros && <p>Pros: {review.pros}</p>}
                                {review.cons && <p>Cons: {review.cons}</p>}
                            </div>
                        )}
                        <p>by {review.user.name}</p>
                    </NavLink>
                )}
                {isAuthenticated && review && review.user && review.user.id === currentUser.id ?
                    <div className="d-flex justify-content-around">
                        {isEditing ? (
                            <div>
                                <button className="btn btn-sm btn-success" onClick={handleUpdateClick}>
                                    Save
                                </button>
                                <button className="btn btn-sm btn-secondary" onClick={handleCancelClick}>
                                    Cancel
                                </button>
                            </div>
                        ) : (
                            <div>
                                <button className="btn btn-sm btn-warning" onClick={handleEditClick}>
                                    Edit
                                </button>
                                <button className="btn btn-sm btn-danger" onClick={handleDeleteClick}>
                                    Delete
                                </button>
                            </div>
                        )}
                    </div> :
                    null
                }
            </div>
        </div>
    )
}

export default ReviewItem