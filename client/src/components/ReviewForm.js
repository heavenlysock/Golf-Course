import { useState } from 'react'

function ReviewForm({ currentUser, displayItem, onSubmitNewReview }) {

    const [courseRating, setCourseRating] = useState("")
    const [prosComment, setProsComment] = useState("")
    const [consComment, setConsComment] = useState("")
    const [recommendBool, setRecommendBool] = useState("")


    function handleSubmit(e) {
        e.preventDefault()
        let reviewInput = {
            course_rating: courseRating,
            pros_comment: prosComment,
            cons_comment: consComment,
            recommendBool: recommendBool,
            user_id: currentUser.id,
            // course_id: displayInfo.id
        }
        fetch('/reviews', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(reviewInput)
        })
            .then(res => {
                if(res.ok) {
                    res.json()
                    .then(newReview => onSubmitNewReview(newReview))
                }
                alert('Review successfully added!')
            })
        setCourseRating("")
        setProsComment("")
        setConsComment("")
        setRecommendBool("")
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <datalist id="tickmarks">
                    <option value="0" label="0"></option>
                    <option value="1" label="1"></option>
                    <option value="2" label="2"></option>
                    <option value="3" label="3"></option>
                    <option value="4" label="4"></option>
                    <option value="5" label="5"></option>
                    <option value="6" label="6"></option>
                    <option value="7" label="7"></option>
                    <option value="8" label="8"></option>
                    <option value="9" label="9"></option>
                    <option value="10" label="10"></option>
                </datalist>
                <div className='form-group row mx-5 my-2'>
                    <label className='col-sm-2 col-form-label' htmlFor="courseRating">Course Rating</label>
                    <div className='col-sm-2'>
                        <input  
                            type="range" 
                            min="0"
                            max="10"
                            step="0.5"
                            list="tickmarks"
                            name="courseRating" 
                            value={courseRating}
                            onChange={e => setCourseRating(e.target.value)}
                        />
                    </div>
                    <label className='col-sm-2 col-form-label' htmlFor="prosComment">Pros</label>
                    <div className='col-sm-6'>
                        <input
                            className='form-control'
                            type="text" 
                            name="prosComment" 
                            value={prosComment}
                            onChange={e => setProsComment(e.target.value)}
                        />
                    </div>
                </div>
                <br/>
                <div className='form-group row mx-5 my-2'>
                    <label className='col-sm-2 col-form-label' htmlFor="consComment">Cons</label>
                    <div className='col-sm-6'>
                        <input
                            className='form-control'
                            type="text" 
                            name="consComment" 
                            value={consComment}
                            onChange={e => setConsComment(e.target.value)}
                        />
                    </div>
                </div>
                <br/>
                <div className='form-group row mx-5 my-2'>
                    <label className='col-sm-2 col-form-label' htmlFor="recommendBool">Recommendation</label>
                    <div className='col-sm-6'>
                        <input
                            className='form-control'
                            type="checkbox" 
                            name="recommendBool" 
                            value={recommendBool}
                            onChange={e => setRecommendBool(e.target.checked)}
                        />
                    </div>
                </div>
                <br/>
                <button className='btn btn-secondary' type="submit">Add Review</button>
            </form>
        </div>
    )
}

export default ReviewForm