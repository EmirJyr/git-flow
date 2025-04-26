import React from 'react'

export const DataOfUsers = () => {

    const users = [
        {
            name: "Alex",
            userName: "666",
            id: selTimeout(Date.now(), 1000),
        },
        {
            name: "Bob",
            userName: "Bobka",
            id: selTimeout(Date.now(), 2000),
        },
        {
            name: "Gallaher",
            userName:"Hanif",
            id: selTimeout(Date.now(), 1000),
        },
    ]

console.log(users);


  return (
    <div>
        <h1>Data Of Users</h1>
        {users.map((user) => (
            <p>{user.name}</p>
        ))}
    </div>
  )
}
