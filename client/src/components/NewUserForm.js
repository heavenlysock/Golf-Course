import React from 'react';
import { useState } from 'react';

//something random to test

function NewUserForm(){
    
    const initialFormValues ={
        name: '',
        // description: ''
    }
    const [newUser, setNewUser] = useState(initialFormValues)

    const handleChange = event => {
        const {name, value} = event.target
        setNewUser({...newUser, [name]:value})
    }

    const handleSubmit=event => {
        event.preventDefault()
        // const newUser ={
        //     name: formData.name,
        //     description: formData.description
        // }
    

    fetch("/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
        .then(res => {
            if (res.status === 201){
            res.json()
            .then(newser =>{
                console.log(newser)
                setNewUser(initialFormValues)
            })
        }else {
            res.json()
            .then(error =>{
                alert(error)
            })
        }

        })
       
}
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name ="name" onChange={handleChange} value = {newUser.name} placeholder="Name"/>
                <input type="text" name ="description" onChange={handleChange} value = {newUser.description} placeholder="Description"/>
                <input type="submit" value="Create User" />
            </form>
        </div>
    );
}

export default NewUserForm;