import DetailsCard from "@/components/shared/DetailsCard";
import { getBooks } from "@/lib/data";
import React from "react";


const BookDetails = async ({ params }) => {
  const { id } = await params;
  const books = await getBooks();
  const expectedBook = books.find((book) => String(book.id) === String(id));

  return (
    <div>
      <DetailsCard
        key={expectedBook.id}
        expectedBook={expectedBook}
      ></DetailsCard>
    </div>
  );
};

export default BookDetails;
