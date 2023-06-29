import React, { useEffect } from "react";
import { Link , useNavigate} from "react-router-dom";
import logo from "../../assests/logo.png";
import search from "../../assests/magnifying-glass-solid.svg";
import Avatar from "../Avatar/Avatar.jsx";
import { useSelector, useDispatch } from "react-redux";
import "./Navbar.css";
import {setCurrentUser} from "../../actions/currentUser";
import  decode  from "jwt-decode";


const Navbar = () => {
  const dispatch = useDispatch();
  var User = useSelector((state) => (state.currentUserReducer));

  useEffect(() => {
    const token  = User?.token
    if(token){
      const decodedToken = decode(token)
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout()
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    
  }, [dispatch]);

  const navigate = useNavigate()
  const handleLogout = () =>{
    dispatch({type : 'LOGOUT'} );
    navigate('/');
    dispatch(setCurrentUser(null))
  }
  return (
    <nav className="main-nav">
    <div className="navbar">
      <button className="slide-in-icon" >
        <img src={search} alt="bars" width="150" />
      </button>
      <div className="navbar-1">
        <Link to="/" className="nav-item nav-logo">
          <img src={logo} alt="logo" width='150px' />
        </Link>
        <Link to="/" className="nav-item nav-btn res-nav">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn res-nav">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn res-nav">
          For Teams
        </Link>
        <form>
          <input type="text" placeholder="Search..." />
          <img src={search} alt="search" width="18" className="search-icon" />
        </form>
      </div>
      <div className="navbar-2">
        {User === null ? (
          <Link to="/Auth" className="nav-item nav-links">
            Log in
          </Link>
        ) : (
          <>
            <Avatar
              backgroundColor="#009dff"
              px="6px"
              py="10px"
              borderRadius="50%"
              color="white"
            >
              <Link
                to={`/Users/${User?.result?._id}`}
                style={{ color: "white", textDecoration: "none" }}
              >
                {User.result?.name.charAt(0).toUpperCase()}
                
              </Link>
            </Avatar>
            <button className="nav-item nav-links" onClick={handleLogout}>
              Log out
            </button>
          </>
        )}
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
