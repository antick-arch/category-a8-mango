import Banner from "@/components/shared/Banner";
import BookCard from "@/components/shared/BookCard";
import Marque from "@/components/shared/Marque";

async function getBooks() {
  const res = await fetch(
    "https://category-a8-mango-coral.vercel.app/book.json",
  );
  const data = await res.json();
  return data;
}

export default async function Home() {
  const books = await getBooks();
  console.log(books);
  return (
    <div>
      <Banner></Banner>
      <Marque></Marque>
      <div className="container mx-auto"> 
            <h1 className="text-4xl font-bold my-5">Books List</h1>
            <div className="max-w-[80%] mx-auto grid grid-cols-3 gap-5 my-5">
                {books.slice(0,6).map(book => <BookCard key={book.id} book={book} />)}
            </div>
            <div className="flex justify-center items-center mb-5">
              <button className="btn btn-soft btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">More Books</button>
            </div>
        </div>
    </div>
  );
}
