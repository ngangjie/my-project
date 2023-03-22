import React from 'react'
import '../App.css'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <div className='w-full md:w-auto ' >
       <div className="w-full relative pb-6 ">
       <SearchIcon color ="primary" className='my-auto absolute top-4 left-3 '/>
      <input type="search" placeholder='Search Github username...' className="form-input p-4  mx-auto bg-secondary rounded-xl shadow-md w-full text-center text-white dark:bg-gray-dark"/>
        
      <button className= ' px-5 py-3 rounded-xl bg-blue   text-white absolute right-2 top-1 '>Search</button>
       </div>
     
    </div>
  )
}

export default SearchBar
