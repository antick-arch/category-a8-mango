import Banner from "@/components/shared/Banner";
import CategorySection from "@/components/shared/Testimonials";
import FeaturedBooks from "@/components/shared/FeaturedBooks";
import HowItWorks from "@/components/shared/HowItWorks";
import Marque from "@/components/shared/Marque";

export default async function Home() {
  return (
    <div>
      <Banner></Banner>
      <Marque></Marque>
      <FeaturedBooks></FeaturedBooks>
      <HowItWorks></HowItWorks>
      <CategorySection></CategorySection>
    </div>
  );
}
