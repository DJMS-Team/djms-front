"use client";

import { IconBrandGoogleFilled } from "@tabler/icons-react";
import { IconExclamationCircle } from "@tabler/icons-react";
import { IconMailCheck } from "@tabler/icons-react";
import { useState, useTransition } from "react";
import { register } from "../actions/register";

const FormRegister = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, setIsPending] = useTransition();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const values = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
      name: event.currentTarget.fullname.value,
    };

    setError("");
    setSuccess("");

    setIsPending(() => {
      register(values).then((data: any) => {
        setError(data.error);
        setSuccess(data.success);
        if (data.success) {
          event.currentTarget.reset();
        }
      });
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 flex-col w-full">
      <label htmlFor="email">Full name</label>
      <input
        id="fullname"
        name="fullname"
        type="text"
        placeholder="Jhon Doe"
        className="w-full p-[10px] bg-primary border border-secondary rounded-lg"
        disabled={isPending}
        required
      />
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
        <div className="text-white font-bold bg-danger rounded-lg px-2 py-1">
          <IconExclamationCircle /> {error}
        </div>
      )}
      {success && (
        <div className="text-white font-bold bg-green-500 rounded-log px-2 py-1">
          <IconMailCheck /> {success}
        </div>
      )}
      <button
        type="submit"
        className="bg-success mt-2 hover:bg-success-hover text-white w-full p-[10px] rounded-3xl"
        disabled={isPending}
      >
        Create an account
      </button>
      <div className="flex justify-center items-center gap-2">
        <div className="bg-secondary w-full h-[2px]"></div>
        <span>O</span>
        <div className="bg-secondary w-full h-[2px]"></div>
      </div>
      <button className="bg-secondary hover:bg-secondary-hover px-2 py-3 w-16 rounded-lg flex justify-center items-start mx-auto">
        <IconBrandGoogleFilled className="text-primary" />
      </button>
    </form>
  );
};

export default FormRegister;
