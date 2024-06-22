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
   console.log('Actions', id)
    const {onOpen} = useOpenUser()
    console.log('hi')
    const { user, loading, error } = useUserData(id, 'token')
    console.log('user', user)
    const onClickBlock = async () => {
        if (loading || error || !user) return

        await updateUser(id, user.name, user.password, user.email, user.photo_url, user.role, 'INACTIVE')
    }

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
                    <DropdownMenuItem
                     >
                        <Trash className="size-4 mr-2" />
                        Delete
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={onClickBlock} className=' bg-destructive/15'>
                        <Ban className='size-4 mr-2'/>
                        Block
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}