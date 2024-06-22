'use client'

import { useOpenUser } from '@/hooks/user/use-open-user'
import { Button } from '@/components/ui/button'
import { Ban, Edit, MoreHorizontal, Trash } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useUserData } from '@/hooks/user/use-user-data'
import { updateUser } from '@/actions/update-user'


type Props = {
    id: string
}


export const Actions = ({id}: Props) => {
   
    const {onOpen} = useOpenUser()


    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='ghost' className='size-8 p-0'>
                        <MoreHorizontal className="size-4" />
                    </Button>   
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                    <DropdownMenuItem
                        disabled={false}
                        onClick= {()=>onOpen(id)}
                    >
                        <Edit className="size-4 mr-2" />
                        Edit
                    </DropdownMenuItem>
                    
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}