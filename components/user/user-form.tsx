import { z } from 'zod'
import { Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { RegisterSchema, UserSchema } from '@/schemas'

import{
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'

type FormValues = z.input<typeof UserSchema>

type Props = {
    id?: string
    defaultValues?: FormValues
    onSubmit: (data: FormValues) => void
    onDelete?: () => void
    disabled?: boolean 

}


export const UserForm = ({id, defaultValues, onSubmit, onDelete, disabled}: Props) => {
    const form = useForm<FormValues>({
        defaultValues,
       
    })

    const handleSubmit = (values: FormValues) => {
        onSubmit(values)
    }

    const handleDelete = () => {
        onDelete?.()
    }


    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}
             className='space-y-4 pt-4'>
                <FormField
                 name="name"
                 control={form.control}
                 render={({ field }) => (
                    <FormItem>
                        <FormLabel>
                            Name
                        </FormLabel>
                        <FormControl>
                            <Input disabled={disabled} 
                             placeholder='juan'
                             {...field} />
                        </FormControl>
                    </FormItem>
                 )}
                 />
                 <FormField
                 name="email"
                 control={form.control}
                 render={({ field }) => (
                    <FormItem>
                        <FormLabel>
                            Email
                        </FormLabel>
                        <FormControl>
                            <Input disabled={disabled} 
                             placeholder='juan@juanc.p'
                             {...field} />
                        </FormControl>
                    </FormItem>
                 )}
                 />
                 <FormField
                 name="role"
                 control={form.control}
                 render={({ field }) => (
                    <FormItem>
                        <FormLabel>
                            Role
                        </FormLabel>
                        <FormControl>
                            <Input disabled={disabled} 
                             placeholder='admin'
                             {...field} />
                        </FormControl>
                    </FormItem>
                 )}
                 />
                 <FormField
                 name="status"
                 control={form.control}
                 render={({ field }) => (
                    <FormItem>
                        <FormLabel>
                            Status
                        </FormLabel>
                        <FormControl>
                            <Input disabled={disabled} 
                             placeholder='ACTIVE | INACTIVE | DELETED'
                             {...field} />
                        </FormControl>
                    </FormItem>
                 )}
                 />
                <Button className='w-full' disabled={disabled}>
                    Save Changes
                </Button>
                {!!id && <Button
                 type='button'
                 disabled={disabled}
                 onClick={handleDelete}
                 className='w-full'
                 variant='outline'>
                    <Trash className='size-4 mr-2' />
                    Delete User
                </Button>}
            </form>
        </Form>
    )
}