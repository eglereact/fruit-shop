import BlogList from "../components/BlogList";
import DiscountAdd from "../components/DiscountAdd";
import FeaturedList from "../components/FeaturedList";
import FruitCarousel from "../components/FruitCarousel";
import Hero from "../components/Hero";
import { discount } from "../data.js";

function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      <Hero />
      <FruitCarousel />
      <FeaturedList />
      <div className="grid md:grid-cols-2 gap-6 mx-4">
        {discount.map((dis) => (
          <DiscountAdd
            key={dis.id}
            img={dis.img}
            color={dis.color}
            title={dis.title}
            text={dis.text}
            link={dis.link}
          />
        ))}
      </div>
      <BlogList />
      {/* footer */}
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;
