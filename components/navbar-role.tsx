'use client';
import React from "react";
import styles from "./navbar.module.css";
import { UserButton } from "./profile/user-button-page";
import Link from "next/link";
import { LogoutButton } from "./dashboard/logout-button";
import toast from "react-hot-toast";

interface NavbarRoleProps {
    isMobile: boolean;
    section: string;
    currentUser: string | undefined;
    idUser : number | null;
}

const handleNoLogin = () => {
    toast.error('Necesitas estar logueado para realizar esta acción.')
}

export const NavbarRole: React.FC<NavbarRoleProps> = ({isMobile, section, currentUser, idUser}: NavbarRoleProps) => {

  if (isMobile) {
    return (
        <>
            {section == 'vender' && currentUser? 
            <a href={`/account/${idUser}/products/add_product`} className={`${styles.navLink} text-white`}>
                Quiero vender
            </a>
        :
            <></>
        }

        {section == 'vender' && !currentUser? 
            <a onClick={handleNoLogin} className={`${styles.navLink} text-white cursor-pointer`}>
                Quiero vender
            </a>
        :
            <></>
        }

            {section == 'userButton' && !currentUser? 
            <a href="/auth/login" className={`${styles.navLink} text-white`}>
            Iniciar sesión
                </a>: <></>
            }
            
            {section == 'userButton' && currentUser ?
            <>
            <Link href={`/account/${idUser}`} className={`${styles.navLink} flex items-center`}>
                Perfil
              </Link>
            <LogoutButton>Cerrar sesión</LogoutButton>
            </>
                :
            <></>
            }
        </>
    );
  }

  return (
    <>
        {section == 'vender' && currentUser? 
            <a href={`/account/${idUser}/products/add_product`} className={`${styles.navLink} text-white`}>
                Quiero vender
            </a>
        :
            <></>
        }

        {section == 'vender' && !currentUser? 
            <a onClick={handleNoLogin} className={`${styles.navLink} text-white cursor-pointer`}>
                Quiero vender
            </a>
        :
            <></>
        }

        {section == 'userButton' && currentUser? 
            <UserButton />: <></>
        }

        {section == 'userButton' && !currentUser? 
            <a href="/auth/login" className={`${styles.navLinkTwo} bg-white`}>
                Iniciar sesión
            </a>: <></>
        }
    </>
  );
};
