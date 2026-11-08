export async function getBooks() {
  const res = await fetch(
    "https://category-a8-mango-coral.vercel.app/book.json",
  );
  const data = await res.json();
  return data;
}