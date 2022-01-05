import React from "react"
import './header.css'
import logo from './logo.png'
import group from './smalllogo/group.jpg'
import heart from './smalllogo/heart.jpg'
import account from './smalllogo/account.jpg'
import cart from './smalllogo/cart.jpg'

function Header () {
    return <div className="header">
        <input className="search e"   placeholder="Search"  />
         <img src={logo} className="logo e" />
         <div className="right e">
         <img src={group} className="img" />
         <img src={heart} className="img" />
         <img src={account} className="img" />
         <img src={cart} className="img" />
         </div>
    </div>
}

export default Header