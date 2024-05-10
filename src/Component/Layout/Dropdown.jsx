import React, { children } from 'react'

const Dropdown = ({className,children,dropRef}) => {
  return (
    <div className={className} ref={dropRef}>{children}</div>
  )
}

export default Dropdown