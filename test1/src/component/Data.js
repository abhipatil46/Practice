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
        <div className='container m-5'>
            <div>
                <label htmlFor="">Name :</label> <br />
                <input type="text" id='name' onChange={onChangeHandle} /> <br />

                <label htmlFor="">phone :</label> <br />
                <input type="phone" id='phone' onChange={onChangeHandle} /> <br />

                <button onClick={AddNewUser} className='btn btn-warning m-4'>Add new user</button>
            </div>

            <div className="carCompo">
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
        </div>
    )
}

export default Data