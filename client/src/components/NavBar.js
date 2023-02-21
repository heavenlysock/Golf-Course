import { NavLink, Link } from "react-router-dom";


function NavBar({ currentUser, onLogOut }) {

    function handleLogOut() {
        fetch('/logout', {
            method: 'DELETE'
        })
            .then(() => onLogOut())
    }
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-name" exact="true" to="/">
                    Review Now
                </Link>
                
                    <div className="navbar-nav">
                        <NavLink className="nav-link" to="/courses">Courses</NavLink>
                        <NavLink className="nav-link" to="/reviews">Reviews</NavLink>
                        { currentUser ? 
                            <>
                                <NavLink className="nav-link" to="/users">Reviewers</NavLink> 
                                <NavLink className="nav-link" to="/login" onClick={handleLogOut}>Log Out</NavLink>
                            </>
                            : 
                                <NavLink className="nav-link" to="/login">Log In / Register</NavLink>
                        }
                    </div>
                
                { currentUser ? <p class="navbar-text">Signed in as {currentUser.name}</p> : null }
            </div>
        </nav>
    )
}

export default NavBar
















//     return (
//         <nav className="navbar navbar-expand-lg bg-light">
//             <div className="container-fluid">
//                 <Link className="navbar-name" exact="true" to="/">
//                     *Review Now
//                 </Link>
//                     <div className="navbar-nav">
//                         <NavLink className="nav-link" to="/courses">Courses</NavLink>
//                         <NavLink className="nav-link" to="/reviews">Reviews</NavLink>
//                         { currentUser ? 
//                             <>
//                                 <NavLink className="nav-link" to="/users">Reviewers</NavLink> 
//                                 <NavLink className="nav-link" to="/login" onClick={handleLogOut}>Log Out</NavLink>
//                             </>
//                             : 
//                                 <NavLink className="nav-link" to="/login">Log In / Register</NavLink>
//                         }
//                     </div>
//                 { currentUser ? <p class="navbar-text">Signed in as {currentUser.name}</p> : null }
//             </div>
//         </nav>
//     )
// }

// export default NavBar;