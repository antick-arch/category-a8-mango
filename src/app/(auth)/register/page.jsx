"use client";
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const RegistrationPage = () => {
  const handleGoogleSignIn = async () => {
      const data = await authClient.signIn.social({
        provider: "google",
      });
    };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const registerSubmit = async (data) => {
    const { name, email, password, photo } = data;
    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/login",
    });
    console.log(res, error);
    if(error){
      toast.error(error.message);
      return;
    }
    if(res){
      toast.success("registration successfull");
      window.location.assign("/login");
    }
  };
  return (
    <div className="container mx-auto min-h-[80vh] bg-gray-100 flex justify-center items-center mt-5">
      <div className="bg-white rounded-md p-18">
        <h2 className="text-center text-4xl font-semibold">
          Register your account
        </h2>
        <div className="flex w-full flex-col">
          <div className="divider"></div>
        </div>
        <form onSubmit={handleSubmit(registerSubmit)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend font-semibold text-xl text-[#403F3F]">
              Your Name
            </legend>
            <input
              type="text"
              className="input bg-[#F3F3F3] w-full"
              placeholder="Enter your email address"
              {...register("name", { required: "Name is required" })}
            />
            <p className="text-red-500">{errors.name && errors.name.message}</p>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend font-semibold text-xl text-[#403F3F]">
              Photo URL
            </legend>
            <input
              type="text"
              className="input bg-[#F3F3F3] w-full"
              placeholder="Enter your email address"
              {...register("photo", { required: "photo is required" })}
            />
            <p className="text-red-500">
              {errors.photo && errors.photo.message}
            </p>
          </fieldset>
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
              type="password"
              className="input bg-[#F3F3F3] w-full"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
            <p className="text-red-500">
              {errors.password && errors.password.message}
            </p>
          </fieldset>
          <button
            type="submit"
            className="btn w-full bg-[#403F3F] text-white mt-7"
          >
            Register
          </button>
        </form>
        <button
                  onClick={handleGoogleSignIn}
                  className="btn border-blue-400 text-blue-500 w-full my-3"
                >
                  <FaGoogle />
                  Sign In With Google
                </button>
      </div>
    </div>
  );
};

export default RegistrationPage;