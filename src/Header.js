import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
      <img
        className='logoImg'
        src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
      />

      <div className='Address'>
        <div className='locationLogo'>
          <LocationOnIcon />
        </div>
        <div className='addTextContainer'>
          <span className='header__optionLineOne'>Hello</span>
          <span className='header__optionLineTwo'>Select Your Region</span>
        </div>
      </div>

      <div className='header__search'>
        <input className='header__searchInput' type='text' />
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__optionLineOne'>Hello, Sign in</span>
          <span className='header__optionLineTwo'>Account & Lists</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>
        {/* <div className='header__option'>prime</div> */}
        <div className='header__optionBasket'>
          <ShoppingBasketIcon />
          <span className='header__optionLineTwo header__optionLineCount'>
            0
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
