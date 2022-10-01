import React, { useState } from 'react'
import PropsChild from './PropsChild'

const PropsParent = () => {
    let Array = [{
        name: "Abhi",
        age: 23,
        city: "Sangli"
    },
    {
        name: "Damodhar",
        age: 23,
        city: "Buldhana"
    }
    ]

    let [userArray, setUserArray] = useState([...Array]);
    let [newUser, setNewUser] = useState({});

    let onChangeHandle = (e) => {
        setNewUser({ ...newUser, [e.target.id]: e.target.value })
    }

    let AddNewUser = () => {
        setUserArray([...userArray, newUser]);
    }

    return (
        <div className='container'>
            <div>
                <label htmlFor="">Name :</label> <br />
                <input type="text" id='name' onChange={onChangeHandle} /> <br />

                <label htmlFor="">age :</label> <br />
                <input type="number" id='age' onChange={onChangeHandle} /> <br />

                <label htmlFor="">city :</label> <br />
                <input type="text" id='city' onChange={onChangeHandle} /> <br />

                <button onClick={AddNewUser} className='btn btn-warning m-4'>Add new user</button>
            </div>

            <div className="carCompo">
                {
                    userArray.map((user) => {
                        return <div key={user.name} className="card m-3" style={{ width: "18rem" }}>
                            <PropsChild User={user} />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default PropsParent