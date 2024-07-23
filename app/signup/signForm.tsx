import React, { useState } from 'react'
import { useRouter } from 'next/router'

type Props = {}

const signForm = (props: Props) => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
         <div className='p-10 rounded-lg shadow-lg flex flex-col'>
              <h1 className='text-xl font-medium mb-4'>Sign Up</h1>
              <label htmlFor="name" className='mb-2'>Name</label>
              <input 
                 type="text" 
                 className='p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black'
                 id='name'
                 value={user.name}
                 placeholder='Name'
                 onChange={(e) => setUser({...user, name: e.target.value})}
                 />

              <label htmlFor="email" className='mb-2'>E-mail</label>
              <input 
                 type="text" 
                 className='p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black'
                 id='email'
                 value={user.email}
                 placeholder='E-mail'
                 onChange={(e) => setUser({...user, email: e.target.value})}
                 />

              <label htmlFor="password" className='mb-2'>Password</label>
              <input 
                 type="text" 
                 className='p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black'
                 id='password'
                 value={user.password}
                 placeholder='Password'
                 onChange={(e) => setUser({...user, password: e.target.value})}
                 />
                 <button className='p-2 border bg-purple-600 text-white border-gray-300 mt-2 mb-4 focus:outline-none focus:border-gray-600'>
                    Register Now
                 </button>
         </div>
    </div>
  )
}

export default signForm