import React from 'react'
import '../App.css'
import LinkIcon from '@mui/icons-material/Link';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import TwitterIcon from '@mui/icons-material/Twitter';
import ApartmentIcon from '@mui/icons-material/Apartment';
const SocialHandle = () => {
  return (

       <div className='flex flex-col items-start py-6 '>
       <div className="flex  items-start  justify-between pb-4 w-full sm:p-0">
          <div className='flex  px-2 text-white '>
            <span >
             <PersonPinCircleIcon />
             <a href="#" className='px-2 '>
             San_Francisco 
              </a> 
             </span>
          </div>
          <div className='flex  mx-auto px-2 text-white  '>
            <span>
            <TwitterIcon /><a className='px-2 ' href="#">Not_available</a> 
              </span>
            </div>
        </div>
        <div className="flex  items-start  flex justify-between pb-2 w-full sm:p-0 ">
          <div className='flex  px-2 text-white'>
            <span><LinkIcon /><a className='px-2 ' href="https://github.blog">https://github.blog</a> </span>
          </div>
          <div className='flex mx-auto px-2 text-white'>
            <span>
            <ApartmentIcon />
            <a className='px-2 ' href="#">agithub</a>
            </span>
            </div>
        </div>
    </div>
 
  )
}

export default SocialHandle
