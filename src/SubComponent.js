import React from 'react'
import { Table } from 'antd'


const SubComponent = ({children}) => {
  return (
    // <div>    
    // </div>
    <Table>{children}</Table>
  )
}

export default SubComponent