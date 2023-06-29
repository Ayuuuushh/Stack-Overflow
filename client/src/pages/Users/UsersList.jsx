import React from 'react'
import {useSelector} from 'react-redux'
import User from './User.jsx'
import './Users.css'
const UsersList = () => {
    const user = useSelector((state) => state.usersReducer)
    // console.log(users)
  return (
    <div className='user-List-container'>
        {
            user.map((user)=>(
                <User user={user} key = {user?._id}/>
            ))
        }
    </div>
  )
}

export default UsersList
