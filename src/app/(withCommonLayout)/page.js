import ProductCart from "@/components/Products/ProductCart";
import Link from "next/link";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    next: {
      revalidate: 5,
    },
  });
  const products = await res.json();
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center text-4xl">Home Component</h1>
      <div className="grid grid-cols-3 gap-1">
        {products.slice(0, 3).map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center">
        <Link href="/products">
          <button className="btn bg-blue-600 px-4 py-2 rounded-md">
            All Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
