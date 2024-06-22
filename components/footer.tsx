'use client';
import { useRouter } from 'next/navigation';

export const Footer = () => {
  const router = useRouter();

  const handleClick = (route: string) => {
    router.push(route);
  };

  return (
    <footer className="bg-black text-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        <div className="flex flex-col items-center">
          <p>DMajorStore</p>
          <img src="/logo/logo.png" alt="DMajorStore Logo" className="mt-4" />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick('/policy');
            }}
            className="font-bold mb-3"
          >
            Politicas de privacidad
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick('/policy');
            }}
            className="font-bold mb-3"
          >
            Terminos y condiciones
          </a>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick('/about');
            }}
            className="font-bold mb-3"
          >
            Conoce de nosotros
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick('/about');
            }}
            className="font-bold mb-3"
          >
            PQRS/Contactanos
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <p className="font-bold">© 2024 DJMS Store | All Rights Reserved</p>
      </div>
    </footer>
  );
};
