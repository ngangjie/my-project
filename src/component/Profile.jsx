import React from 'react'
import '../App.css'


const Profile = () => {
  return (
   
    <div className="mx-2">
    <h3 className="text-white text-start pb-6">This profile has no bio</h3>
    <div className="text-white p-4  bg-primary rounded-xl shadow-md flex  justify-around space-x-4 dark:bg-gray">

     <div className="repos">
      <h3>Repos</h3>
      <p>8</p>
     </div>
     <div className="followers">
      <h3>Followers</h3>
      <span>3938</span>
     </div>
     <div className="following">
      <h3>Following</h3>
      <span>9</span>
     </div>
  </div>
    </div>
  )
}

export default Profile
