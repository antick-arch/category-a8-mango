import BookCard from "@/components/shared/BookCard";
import CategoryFilter from "@/components/shared/CategoryFilter";
import { getBooks } from "@/lib/data";
import React from "react";

const AllBooks = async ({ searchParams }) => {
  const { category } = await searchParams;
  const books = await getBooks();
  const filteredCategory = category
    ? books.filter(
        (book) => book.category?.toLowerCase() == category?.toLowerCase(),
      )
    : books;
  console.log(filteredCategory);
  return (
    <div className="container mx-auto my-5 md:flex justify-between">
      <div className="my-5 flex-1 p-5  md:p-0"> 
        <CategoryFilter></CategoryFilter>
      </div>
      <div className="flex-4">
        <h2 className="text-center text-4xl font-bold">All Books</h2>
        <div className="max-w-[80%] mx-auto grid md:grid-cols-3 gap-5 my-5">
          {filteredCategory.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
