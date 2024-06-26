import { useState } from 'react';
import { orderApi, userApi } from "@/APIS";
import { z } from "zod";
import { OrderSchema } from "@/schemas";
import { updateUser } from '@/actions/update-user';

type FormValues = z.input<typeof OrderSchema>;

export const useUpdateOrder = (id: string, onClose: { (): void; (): void; }, onOrderUpdate: { (): void; }) => {
    const [updating, setUpdating] = useState(false);
    const [error, setError] = useState<null | any>(null);
    
    const onSubmit = async (values: FormValues) => {
        console.log('useUpdateOrder')
        setUpdating(true);
        
        try {
            console.log('Updating order:', values);
            const order = await orderApi.updateOrders(id, values.status, values.date, values.customer_id, values.payment_method_id);
            console.log('Updated order:', order);
            onClose();
            onOrderUpdate();
        } catch (err) {
            setError(err);
        } finally {
            setUpdating(false);
        }
    };

    return { onSubmit, updating, error };
};
