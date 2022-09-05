import FeaturedList from "../components/FeaturedList";
import FruitCarousel from "../components/FruitCarousel";
import Hero from "../components/Hero";

function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      <Hero />
      <FruitCarousel />
      <FeaturedList />
      {/* discaunt banner */}
      {/* latest products */}
      {/* blog */}
      {/* footer */}
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;
