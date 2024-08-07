'use client'
import React, { useState, useEffect } from 'react'
import { BsSliders2Vertical, BsChevronUp } from 'react-icons/bs'
import axios from 'axios'

type Props = {}

const Filter = (props: Props) => {
    const [showFilter, setShowFilter] = useState<boolean>(false)
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [selectedSize, setSelectedSize] = useState<string[]>([])
    const [allHexValues, setAllHexValues] = useState<string[]>([])
    const [selectedHexValues, setSelectedHexValues] = useState<string[]>([])
    const [price, setPrice] = useState({
        min: 0,
        max: 100
    })

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       const value = e.target.name === 'min' ? parseInt(e.target.value) : e.target.value
       setPrice({
         ...price, 
         [e.target.name]: value
        })
    }

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.name === 'max' ? parseInt(e.target.value) : e.target.value
      setPrice({
        ...price, 
        [e.target.name]: value
       })
   }

   const toggleCategory = (category: string) => {
      setSelectedCategories((prevCategories) => 
        prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category):
        [...prevCategories, category]
      )
   }

   const toggleSize = (size: string) => {
    setSelectedSize((prevSize) => 
      prevSize.includes(size)
      ? prevSize.filter((c) => c !== size):
      [...prevSize, size]
    )
 }

 const toggleColor = (color: string) => {
  setSelectedHexValues((prevColor) => 
    prevColor.includes(color)
    ? prevColor.filter((c) => c !== color):
    [...prevColor, color]
  )
}

  const getAllColors = async () => {
    try {
      const response = await axios.get('/api/color')
     // console.log("Colors:", response.data)
      return response.data
    } 
    catch (error) {
      console.log("Error", error)
      return null
    }
  }
  return (
    <div>Filter</div>
  )
}

export default Filter