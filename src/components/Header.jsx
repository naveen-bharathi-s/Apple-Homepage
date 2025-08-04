import React from 'react'
import { FaHome, FaGreaterThan } from "react-icons/fa"

const Header = () => {
  return (
    <header className='px-9'>
         <p className='text-sm text-center py-3'>Get up to 12 months of No Cost EMI◊ plus up to ₹8000.00 instant cashback‡ on selected products with eligible cards. 
            <span className='text-blue-700 hover:underline cursor-pointer'>Shop <FaGreaterThan className='text-xs inline opacity-60' /></span></p>
      </header>
  )
}

export default Header