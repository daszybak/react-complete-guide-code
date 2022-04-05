import React from 'react';

import './header-cart-button.styles.css';

import {IoCart} from 'react-icons/io5';

const HeaderCartButton = () => {
  return (
    <>
      <button className="button">
        <span>
          <IoCart className="icon" />
        </span>
        <span> Your Cart </span>
        <span className="badge">0</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
