import { Button } from "@mui/material"
import { useState } from "react"
import { Navigate } from "react-router-dom";

export default function BramhinRegister(){
    const[bramhinData,setBramhinData]=useState({
        name:"",
        location:"",
        contact:"",
        email:"",
        whatsapp:"",
        password:"",
        confirmpassword:"",
        puja:"",
        style:""
    });

    const HandleChange=(e)=>{
        const {name,value}=e.target;
        setBramhinData({
            ...bramhinData,
                [name]:value,
        })
    }

    const HandleSubmit=(e)=>{
        // console.log(bramhinData);
        e.preventDefault();
        fetch('http://localhost:3003/api/data',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                // Add any other headers as needed
              },
            //   body: JSON.stringify(bramhinData),
            body:JSON.stringify(bramhinData),
            })
            .then(res=>res.json())
            .then((result)=>{
                if(result.status === 200){
                    Navigate('/login');
                }
      
        })
    }
   
    return(
        <div>
            <div>
                <form onSubmit={HandleSubmit}>
                    <input type="text" name="name" placeholder="Enter your name..." value={bramhinData.name} onChange={HandleChange}/><br/>
                    <input type="text" name="location" placeholder="Enter your location..." value={bramhinData.location} onChange={HandleChange}/><br/>
                    <input type="text" name="contact" placeholder="Enter your contact..." value={bramhinData.contact} onChange={HandleChange}/><br/>
                    <input type="text" name="email" placeholder="Enter your Email..." value={bramhinData.email} onChange={HandleChange}/><br/>
                    <input type="text" name="whatsapp" placeholder="Enter your whatsapp..." value={bramhinData.whatsapp} onChange={HandleChange}/><br/>
                    <input type="text" name="password" placeholder="Enter your password..." value={bramhinData.password} onChange={HandleChange}/><br/>
                    <input type="text" name="confirmpassword" placeholder="Enter your confirmpassword..." value={bramhinData.confirmpassword} onChange={HandleChange}/><br/>
                    <input type="text" name="puja" placeholder="Enter your knowing pujas..." value={bramhinData.puja} onChange={HandleChange} /><br/>
                    <input type="text" name="style" placeholder="Enter your puja style..." value={bramhinData.style} onChange={HandleChange}/><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}