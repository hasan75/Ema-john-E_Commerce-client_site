import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  return (
    <div className='register-form'>
      <div>
        <h2>Create Account</h2>
        <form onSubmit=''>
          <input type='email' name='' id='' placeholder='your email' />
          <br />
          <input type='password' name='' id='' placeholder='enter password' />
          <br />
          <input
            type='password'
            name=''
            id=''
            placeholder='Re-enter password'
          />
          <br />
          <input type='submit' value='Register' />
        </form>
        <br />
        <p>
          Already have an Account? <Link to='/login'>Login</Link>
        </p>
        <div>----------or-----------</div>
        <button className='btn-regular'>Google Sign In</button>
      </div>
    </div>
  );
};

export default Register;
