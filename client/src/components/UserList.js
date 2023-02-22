import { useEffect, useState } from "react"
import UserDetail from "./UserDetail"

function UserList() {

    const [userList, setUserList] = useState([])

    useEffect(() => {
        fetch('/users')
            .then(response => response.json())
            .then(users => setUserList(users))
    }, [])

    return(
        <div>
            <h1>
               Reviewers
            </h1>
            <div className="container-fluid">
                <div className="row">
                    {userList.length > 0 ? userList.map(user => <UserDetail key={user.id} user={user}/>) : null}
                </div>
            </div>
        </div>
    )
}

export default UserList 