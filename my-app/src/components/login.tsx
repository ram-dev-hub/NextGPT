import React from 'react';
import Header from './Header';

const Login = () => {
  return (
    <div>
<Header/>
<div>
<img src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_small.jpg" />
    {/* <div className='flex justify-center items-center h-screen bg-gray-200'>
      <p className='text-3xl font-bold text-gray-800'>
        Hello from Login
      </p>
    </div> */}
    </div>
    <form className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-lg'>
      <input type="email" placeholder="Email"  className='p-2 my-2'/>
      <input type="password" placeholder="Password" className='p-2 my-2'/>
    </form>
    </div>
  )
}

export default Login
