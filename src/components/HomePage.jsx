import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'
import EmployeeListItem from './EmployeeListItem'

const HomePage = () => {
  return (
    <div className='homePage' >
        <Header title="Employee Directory" />
        <SearchBar/>
        <EmployeeList/>
    </div>
  )
}

export default HomePage