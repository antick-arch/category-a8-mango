"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [isShowPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const loginSubmit = async (data) => {
    const { email, password } = data;
    const { data: res, error } = await authClient.signIn.email({
      email: email, 
      password: password, 
      rememberMe: true, 
      callbackURL: "/", 
    });
    if(error){
      toast.error(error.message);
    }
    if(res){
      toast.success("login successfull");
    }
  };
  return (
    <div className="container mx-auto min-h-[80vh] bg-gray-100 flex justify-center items-center mt-5">
      <div className="bg-white rounded-md p-18">
        <h2 className="text-center text-4xl font-semibold">
          Login your account
        </h2>
        <div className="flex w-full flex-col">
          <div className="divider"></div>
        </div>
        <form onSubmit={handleSubmit(loginSubmit)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend font-semibold text-xl text-[#403F3F]">
              Email Address
            </legend>
            <input
              type="email"
              className="input bg-[#F3F3F3] w-full"
              placeholder="Enter your email address"
              {...register("email", { required: "Email is required" })}
            />
            <p className="text-red-500">
              {errors.email && errors.email.message}
            </p>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend font-semibold text-xl text-[#403F3F]">
              Password
            </legend>
            <input
              type={isShowPassword ? "text" : "password"}
              className="input bg-[#F3F3F3] absolute"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
            {isShowPassword ? <FaRegEye onClick={()=>setShowPassword(!isShowPassword)} className="relative top-2 left-82 text-2xl"/> : <FaRegEyeSlash onClick={()=>setShowPassword(!isShowPassword)} className="relative top-2 left-82 text-2xl"/>}
            <p className="text-red-500">
              {errors.password && errors.password.message}
            </p>
          </fieldset>
          <button
            type="submit"
            className="btn w-full bg-[#403F3F] text-white mt-7"
          >
            Login
          </button>
        </form>
        <p className="mt-7">
          Dont’t Have An Account ?{" "}
          <Link className="text-red-500" href={"/register"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;