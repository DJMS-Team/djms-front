'use client'
import React, { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import { IconMenu } from '@tabler/icons-react';
import { useCart } from '@/hooks/cart/use-cart';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { UserButton } from './profile/user-button-page';

export const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY <= 600) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const cart = useCart();
  const router = useRouter();

  const toggleNavbar = (event: React.MouseEvent) => {
    setIsClick(!isClick);
  };

  return (
    <nav className={`${styles.navbar} ${showNavbar ? styles.show : styles.hide}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-white text-2xl font-bold">DMajorStore</a>
            </div>
            <form className={`ml-10 flex ${styles.formContainer}`}>
              <input 
                type="text" 
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
              <button type="submit" className={styles.searchButton}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 4.476l4.817 4.817a1 1 0 11-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>
          <div className="flex items-center justify-center flex-grow space-x-4">
            <a href="/" className={`${styles.navLink} text-white`}>Categorías</a>
            <a href="/" className={`${styles.navLink} text-white`}>Vender</a>
          </div>
          <div className="flex items-center space-x-4">
            <Button onClick={() => router.push('/cart')} className='flex items-center rounded-full bg-transparent px-4 py-2 border-2 border-neon'>
              <ShoppingCart className="inline-block mr-2 text-neon"/>
              <span className="ml-2 text-sm font-medium text-neon">
                {cart.items.length}
              </span>
            </Button>
            <UserButton />
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleNavbar} className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <IconMenu />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
