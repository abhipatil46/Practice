import React, { useState } from 'react'
import { sendData, updateData } from './userData'

const Data = () => {

    let [data,setData]=useState([...sendData()]);

    let [newData,setNewData] = useState({});

let onChangeHandle=(e)=>{
    setNewData({...newData,[e.target.id]:e.target.value});
}   

    let AddNewUser=()=>{
    setData([...data,newData]);
    }

    let show = () => {
        console.log(data);
        console.log("New Data");
    }


    return (
        <div className='container'>
            <div>
                <label htmlFor="">Name :</label> <br />
                <input type="text" id='name' onChange={onChangeHandle} /> <br />

                <label htmlFor="">phone :</label> <br />
                <input type="phone" id='phone' onChange={onChangeHandle} /> <br />

                <button onClick={AddNewUser} className='btn btn-warning m-4'>Add new user</button>
            </div>

            <div className="carCompo m-5">
            {

                data.map((user)=>{
                    return  <div key={user.name} className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{user.phone}</h6> 
                    </div>
                </div>
                })

            }
                
            </div>

            <button className='btn btn-danger' onClick={show}>Show</button>
        </div>
    )
}

export default Data