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
import { IconUser } from '@tabler/icons-react';

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
        <div className='flex items-center rounded-full bg-transparent'>
            <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage/>
                    <AvatarFallback className='bg-purple-dark hover:bg-[#00FFFF33]'>
                        <FaUser className='text-white'/>
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-40 px-4 bg-[#2a2a5a] text-white border-none' align='end'>
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
        </div>
    );
};
