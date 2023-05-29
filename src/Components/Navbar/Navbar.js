import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='NavbarContainer'>
        <div className="Navbar">
           <div className='Profile_Picture'>
            <img src={"/"} alt='' />
           </div>
           <div className='Switch_pages'>
              <div className='switch_icons'></div>
           </div>
        </div>
    </div> 
  )
}

export default Navbar