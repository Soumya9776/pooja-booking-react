import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();
    const[loginData,setLoginData]=useState({
        "email":"",
        "password":""
    })
    const HandleChange=(e)=>{
        const{name,value}=e.target;
        setLoginData({
            ...loginData,
            [name]:value,
        })
        
    }
    const HandleClick=(e)=>{
        console.log(loginData);
        e.preventDefault();
        fetch("http://localhost:3004/login",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                // Add any other headers as needed
              },
              body:JSON.stringify(loginData),
        })
        .then(res=>res.json())
        .then((result)=>{
            if(result.status === 200){
                navigate('/Body');
            }
        })
    }
    return(
        <div>
            <div>Login</div>
            <div>hello</div>
            <form>
                <label htmlFor="email">User Name:</label><input type="text" name="email" id="email" placeholder="Enter your email.." value={loginData.email} onChange={HandleChange}/><br/>
                <label htmlFor="password">Password:</label><input type="text" name="password" id="password" placeholder="Enter your password.." value={loginData.password} onChange={HandleChange}/><br/>
                <button onClick={HandleClick}>Login</button>
            </form>
        </div>
    )
}