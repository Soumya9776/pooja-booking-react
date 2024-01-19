import "./Register.css"
export default function Register(){
    const HandleSubmit=()=>{
        navigate('/login');
    }
    return(
        <div>
            <div>
                <h1>Register your form</h1>
                <form onSubmit={HandleSubmit} className="register">
                    <label htmlFor="name">Name:</label><input type="text" id="name"/><br/>
                    <label htmlFor="email">Email:</label><input type="email" id="email"/><br/>
                    <label htmlFor="phone">Phone:</label><input type="tel" id="phone"/><br/>
                    <label htmlFor="dob">D.O.B:</label><input type="date" id="dob"/><br/>
                    <label htmlFor="male">Gender: Male</label><input type="radio" id="male"/>
                    <label htmlFor="female">FeMale</label><input type="radio" id="female"/>
                    <label htmlFor="other">Others</label><input type="radio" id="other"/>
                           <br/>
                    <label htmlFor="password">Password:</label><input type="password" id="password"/><br/>
                    <label htmlFor="conPassword">Confirm-Password:</label><input type="password" id="conPassword"/><br/>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}