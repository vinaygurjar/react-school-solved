import React from 'react'

const Header = () => {
  return (
    <div>
        <header>
        <a href="#" className="logo">BrandName</a>
        <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Product</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
            </li>
            </ul>
            <ul className="nav flex-column">
            <div className='items'>
            <li className="nav-item">
                <a className="nav-link" href="#">Login</a>
            </li>
            <li className="nav-item">
                <a className="btn" href="#">JOIN US <svg width="25" height="25" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.02336 6.24222L7.12275 5.14283C7.25313 5.01245 7.25313 4.80106 7.12275 4.67068L6.02336 3.57129M7.02496 4.90676L2.35083 4.90676" stroke="#F5F7FA" stroke-width="0.5008" stroke-linecap="round"/>
</svg> </a>
            </li>
            </div>
            </ul>
        </header>
    </div>
  )
}

export default Header