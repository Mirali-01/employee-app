import React from 'react'
import employees from '../models/employees'

const EmployeeListItem = () => {
  const employeeList = employees.map((employee) => {
    return (
      <div className='employeeListItem' >
        <div className="employeeImg">
        <img className='avatar' src={employee.img} alt="Pokemon" />
        </div>
        <div className="employeeDescription">
            <h3 className='title' > {employee.title} </h3>
            <h5 className='role'> {employee.role} </h5>
        </div> 
        </div>
    )
  })

  return (
    <>
      {employeeList}
    </>
  )
}

export default EmployeeListItem