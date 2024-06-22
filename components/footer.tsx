'use client';
import { useRouter } from 'next/navigation';

export const Footer = () => {
  const router = useRouter();

  const handleClick = (route: string) => {
    router.push(route);
  };

  return (
    <footer className="bg-white border-t flex flex-col items-center pb-6" id='footer'>
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
    
        <div className="flex flex-col space-y-2">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick('/terms');
            }}
            className="text-xs text-black hover:underline"
          >
            Terms and Conditions
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick('/policy');
            }}
            className="text-xs text-black hover:underline"
          >
            Privacy Policy
          </a>
        </div>

        
        <div className="flex flex-col space-y-2">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick('/pqrs');
            }}
            className="text-xs text-black hover:underline"
          >
            PQRS
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick('/about');
            }}
            className="text-xs text-black hover:underline"
          >
            About Us
          </a>
        </div>
      </div>
      <p className="text-xs text-center text-black">©copy: 2024 DJMS Store | All Rights Reserved</p>
    </footer>
  );
};

