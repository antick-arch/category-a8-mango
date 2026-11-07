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
        <div>
            all books section
        </div>
    );
};

export default AllBooks;