import BookCard from '@/components/shared/BookCard';
import React from 'react';

async function getBooks() {
  const res = await fetch(
    "https://category-a8-mango-coral.vercel.app/book.json",
  );
  const data = await res.json();
  return data;
}

const AllBooks = async() => {
    const books = await getBooks();
    return (
        <div className='container mx-auto my-5'>
            <h2 className='text-center text-4xl font-bold'>All Books</h2>
            <div className="max-w-[80%] mx-auto grid md:grid-cols-3 gap-5 my-5">
                {books.map(book => <BookCard key={book.id} book={book} />)}
            </div>
        </div>
    );
};

export default AllBooks;