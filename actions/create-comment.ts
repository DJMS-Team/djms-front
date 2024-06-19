'use server';

import * as z from 'zod';
import axios from 'axios';
import { CommentSchema } from '../schemas';

export const createComment = async (values: z.infer<typeof CommentSchema>) => {
    const validatedValues = CommentSchema.safeParse(values);
            
    if (!validatedValues.success) {
        return {  error: validatedValues.error.errors[0].message };
    }

    const { description, is_question, user_id, product_id  } = validatedValues.data;

   try {

        const response = await axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + `comments`,{
           description,
            is_question,
            user_id,
            product_id
        })

        if (response.status === 201) {
            return { success: 'Comment submitted' };
        } else {
            return { error: 'Failed to send comment' };
        }

   }    catch(error){
    if (axios.isAxiosError(error)) {
        return { error: error.response?.data?.message || 'Failed to send comment' };
    } else {
        return { error: 'An unexpected error occurred' };
    }
   }

}