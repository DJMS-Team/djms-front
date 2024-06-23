'use client';
import { useRouter } from 'next/navigation';
import styles from "./footer.module.css";
import Image from 'next/image';

export const Footer = () => {
  const router = useRouter();

  const handleClick = (route: string) => {
    router.push(route);
  };

  return (
    <footer className={styles.footer}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center ">
        <div className="flex flex-col items-center m-5 ">
        <p>DMajorStore</p>
          <Image src="/images/logo.png" alt="DMajorStore Logo" className="mt-4 w-20 h-20" />
        </div>
        <div className="flex flex-col items-center space-y-2 m-5">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick('/privacy-policy');
            }}
            className="font-bold mb-3"
          >
            Politicas de privacidad
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick('/terms-and-conditions');
            }}
            className="font-bold mb-3"
          >
            Terminos y condiciones
          </a>
        </div>
        <div className="flex flex-col items-center space-y-2 m-5">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick('/about-us');
            }}
            className="font-bold mb-3"
          >
            Conoce de nosotros
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick('/contact-us');
            }}
            className="font-bold mb-3"
          >
            PQRS/Contactanos
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <p className="font-bold">© 2024 DJMS Store | All Rights Reserved</p>
      </div>
    </footer>
  );
};
