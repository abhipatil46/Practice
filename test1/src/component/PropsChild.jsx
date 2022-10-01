import React from 'react'

const PropsChild = (props) => {
    let singleUser = props.User;
    return (
        <div className="card-body">
            <h5 className="card-title">Name : {singleUser.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Age : {singleUser.age}</h6>
            <h6 className="card-subtitle mb-2 text-muted">City : {singleUser.city}</h6>
        </div>
    )
}

export default PropsChild