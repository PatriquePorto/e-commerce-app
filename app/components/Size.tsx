import React, { useState } from 'react'

interface ParamsProps {
    setFormData: React.Dispatch<React.SetStateAction<any>>
}

const Size: React.FC<ParamsProps> = ({setFormData}) => {
    const [selectedSizes, setSelectedSizes] = useState<string[]>([])
    const sizes = ['sm', 'md', 'xl', '2xl', '3xl', '4xl']
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
    <div>Size</div>
  )
}

export default Size