import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import appleLogo from '../../assets/apple-logo.svg'
import search from '../../assets/search.svg'
import suitcase from '../../assets/suitcase.svg'
const Navbar = () => {
  return (
    <>
          <nav className="navbar navbar-expand-md p-1 sticky-top">
        <div className="container-fluid mainContainer">
        <Link className="nav-brand d-block d-md-none" to='/' aria-current="page"><img src={appleLogo} className='apple-logo' /></Link>
          <button className="navbar-toggler bg-light ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav gap-lg-4">
             <li className="nav-item">
             <Link className="nav-link d-none d-md-block" to='/' aria-current="page"><img src={appleLogo} className='apple-logo2' /></Link>
             </li>
              <li className="nav-item">
                <Link className="nav-link " to='/' >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/support'>Support</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/users'>User</Link>
              </li>
              <li className="nav-item" data-bs-toggle="collapse-show">
                <Link className="nav-link d-none d-md-block" to='/iphone'><img className='search-logo' src={search} alt="" /></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar
