import React from 'react'
import "./Topbar.css"
import SearchIcon from '@mui/icons-material/Search';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="leftTop">
            Name
        </div>
        <div className="middleTop">
            <div className="searchBar">
                <SearchIcon className="searchIcon" />
                <input type="text" placeholder="Search for friends, Posts or Videos" />
            </div>
        </div>
        <div className="rightTop">
            <button className="TopLoginBtn">Login</button>
            <button className="TopSellBtn">Sell</button>
        </div>
    </div>
  )
}
