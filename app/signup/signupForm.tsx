'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import axios from "axios"

type Props = {}

const SignForm = (props: Props) => {
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:""
    })

    const [errorNameMessage, setErrorNameMessage] = useState("");
    const [errorEmailMessage, setErrorEmailMessage] = useState("");
    const [errorPassMessage, setErrorPassMessage] = useState("");
    
    const router  = useRouter()

    //EMAIL VALIDATION
    const validateEmail = (email: string) => {
        const validate = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return validate.test(String(email).toLowerCase());
    }
   //USER REGISTER
    const Register = () => {
        if(!validateEmail(user.email)){
            setErrorEmailMessage("Please enter a valid email address")
            return
        }else if(user.password.length < 6){
            setErrorPassMessage("Password must be at least 6 characters")
            return
        } else if (user.name.trim() === "") {
            setErrorNameMessage("Please enter a name");
            return;
        }


        const data = {
            name: user.name,
            email: user.email,
            password:user.password,


        }
        axios.post('/api/register', data)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() =>{
            router.push('/signin')
        })
    }
    
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <div className='p-10 rounded-lg shadow-lg flex flex-col'>
            <h1 className='text-xl font-medium mb-4'>Sign Up</h1>
            <label htmlFor="" className='mb-2'>Name</label>
            <input 
            type="text"
            className='p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black'
            id='name'
            value={user.name}
            placeholder='name'
            onChange={(e) => setUser({...user, name: e.target.value})}
             />

<div>
            {errorNameMessage && <div style={{ color: 'red' }}>{errorNameMessage}</div>}
            {/* Other UI elements */}
        </div>

            <label htmlFor="" className='mb-2'>Email</label>
            <input 
            type="text"
            className='p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black'
            id='email'
            value={user.email}
            placeholder='email'
            onChange={(e) => setUser({...user, email: e.target.value})}
            required
             />

         <div>
            {errorEmailMessage && <div style={{ color: 'red' }}>{errorEmailMessage}</div>}
            {/* Other UI elements */}
        </div>

            <label htmlFor="" className='mb-2'>Password</label>
            <input 
            type="password"
            className='p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black'
            id='password'
            value={user.password}
            placeholder='password'
            onChange={(e) => setUser({...user, password: e.target.value})}
            required
             />

        <div>
            {errorPassMessage && <div style={{ color: 'red' }}>{errorPassMessage}</div>}
            {/* Other UI elements */}
        </div>
        
             <button onClick={Register} className='p-2 border bg-purple-600 rounded-lg text-white border-gray-300 mt-2 mb-4 focus:outline-none focus:border-gray-600'>
                Register Now
             </button>
             <Link href='/signin' className='bg-slate-200 text-sm rounded-lg text-center mt-5 text-neutral-600'>Already have an Account?</Link>
             <Link href='/' className='text-center mt-2'>Home</Link>
        </div>
    </div>
  )
}

export default SignForm