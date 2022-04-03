import React from 'react'
import "./Topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="leftTop">
            OLY
        </div>
        <div className="middleTop">
            <div className="searchBar">
                <SearchIcon className="searchIcon" />
                <input type="text" placeholder="Search for Items" />
            </div>
        </div>
        <div className="rightTop">
            <button className="TopLoginBtn">Login</button>
            <button className="TopSellBtn">
                <AddIcon/>
                <span>Sell</span>
            </button>
        </div>
    </div>
  )
}
