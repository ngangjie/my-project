import React from 'react'
import Profile from './Profile'
import SocialHandle from './SocialHandle'
import '../App.css'

const Main = () => {
  return (
   
       <div className=" bg-secondary rounded-xl shadow-md flex space-x-8 h-[32rem] sm:flex-col md:w-auto dark:bg-gray-dark" >
        <div className='w-1/3 relative top-12 left-8 md:top-0 md:p-4'>

        <img src="src/assets/github.png" alt="" className='w-full '/>
        </div>
    
      <div className="flex flex-col leading-9 justify-around w-full md:w-auto px-6 sm:p-2">
        <div className="flex justify-between mx-2">
            <div className=''>
          <h2 className="header text-white"> The Octocat</h2>
            <a href="#"    className="text-blue">@Octocat</a>
            </div>
          <span className="text-white">joined <span>14 Mar 2023</span></span>
        </div>
        <Profile  />

        <SocialHandle />
        
       
      </div>
    </div>
   
  )
}

export default Main
