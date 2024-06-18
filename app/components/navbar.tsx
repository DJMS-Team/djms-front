'use client'
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { IconCircuitSwitchClosed, IconMenu, IconShoppingCartFilled, IconShoppingBag, IconLocation } from '@tabler/icons-react';

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleNavbar = (event: React.MouseEvent) => {
    setIsClick(!isClick);
};

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <>
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-white">DMajorStore</a>
              </div>
              <div className="flex items-center ml-10"> 
                <IconLocation className="text-white mr-2" />
                <a href="/" className="text-white ">
                  Ubicacion
                </a>
            </div>
              <form onSubmit={handleSearchSubmit} className={`ml-10 flex ${styles.formContainer}`}>
                <input 
                  type="text" 
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
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
        {isClick && (
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
              Carrito
            </a>
          </div>
        )}
        <div className={styles.bottomBar}>
        <div className={styles.bottomContent}>
              <a href="/" className={styles.bottomItems}>
                Categorias
              </a>
              <a href="/" className={styles.bottomItems}>
                Ofertas
              </a>
              <a href="/" className={styles.bottomItems}>
                Vender
              </a>
              <a href="/" className={styles.bottomItems}>
                PQRS/Ayuda
              </a>
        
            </div>
            
        </div>
      </nav>
    </>
  );
};

export default Navbar;