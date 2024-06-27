import { useState } from 'react';
import { userApi } from "@/APIS";
import { z } from "zod";
import { UserSchema } from "@/schemas";
import { updateUser } from '@/actions/update-user';

type FormValues = z.input<typeof UserSchema>;

export const useUpdateUser = (id: string, onClose: { (): void; (): void; }, onUserUpdate: { (): void; }) => {
    const [updating, setUpdating] = useState(false);
    const [error, setError] = useState<null | any>(null);
    
    const onSubmit = async (values: FormValues) => {
        
        setUpdating(true);
        
        try {
            
            const user = await updateUser(id, values.name, values.password, values.email, values.photo_url, values.role, values.status);
            
            onClose();
            onUserUpdate();
        } catch (err) {
            setError(err);
        } finally {
            setUpdating(false);
        }
    };

    return { onSubmit, updating, error };
};
