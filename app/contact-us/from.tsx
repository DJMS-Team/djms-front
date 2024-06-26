'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}
    className='max-w-md w-full flex flex-col items-center justify-center space-y-4'
    >
        
      <input type="text" placeholder="Name" {...register("Name", {required: true})}
       className='w-full p-2 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="text" placeholder="Content" {...register} />

      <input type="submit" />
    </form>
  );
}