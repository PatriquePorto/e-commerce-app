'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { signIn, signOut, useSession } from 'next-auth/react'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/navigation'
import Size from '../components/Size'

type Props = {}

const ProductForm = (props: Props) => {
    const {data: session} = useSession()
    const id = session?.user?.id
    const router = useRouter()
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        style: '',
        size: '',
        inventory: '',
        color: '#fe345e',
        price: '0',
        images: '',
        userId: id,
        store: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
  return (
    <div className='px-5 max-w-[1280px] mx-auto mb-10'>
        <div>
           <Navbar/>
        </div>
        <h1 className='text-3xl font-semibold py-6'>Add your product n SEINE</h1>
        <div className='text-black mt-4'>
            <div className='grid md:grid-cols-2 grid:cols-1 gap-4'>
                 <div>
                    <label htmlFor="title" className='font-medium'>Title</label>
                    <input 
                     type="text" 
                     className='w-full h-[50px] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none'
                     name='title'
                     value={formData.title}
                     onChange={ handleChange }
                     />
                 </div>
                  <div>
                    <label htmlFor="category" className='font-medium'>Category</label>
                    <input 
                        type="text" 
                        className='w-full h-[50px] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none'
                        name='category'
                        value={formData.category}
                        onChange={ handleChange }
                        />
                  </div>
                  <div>
                     <label htmlFor="style" className='font-medium'>Style</label>
                      <input 
                        type="text" 
                        className='w-full h-[50px] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none'
                        name='style'
                        value={formData.style}
                        onChange={ handleChange }
                        />
                  </div>
                  <div>
                     <label htmlFor="store" className='font-medium'>Store</label>
                      <input 
                        type="text" 
                        className='w-full h-[50px] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none'
                        name='store'
                        value={formData.store}
                        onChange={ handleChange }
                        />
                  </div>
                  <div>
                     <label htmlFor="size" className='font-medium'>Size</label>
                      <input 
                        type="text" 
                        className='w-full h-[50px] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none'
                        name='size'
                        value={formData.size}
                        onChange={ handleChange }
                        />
                        <Size setFormData={setFormData}/>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default ProductForm