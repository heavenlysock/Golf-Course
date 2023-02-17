import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Card } from 'semantic-ui-react';

function GolfCourse({id, price, course, name, setCoursePath, length, image_url, par}){
    const navigate = useNavigate();

    const handleClick = () => {
        setCoursePath(id);
        navigate(`/courses/${id}`);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            handleClick();
        }
    }

    return (
        <div onClick={() => handleClick()} onKeyDown={(e) => handleKeyDown(e)} tabIndex="0" role="button">
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Card.Header>{name}</Card.Header>
                        {/* <Card.Description>{price}</Card.Description>
                        <Card.Description>{length}</Card.Description>
                        <Card.Description>{par}</Card.Description>
                        <Card.Description>{price}</Card.Description> */}

                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    );
}

export default GolfCourse;