import React from 'react'

const Login = () => {
  return (
    <>
       <div className='vh-100'>
        <p className='text-center m-0 fs-1'>Login</p>
      <form action="" className='mt-5 w-100 border m-auto p-4 bg-dark text-light rounded'>
        <div className='d-flex flex-column justify-content-center gap-3'>
          <label htmlFor="">
            Email: <br />
            <input type="email" className='w-100' placeholder='Enter your Email...' />
          </label>
          <label htmlFor="">
            Password: <br />
            <input type="password" className='w-100' placeholder='Enter your Password...' />
          </label>
          <button className='btn btn-light text-dark'>Sign in</button>
        </div>
      </form>
      </div>
    </>
  )
}

export default Login
