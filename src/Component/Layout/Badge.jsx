import React from 'react'

const Badge = ({title}) => {
  return (
    <div>
    <div className='bg-primary py-2 px-8 text-comon w-[92px] font-dm font-bold text-sm rounded absolute top-5 left-5'>{title}</div>
    </div>
  )
}

export default Badge