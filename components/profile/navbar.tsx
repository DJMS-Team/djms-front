// components/Navbar.js
"use client"

import React, { useState } from 'react';
import styles from '../../app/_components/navbar.module.css';
import { IconCircuitSwitchClosed, IconMenu, IconShoppingCartFilled, IconShoppingBag, IconLocation } from '@tabler/icons-react';

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleNavbar = (event: React.MouseEvent) => {
    setIsClick(!isClick);
  };

  return (
    <nav className="bg-black w-full fixed top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-white">DMajorStore</a>
            </div>
            <div className="flex items-center ml-10">
              <IconLocation className="text-white mr-2" />
              <a href="/" className="text-white">Ubicacion</a>
            </div>
            <form className={`ml-10 flex ${styles.formContainer}`}>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                className={styles.searchInput}
              />
              <button type="submit" className={styles.searchButton}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 4.476l4.817 4.817a1 1 0 11-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
            <button type="submit" className={styles.userInfo}>SV</button>
            <div className="hidden md:block">
              <div className="navLinks">
                <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-4">
                  <IconShoppingBag className="inline-block mr-2"/> Mis compras
                </a>
                <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                  <IconShoppingCartFilled className="inline-block mr-2"/> Carrito
                </a>
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleNavbar} className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              {isClick ? <IconCircuitSwitchClosed /> : <IconMenu />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
