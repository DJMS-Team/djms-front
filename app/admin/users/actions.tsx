'use client'

import { useOpenUser } from '@/hooks/use-open-user'
import { Button } from '@/components/ui/button'
import { Edit, MoreHorizontal, Trash } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { on } from 'events'


type Props = {
    id: string
}


export const Actions = ({id}: Props) => {
   // console.log('Actions', id)
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
                    <DropdownMenuItem>
                        <Trash className="size-4 mr-2" />
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}