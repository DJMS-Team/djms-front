import styles from "./footer.module.css";
import Image from 'next/image';
import { headers } from "next/headers"; // to get actual url
import Link from 'next/link'

export const Footer = () => {
  const headerList = headers();
  const pathname = headerList.get("x-current-path");
  console.log('actual url ' + pathname);

  if (pathname) {
    if (pathname === '/auth/login' || pathname === '/auth/register' || pathname.includes('account')) {
      return null;
    }
  }

  return (
    <footer className={styles.footer}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center ">
        <div className="flex flex-col items-center m-5 ">
        <p>DMajorStore</p>
          <Image src="/images/logo.png" alt="DMajorStore Logo" width={96} height={96} className="mt-4 w-20 h-20" />
        </div>
        <div className="flex flex-col items-center space-y-2 m-5">
          <Link
            href="/privacy-policy"
            className="font-bold mb-3"
          >
            Politicas de privacidad
          </Link>
          <Link
            href="/terms-and-conditions"
            className="font-bold mb-3"
          >
            Terminos y condiciones
          </Link>
        </div>
        <div className="flex flex-col items-center space-y-2 m-5">
          <Link
            href="/about-us"
            className="font-bold mb-3"
          >
            Conoce de nosotros
          </Link>
          <Link
            href="/contact-us"
            className="font-bold mb-3"
          >
            PQRS/Contactanos
          </Link>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <p className="font-bold">© 2024 DJMS Store | All Rights Reserved</p>
      </div>
    </footer>
  );
};
