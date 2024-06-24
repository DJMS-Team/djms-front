'use client'

import {FaUser} from 'react-icons/fa';
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
import { LogoutButton } from './logout-button';
import Link from 'next/link';
import { LogOut } from 'lucide-react';



export const UserButton = () => {

    

    return (
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
            
                <LogoutButton>
                    <DropdownMenuItem className='hover:bg-[#00FFFF33]'>
                        <LogOut className='size-4 mr-2'/>
                        Logout
                    </DropdownMenuItem>
                </LogoutButton>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};