import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './FooterMenu.css'

export class FooterMenu extends Component {
  render() {
    return (
      <div className="Footer__container">
        <div className="Footer__icon">
          <Link to='/Send'> 
            <i id="icon" class="fa fa-envelope-open"></i>
          </Link>
          <div>Frenmos</div>
        </div>
        <div className="Footer__icon">
          <Link to='/Friends'>
            <i id="icon" class="fa fa-users"></i>
          </Link>
          <div>Friends</div>
        </div>
        <div className="Footer__icon">
        <Link to='/Send'>
          <i id="icon" class="fas fa-hand-holding-heart"></i>
        </Link>
          <div>Wishlist</div>
        </div>
        <div className="Footer__icon">
        <Link to='/feed'>
          <i id="icon" class="fa fa-user"></i>
        </Link>
          <div>Profile</div>
        </div>
      </div>
    )
  }
}

export default FooterMenu
