import ProductCart from "@/components/Products/ProductCart";

const products = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  const products = await res.json();
  // console.log(products);
  return (
    <div>
      <h1 className="text-center text-4xl">All Products..</h1>
      <div className="grid grid-cols-4 gap-1">
        {products.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default products;
