import React from 'react'
import employees from '../models/employees'
import EmployeeListItem from './EmployeeListItem'

const EmployeeList = () => {
  return (
    <div className='employeeList' >
        <EmployeeListItem/>
    </div>
  )
}

export default EmployeeList
