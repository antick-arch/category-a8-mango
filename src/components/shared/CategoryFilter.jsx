// import { getBooks } from '@/lib/data';
import Link from "next/link";
import React from "react";

const categories = [
  {
    id: 1,
    categoryName: "Story",
  },
  {
    id: 2,
    categoryName: "Science",
  },
  {
    id: 3,
    categoryName: "Tech",
  },
];
const CategoryFilter = async () => {
  // const books = await getBooks();
  return (
    <div className="flex flex-col space-y-5">
        <h2 className="text-center text-4xl font-bold">Category</h2>
        <Link className="p-3 bg-gray-200 w-full" href={'/all-books'}>All</Link>
      {categories.map((book) => (
        <Link key={book.id} href={`?category=${book.categoryName}`} className="p-3 bg-gray-200 w-full">
          {book.categoryName}
        </Link>
      ))}
    </div>
  );
};

export default CategoryFilter;
