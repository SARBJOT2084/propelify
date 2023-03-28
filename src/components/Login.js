import React from 'react'
import './Login.css';
const Login = () => {
  return (
    <div>
        <div className="main">
            <div className="left">
            </div>
            <div className="right">
                <div className="signup-box">
                <div className="login-content">
                    <p className="heading">Login</p>
                    <input type="text" placeholder='Enter your Email/Phone No.' className="phone-email-input"/>
                    <button className="button">
                        Login
                    </button>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <p style={{marginRight:'auto'}}>Forgot Password</p>
                        <p style={{marginLeft:'auto'}}>Forgot Username</p>
                    </div>
                    <hr></hr>
                    <p>Hello</p>
                </div>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Login