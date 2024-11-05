import React, { useEffect, useState } from "react";
import SellCard from "./sellCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://api.example.com/products"); // Replace with your API endpoint
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center">selling products...</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">sell List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <SellCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
