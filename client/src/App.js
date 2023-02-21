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
  function onShowInfo()


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
