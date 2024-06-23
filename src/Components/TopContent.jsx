import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { LoginContext } from '../UserContext';
import { useSelector }from 'react-redux'

const TopContent = () => {
    const { user } = useContext(LoginContext);
    const cartCount=useSelector((state)=>state.myCart.cart)

    return (
        <div className="topcontent">
            <div className="logo">Lap<span>Elite</span> </div>
            <div className="search-bar-container">
                <form className="form-inline search-bar-form">
                    <input
                        className="form-control search-bar-input"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-white search-bar-button" type="submit"><FaSearch /></button>
                </form>
            </div>
            <div className='topleftcontent'>
                <div className='cart'>
                   <a href='/cart'> <FaShoppingCart /><span className="cart-count">{cartCount}</span></a>
                </div>
                {user.auth ? (
                    <div className='user'>
                        <Link to="/profile">Profile</Link>
                    </div>
                ) : (
                    <>
                        <div className='user'>
                            <a href="/login">Log In</a>
                        </div>
                        <div className='user'>
                            <a href="/signup">Sign Up</a>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default TopContent;
