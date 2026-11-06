import Banner from "@/components/shared/Banner";
import BookCard from "@/components/shared/BookCard";
import Marque from "@/components/shared/Marque";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Marque></Marque>
      <div className="container mx-auto">
        <h2>Book Section</h2>
        
      </div>
    </div>
  );
}
