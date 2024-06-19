import * as z from 'zod';


export const RegisterSchema = z.object({
    email: z.string().email({
        message: 'Please enter a valid email address'
    }),
    password: z.string().min(6,{

        message: 'Password must be at least 6 characters long'
    }),
    name: z.string().min(2,{
        message: 'Name is required'
    })
    
})
export const LoginSchema = z.object({

    email: z.string().email({
        message: 'Please enter a valid email address'
    }),
    password: z.string().min(6,{

        message: 'Password must be at least 6 characters long'
    })

})

export const UserSchema = z.object({
    email: z.string().email({
        message: 'Please enter a valid email address'
    }),
    role: z.string(),
    name: z.string().min(2,{
        message: 'Name is required'
    }),
    password: z.string().min(6,{
        message: 'Password must be at least 6 characters long'
    }),
    photo_url: z.string()
    
})