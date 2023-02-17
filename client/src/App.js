import './App.css';
import {useEffect, useState} from 'react'
import CourseList from './components/CourseList';
import Course from './components/Course';
import Header from './components/Header';
import {Route, Switch} from 'react-router-dom';
import Review from './components/Review';
import React from 'react';
import {Routes} from 'react-router-dom';
import {DetailContainer} from './components/DetailContainer';
// import LoginForm from './components/LoginForm'
// import SignInForm from './components/SignInForm'
// import 'semantic-ui-css/semantic.min.css'
import NavBar from './components/NavBar'
import CourseRoutes from './components/CourseRoutes';

function App() {
  const [courses, setCourses] = useState([])
  const [reviews, setReviews] = useState([])
  const [users, setUsers] = useState([])
  const [coursePath, setCoursePath] = useState(0)
  

  useEffect(() => {
    fetch("/courses")
    .then(resp => resp.json())
    .then(setCourses)
  }, [])

    useEffect(() => {
        fetch('/reviews')
        .then(resp => resp.json())
        .then(setReviews)
    }, []);
    
      useEffect(() => {
        fetch("/me").then((r) => {
          if (r.ok) {
            r.json().then((user) => {
              console.log(user)
              setUsers(user);
            });
          }  else {
            setUsers(null)
          }
        });
      }, []);


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path = '/welcome-Page' element={<Header className='background-header' users={users}/>} />
        <Route exact path = '/home-page' element={<CourseList courses={courses} setCoursePath={setCoursePath}/>} />
        <Route path ="*" element = {<CourseRoutes courses={courses} reviews={reviews} users={users} coursePath={coursePath} setReviews={setReviews} setCourses={setCourses}/>} />
        <Route exact path = {`/courses/${coursePath}`} element={<DetailContainer reviews={reviews} courses={users} coursePath={coursePath}/>} />
      </Routes>
    </div>
  );
}

export default App;

























































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;






