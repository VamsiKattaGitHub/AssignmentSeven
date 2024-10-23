import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const User = () => {
  return (
    <>
      <div className='mt-5 vh-100'>
        <h1 className='text-center'>Register or Login</h1>
        <div className='d-flex justify-content-center gap-4 mt-3'>
          <Link className='btn btn-dark text-light' to='/users/register'>Register</Link>
          <Link className='btn btn-dark text-light' to='/users/login'>Login</Link>
        </div>
        <div className='mt-4'>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default User;
