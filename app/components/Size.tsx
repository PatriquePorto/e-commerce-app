import React, { useState } from 'react'

interface ParamsProps {
    setFormData: React.Dispatch<React.SetStateAction<any>>
}

const Size: React.FC<ParamsProps> = ({setFormData}) => {
    const [selectedSizes, setSelectedSizes] = useState<string[]>([])
    const sizes = ['SM', 'MD', 'XL', '2XL', '3XL', '4XL']
    //const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']

    const handleSizeButtonClick = (size: string) => {
        setSelectedSizes((prevSelectedSizes) => {
            if (prevSelectedSizes.includes(size)) {
                return prevSelectedSizes.filter((s) => s !== size)
            } else {
                return [...prevSelectedSizes, size]
            }
        })
    }

    const handleSubmit = () => {
        setFormData((prevFormData: FormData) => ({
            ...prevFormData,
            size: selectedSizes.join(','),
        }))
    }
  return (
    <div>
        {sizes.map((size) => (
            <button
                key={size}
                className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer px-3 mt-4 mb-5 mr-5
                ${selectedSizes.includes(size) ? 'bg-[#fe345e] text-white' : 'bg-white text-black border-[#fe345e]'} `}
                onClick={() => handleSizeButtonClick(size)}
            >
                {size}
            </button>
        
        ))}
        <button onClick={handleSubmit} className='border-[0.5px] bg-slate-600 rounded-lg text-center text-[14px] py-[2px] cursor-pointer px-3 mt-4'>Submit</button>
    </div>
  )
}

export default Size