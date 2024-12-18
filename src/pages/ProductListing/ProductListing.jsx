import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import products from "../../data.js";

const ProductListing = () => {
  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    const { category } = product;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <>
      <div className="container">
        {Object.keys(groupedProducts).map((category) => (
          <div key={category}>
            <h2>{category}</h2>
            <div
              className="product-listing"
            >
              {groupedProducts[category].map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductListing;
