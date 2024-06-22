"use client";

import { IconBrandGoogleFilled } from "@tabler/icons-react";
import { IconExclamationCircle } from "@tabler/icons-react";
import { IconCheck } from "@tabler/icons-react";
import { use, useState, useTransition } from "react";
import { useRouter } from 'next/navigation';
import { login } from "@/actions/login";
import { useLogin } from "@/hooks/auth/useLogin";
import Cookies from "js-cookie";

const FormLogin = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, setIsPending] = useTransition();
  const {login} = useLogin();
  const router = useRouter();

  const handleGoogleSubmit = () =>{
    window.location.href = `http://localhost:3001/auth/google/callback`
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> =async (event) => {
    event.preventDefault();

    const values = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    setError("");
    setSuccess("");
    /*
    setIsPending(() => {
      login(values).then((data: any) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });*/

    const loginResponse = await login(values.email, values.password)
      .catch((e:Error) => alert(e))

    const currentUser = Cookies.get("currentUser");
    const role = currentUser ? JSON.parse(currentUser).role : currentUser ? JSON.parse(String(currentUser)).role : null;
    console.log(role);
    if(role === 'ADMIN'){
      console.log()
      router.push("/admin");
    }else if(role === 'USER'){
      
      router.push("/");
    }
  };
  

  return (
    <>
    <form onSubmit={handleSubmit} className="flex gap-3 flex-col w-full">
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="jhonDoe@gmail.com"
        className="w-full p-[10px] bg-primary border border-secondary rounded-lg"
        disabled={isPending}
        required
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="*******"
        className="w-full p-[10px] bg-primary border border-secondary rounded-lg"
        disabled={isPending}
        required
      />
      {error && (
        <div className="text-white font-bold bg-danger rounded-lg px-2 py-1 flex gap-2">
          <IconExclamationCircle /> {error}
        </div>
      )}
      {success && (
        <div className="text-white font-bold bg-green-500 rounded-log px-2 py-1 flex gap-2">
          <IconCheck /> {success}
        </div>
      )}
      <button
        type="submit"
        className="bg-success mt-2 hover:bg-success-hover text-white w-full p-[10px] rounded-3xl"
        disabled={isPending}
      >
        Log in
      </button>
      <div className="flex justify-center items-center gap-2">
        <div className="bg-secondary w-full h-[2px]"></div>
        <span>O</span>
        <div className="bg-secondary w-full h-[2px]"></div>
      </div>
      
    </form>
    <button className="bg-secondary hover:bg-secondary-hover px-2 py-3 w-16 rounded-lg flex justify-center items-start mx-auto" onClick={handleGoogleSubmit}>
        <IconBrandGoogleFilled className="text-primary" />
    </button>
    </>
  );
};

export default FormLogin;