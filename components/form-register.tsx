"use client";

import { IconBrandGoogleFilled } from "@tabler/icons-react";
import { IconExclamationCircle } from "@tabler/icons-react";
import { IconMailCheck } from "@tabler/icons-react";
import { useState, useTransition } from "react";
import { uploadImageCloudinary } from "../cloudinary/index";
import { useRegister } from "@/hooks/auth/useRegister";
import { useRouter } from 'next/navigation';
import Cookies from "js-cookie";

const FormRegister = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(
    ""
  );
  const { register } = useRegister();
  const router = useRouter();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const imageFile = formData.get("input_file") as File;
    let [status, data] = [false, ""];

    if (imageFile) {
      [status, data] = await uploadImageCloudinary(imageFile);
    }

    const values = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      name: formData.get("fullname") as string,
      photo_url: data || "",
    };

    setError("");
    setSuccess("");

    startTransition(() => {
      register(
        values.name,
        values.password,
        values.email,
        values.photo_url,
        "USER"
      )
        .then((data: any) => {
          setError(data.error);
          setSuccess(data.success);
          setImagePreview("");
        })
        .catch((e: Error) => setError(e.message));
    });

    const currentUser = Cookies.get("currentUser");
    if (currentUser) {
      router.push("/auth/login");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 flex-col w-full">
      <label htmlFor="input_file" id="drop-area" className="flex-grow">
        <input
          type="file"
          id="input_file"
          name="input_file"
          accept=".jpg"
          hidden
          onChange={handleFileChange}
        />
        <div
          className="img-view w-[150px] h-full min-h-[150px] mx-auto border-2 border-black border-dashed rounded-full flex justify-center items-center flex-col gap-3 bg-gray-100 transition-all duration-200 ease-linear bg-cover"
          style={{ backgroundImage: `url(${imagePreview})` }}
        ></div>
        {imagePreview ? (
          <p className="text-white text-center mt-5">Uploaded image</p>
        ) : (
          <p className="text-black text-center mt-5 py-2 bg-white rounded-lg w-auto">
            Click to upload image
          </p>
        )}
      </label>
      <label htmlFor="fullname">Full name</label>
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
