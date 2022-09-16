import PageHero from "../components/PageHero";
import ProductsList from "../components/ProductsList";
import Sort from "../components/Sort";

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
            <Sort />
            <ProductsList />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Shop;
