import React from 'react'
import './Register.css'

const Register = () => {
    return (
        <>
            <div className='main'>
                <img src="/asset/mobile-login-concept-illustration_114360-83.avif" alt="" srcset="" height='300px' />
                <div className="formContainer">
                    <form className='RegForm'>
                        <h1 className='title'>Register Online</h1>
                        <label htmlFor="name" aria-label='this field is required'>Fisrtname *</label>
                        <input type="text" required />
                        <label htmlFor="name">Lastname</label>
                        <input type="text" required />
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

            <footer className='footer'>

                <h1 className='footerTitle'>BLUETECH DEVELOER</h1>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque odio quibusdam consequuntur facere nostrum voluptate neque at nobis modi corporis.</span>

            </footer>
        </>

    )
}

export default Register