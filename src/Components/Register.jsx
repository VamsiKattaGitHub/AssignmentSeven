import React from 'react'

const Register = () => {
  return (
    <>
      <div className='vh-100'>
        <p className='text-center m-0 fs-1'>Register</p>
      <form action="" className='mt-5 w-100 border m-auto p-4 bg-dark text-light rounded' style={{width:'400px'}}>
        <div className='d-flex flex-column justify-content-center gap-3'>
        <label htmlFor="" className='w-100'>
            Name: <br />
            <input type="email" className='w-100' placeholder='Enter full Name...' />
          </label>
          <label htmlFor="">
            Email: <br />
            <input type="email" className='w-100' placeholder='Enter your Email...' />
          </label>
          <label htmlFor="">
            Password: <br />
            <input type="password" className='w-100' placeholder='Enter your Password...' />
          </label>
          <button className='btn btn-light text-dark'>Sign Up</button>
        </div>
      </form>
      </div>
    </>
  )
}

export default Register
