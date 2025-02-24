import  { useRef, useState } from 'react';
import Header from './Header';
import userValidation from '../Utils/Validation';
import { IUser } from '../models/User';

const Login = () => {
const [isSignIn, setIsSignIn] = useState(false);
const [errors, seterrors] = useState<string[]>([]);

const userName = useRef<HTMLInputElement>(null);
const email = useRef<HTMLInputElement>(null);
const password = useRef<HTMLInputElement>(null);

const handleOnSubmit=()=>{  
  const user:IUser={
    name:userName.current?.value || '',
    email:email.current?.value||'',
    password:password.current?.value||''
  }
  const errors = userValidation(user,isSignIn?"signUp":"signIn");
  if(errors.length>0){
    seterrors(errors);
  }

}


  return (
    <div>
<Header/>
<div className='bg-gradient-to-t from-[#000000] to-[#000000] h-screen flex justify-center items-center'>
  
<img src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_small.jpg" />
    {/* <div className='flex justify-center items-center h-screen bg-gray-200'>
      <p className='text-3xl font-bold text-gray-800'>
        Hello from Login
      </p>
    </div> */}
    </div>
   
    <form onSubmit={(e)=>e.preventDefault()} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 p-10 rounded-lg w-md'>
      <div className=' my-2 font-bold text-white text-3xl text-start'>
     {isSignIn?"Sign In":"Sign Up" }
      </div>


      {isSignIn&&<div className='my-2 w-full'>
      <input type="text" ref={userName} placeholder="Full Name" className='p-4 my-2 border-1 text-white text-xs w-full' />
      </div>}

      <div className='my-2 w-full'>
      <input type="email" ref={email} placeholder="Email" className='p-4 my-2 border-1 text-white text-xs w-full' />
      </div>
      <div>
      <input type="password" ref={password} placeholder="Password" className='p-4 my-2 border-1 text-white text-xs w-full'/>
        
      </div>
      <div className='text-start'>
        {
          errors.length>0&&<div className='text-red-500 text-xs py-2'>
            {errors.map((error,index)=><p className='text-red-600 text-xs'key={index}>{error}</p>)}
          </div>
        }

        </div>
      <div>
      
      <button onClick={handleOnSubmit} className= 'bg-red-500 text-white p-2 my-2 rounded-lg w-full text-lg'>{isSignIn?"Sign In":"Sign Up" }</button>
      </div>
      <p className='text-white text-xs' >
        New to Netflix? <span onClick={()=>{setIsSignIn(!isSignIn)}} className='text-red-500 cursor-pointer'>{!isSignIn?"Sign up now":"Already register sigin in now"}</span>
      </p>
    </form>
    </div>
  )
}

export default Login
