'use client'

import { FaUser } from 'react-icons/fa';
//import { ExitIcon, ReaderIcon, InfoCircledIcon } from '@radix-ui/react-icons'; 
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuContent
} from '@/components/ui/dropdown-menu'
import {
    Avatar,
    AvatarImage,
    AvatarFallback,
} from '@/components/ui/avatar'
import { LogoutButton } from '../dashboard/logout-button';
import Link from 'next/link';
import { LogOut, User } from 'lucide-react';
import Cookies from 'js-cookie';

export const UserButton = () => {
    let id = null;
    const currentUser = Cookies.get('currentUser');
    
    if (currentUser) {
        try {
            const parsedUser = JSON.parse(currentUser);
            id = parsedUser.id;
        } catch (error) {
            console.error("Error parsing JSON:", error);
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage />
                    <AvatarFallback className='bg-blue-500'>
                        <FaUser className='text-white' />
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-40' align='end'>
                <DropdownMenuItem>
                    {id ? (
                        <Link href={`/account/${id}`} className='flex items-center'>
                            <User className='size-4 mr-2' />
                            Perfil
                        </Link>
                    ) : (
                        <span className='flex items-center'>
                            <User className='size-4 mr-2' />
                            Perfil
                        </span>
                    )}
                </DropdownMenuItem>
                <LogoutButton>
                    <DropdownMenuItem>
                        <LogOut className='size-4 mr-2' />
                        Logout
                    </DropdownMenuItem>
                </LogoutButton>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
