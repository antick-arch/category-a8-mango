import React from "react";
import Marquee from "react-fast-marquee";

async function getBooks() {
  const res = await fetch(
    "https://category-a8-mango-coral.vercel.app/book.json",
  );
  const data = await res.json();
  return data;
}

const Marque = async () => {
  const books = await getBooks();
  console.log(books);
  return (
    <div className="container mx-auto">
      <Marquee speed={100}>
        {books.map((book) => (<h2 className="space-x-3 "><span className="ml-3 text-red-400">New Arrivals: {book.title}</span> | Special Discount on Memberships...</h2>))}
        
      </Marquee>
    </div>
  );
};

export default Marque;
