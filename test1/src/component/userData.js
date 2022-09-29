let User=[{
    name:"Abhi",
    phone:"9879898"
}
,
{
    name:"Damu",
    phone:"533453463"
}
]

let sendData=()=>{
return User;
}

let updateData=(u)=>{
    User.push(u)
}

export {sendData,updateData};