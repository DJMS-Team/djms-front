'use client';
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { useCart } from "@/hooks/cart/use-cart";
import { Button } from "./ui/button";
import { UserButton } from "./profile/user-button-page";
import Link from "next/link";
import { LogoutButton } from "./dashboard/logout-button";

interface NavbarRoleProps {
    isMobile: boolean;
    section: string;
    currentUser: string | undefined;
    idUser : number | null;
}

export const NavbarRole: React.FC<NavbarRoleProps> = ({isMobile, section, currentUser, idUser}: NavbarRoleProps) => {

  if (isMobile) {
    return (
        <>
            {section == 'vender' && currentUser? 
            <a href="/" className={`${styles.navLink} text-white`}>
                Vender
            </a>
        :
            <></>
        }

        {section == 'vender' && !currentUser? 
            <a href="/auth/login" className={`${styles.navLink} text-white`}>
                Vender
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
            <LogoutButton>Log Out</LogoutButton>
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
            <a href="/" className={`${styles.navLink} text-white`}>
                Vender
            </a>
        :
            <></>
        }

        {section == 'vender' && !currentUser? 
            <a href="/auth/login" className={`${styles.navLink} text-white`}>
                Vender
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
