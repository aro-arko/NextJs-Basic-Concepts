const DynamicProduct = async ({ params, searchParams }) => {
  const productId = await params;
  console.log(productId);
  console.log(await searchParams);
  return (
    <div>
      <h1>This is DynamicProduct component</h1>
    </div>
  );
};

export default DynamicProduct;
