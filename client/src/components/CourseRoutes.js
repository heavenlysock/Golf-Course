import React from 'react';
import { Routes } from 'react-router-dom';
import DetailContainer from './DetailContainer';

function CourseRoutes({courses, reviews, users, coursePath, setReviews, setCourse}){
    const mappedRoutes = courses.map(location => <Route exact path = {`/courses/${golfcourse.id}`} element={<DetailContainer setReviews={setReviews} setCourses={setCourses} reviews={reviews} users={users} courses={courses} coursePath={coursePath} key={`Route-${courses.id}`}/>} />)
    return (
        <Routes>
            {mappedRoutes}
        </Routes>
    );
}

export default CourseRoutes;