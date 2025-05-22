import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section id="signin">
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <label className='form-label' htmlFor='email'>Email</label>
          <input className='form-input' id='email' type='email' placeholder="Your Email"/>
        </div>
        <div className="form-group">
          <label className='form-label' htmlFor='password'>Password</label>
          <input className='form-input' id='password' type='password' placeholder="Your Password"/>
        </div>
        <div className="form-group">
          <button type="submit" class="btn btn-submit">Log In</button>
        </div>
        <div className="form-footer">
          <span>Don't have an account?</span>
          <Link to='/signup'>Sign Up</Link>
        </div>
      </form>
    </section>
  )
}

export default Login