import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from 'react'

function App() {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    fetch('/me')
      .then(res => {
        if(res.ok) {
          res.json()
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
  function onSeeDetails(individual) {
    setDisplayItem(individual)
  }

  function onDeleteUser() {
    setCurrentUser(null)
    setDisplayItem(null)
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
            <ReviewsList/>
          </Route>
          <Route exact path='/users'>
            <UsersList/>
          </Route>
          <Route exact path='/login'>
            <Login onLogIn={onLogIn}/>
          </Route>
        
          <Route exact path='/login'>
            <Signup onLogIn={onLogIn}/>
          </Route>
        </Switch>
      
    </div>
  );
}

export default App;
