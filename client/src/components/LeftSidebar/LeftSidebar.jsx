import React from 'react'
import './LeftSidebar.css'
import {NavLink} from 'react-router-dom'
import Globe from '../../assests/Globe.svg'

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <div className="side-nav">
        <NavLink to='/' className='side-nav-links' activeClass='active' style={{paddingLeft:"10px"}}>
          <p style={{margin:"6px 1px"}}>
            Home
          </p>
        </NavLink>
        <div className="side-nav-div">
          <div><p >PUBLIC</p>
          
          <NavLink to='/Questions' className="side-nav-links" activeClassName='active' >
            <img src={Globe} alt="Globe"  style={{width:"16px" ,height:"16px"}} />
            <p style={{ paddingLeft:'10px'}}>Questions</p>
          </NavLink>
          <NavLink to="/Tags" className="side-nav-links" activeClassName='active' style={{paddingLeft:"26px"}}>
            <p>Tags</p>
          </NavLink>
          <NavLink to="/Users" className="side-nav-links" activeClassName='active' style={{paddingLeft:"26px"}}>
            <p>Users</p>
          </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar
