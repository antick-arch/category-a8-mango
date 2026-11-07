import DetailsCard from '@/components/shared/DetailsCard';
import React from 'react';

async function getBooks() {
  const res = await fetch(
    "https://category-a8-mango-coral.vercel.app/book.json",
  );
  const data = await res.json();
  return data;
}

const BookDetails = async({params}) => {
    const {id} = await params;
    const books = await getBooks();
    const expectedBook = books.find(book => String(book.id) === String(id));

    return (
        <div>
         
            <DetailsCard key={expectedBook.id} expectedBook={expectedBook}></DetailsCard>
          
        </div>
    );
};

export default BookDetails;