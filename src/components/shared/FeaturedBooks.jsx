import { getBooks } from "@/lib/data";
import Link from "next/link";
import BookCard from "@/components/shared/BookCard";
import React from "react";

const FeaturedBooks = async() => {
    const books = await getBooks();
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold my-5">Featured Books</h1>
      <div className="max-w-[70%] mx-auto grid md:grid-cols-4 gap-5 my-5">
        {books.slice(0, 8).map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <div className="flex justify-center items-center mb-5">
        <Link
          href={"/all-books"}
          className="btn btn-soft btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-md xl:btn-md"
        >
          More Books
        </Link>
      </div>
    </div>
  );
};

export default FeaturedBooks;
