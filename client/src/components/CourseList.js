import React from 'react';
import Location from './Course'
import { Card } from 'semantic-ui-react';

function CourseList({courses, setCoursePath}) {
    const mappedCourses = courses.map((course) => {return <Location key={course.id} {...course} setCoursePath={setCoursePath}/>
    })
    return(
        <div className='body'>
            {mappedCourses}
        </div>
    );
};

export default CourseList;