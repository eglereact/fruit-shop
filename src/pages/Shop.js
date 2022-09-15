import PageHero from "../components/PageHero";
import ProductsList from "../components/ProductsList";

function Shop() {
  return (
    <main>
      <PageHero
        title="Shop"
        image="https://wallpaperaccess.com/full/2847339.jpg"
      />
      <div className="max-w-6xl mx-auto">
        <div className="mx-4 grid md:grid-cols-4">
          Filters
          <div className="col-span-3">
            <h1>Sort</h1>
            <ProductsList />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Shop;
