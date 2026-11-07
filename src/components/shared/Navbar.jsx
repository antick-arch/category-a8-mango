"use client";
import Image from "next/image";
import React from "react";
import navLogo from "@/assets/booklent-logo.svg";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(user);
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="container mx-auto navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="font-semibold text-[1rem]">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="font-semibold text-[1rem]">
                <Link href={"/all-books"}>All Books</Link>
              </li>
              <li className="font-semibold text-[1rem]">
                <Link href={"/profile"}>My Profile</Link>
              </li>
            </ul>
          </div>
          <Link href={"/"}>
            <Image
              src={navLogo}
              height={80}
              width={"auto"}
              alt="navbar logo"
              loading="eager"
            ></Image>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="font-semibold text-[1rem]">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="font-semibold text-[1rem]">
              <Link href={"/all-books"}>All Books</Link>
            </li>
            <li className="font-semibold text-[1rem]">
              <Link href={"/profile"}>My Profile</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          {isPending ? (
            <span className="loading loading-spinner loading-xl"></span>
          ) : user ? (
            <div className="flex gap-2 items-center">
              <h2>
                Welcome,{" "}
                <span className="text-xl font-semibold text-red-500">
                  {user.name}
                </span>
              </h2>
              <Image
                className="rounded-full"
                src={user?.image || userImg}
                width={41}
                height={41}
                alt="user logo"
              />
              <button
                onClick={async () => await authClient.signOut()}
                className="btn btn-primary"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link href={"/login"} className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
