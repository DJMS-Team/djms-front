import { z } from 'zod'
import { Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { OrderSchema, } from '@/schemas'
import style from '@/components/navbar.module.css'

import{
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'

type FormValues = z.input<typeof OrderSchema>

type Props = {
    id?: string
    defaultValues?: FormValues
    onSubmit: (data: FormValues) => void
    onDelete?: () => void
    disabled?: boolean 

}


export const OrderForm = ({id, defaultValues, onSubmit, onDelete, disabled}: Props) => {
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
             className='space-y-4 pt-4 z-50'>
                <FormField
                 name="status"
                 control={form.control}
                 render={({ field }) => (
                    <FormItem>
                        <FormLabel>
                            Estado
                        </FormLabel>
                        <FormControl>
                            <Input disabled={disabled} 
                             placeholder='RECEIVED | SENDING | PENDING | CANCELLED'
                             {...field} />
                        </FormControl>
                    </FormItem>
                 )}
                 />
                 
                <Button className={`${style.primaryBtn} w-full`} disabled={disabled}>
                    Guardar cambios
                </Button>
                
            </form>
        </Form>
    )
}