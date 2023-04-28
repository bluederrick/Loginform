import React from 'react'
import './Login.css'
const Login = () => {
    return (
        <>
            <div className='mainLogin'>
               
                <div className="formContainer">
                    <form className='RegForm'>
                        <h1 className='title'>Login</h1>
                        <label htmlFor="name">Email</label>
                        <input type="email" name="" id="" required />
                        <label htmlFor="name">password</label>
                        <input type="password" name="" aria-required />
                        <button className='fgt-pswd' >  Forgot Password?</button>
                        <button className='btn'> Submit</button>

                        <section>
                            <p>Don't have an account?<span className='sign'>Sign Up!</span></p>
                        </section>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login