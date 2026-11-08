import BookCard from "@/components/shared/BookCard";
import { getBooks } from "@/lib/data";
import React from "react";

const AllBooks = async () => {
  const books = await getBooks();
  return (
    <div className="container mx-auto my-5">
      <h2 className="text-center text-4xl font-bold">All Books</h2>
      <div className="max-w-[80%] mx-auto grid md:grid-cols-3 gap-5 my-5">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
