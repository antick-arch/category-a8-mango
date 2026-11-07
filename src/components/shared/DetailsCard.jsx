import { Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";

const DetailsCard = ({ expectedBook }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-sm container mx-auto my-5 ">
      <figure>
        <Image
          src={expectedBook.image_url}
          alt="details image"
          height={150}
          width={150}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title sm:text-2xl">{expectedBook.title}</h2>
        <p className="text-gray-500 sm:text-xl">{expectedBook.description}</p>
        <p className="sm:text-xl">Author: <span className="font-semibold text-purple-500 italic">{expectedBook.author}</span></p>
        <Chip className="rounded-full bg-success-soft px-3 text-success-soft-foreground">
          {expectedBook.category}
        </Chip>
        <h2 className="sm:text-xl">Available Quantity: {expectedBook.available_quantity}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Borrow This Book</button>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
