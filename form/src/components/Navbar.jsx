import React from 'react'

const Navbar = () => {
  return (
    <div className='nav'>

        <div className="logo">
          <img className="logoA"src="/logo.png"></img>

        </div>

        <div className="contain">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                
                

            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
