import './App.css';
import { useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom'
import Main from './components/Main';
import Login from './components/Login';
import Signup from './components/Signup';
import UserDetail from './components/UserDetail';
import CourseDetail from './components/CourseDetail';
import CourseList from './components/CourseList';
import ReviewList from './components/ReviewList';
import UserList from './components/UserList';
import NavBar from './components/NavBar';


function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [displayInfo, setDisplayInfo] = useState(null)

  


  useEffect(() => {
    fetch('/me')
      .then(response => {
        if(response.ok) {
          response.json()
          .then((user) => setCurrentUser(user))
        }
      })

  }, [])


  function onLogIn(loggedInUser) {
    setCurrentUser(loggedInUser)

  }

  function onLogOut(){
    setCurrentUser(null)
  }

  function onShowDetails(individual) {
    setDisplayInfo(individual)
  }

  function onDeleteUser() {
    setCurrentUser(null)
    setDisplayInfo(null)
  }


  return (
    <div className="App">
      <NavBar
        currentUser={currentUser}
        onLogOut={onLogOut}
        />
        <Switch>
          <Route exact path='/'>
            <Main currentUser={currentUser}/>
          </Route>
          <Route exact path='/reviews'>
            <ReviewList/>
          </Route>
          <Route exact path='/users'>
            <UserList/>
          </Route>
          <Route exact path='/courses'>
            <CourseList/>
          </Route>
          <Route exact path='/courses/:id'>
            <UserDetail onShowDetails={onShowDetails} displayInfo={displayInfo} currentUser={currentUser}/>
          </Route>
          <Route exact path='/users/:id'>
            <CourseDetail onShowDetails={onShowDetails} displayInfo={displayInfo} currentUser={currentUser} onDeleteUser={onDeleteUser}/>
          </Route>
          <Route exact path='/login'>
            <Login onLogIn={onLogIn}/>
          </Route>
          <Route exact path='/signup'>
            <Signup onLogIn={onLogIn}/>
          </Route>
        </Switch>
      
    </div>
  );
}

export default App;
