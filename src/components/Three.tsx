// components/TrendingProducts.tsx
import React from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  imageUrl: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Haru Single Sofa Bed",
    category: "Furniture",
    price: "$250.00",
    imageUrl:
      "/images/b632811b-d0ff-4f92-b45e-6066b86c722c-removebg-preview.png",
  },
  {
    id: 1,
    name: "Haru Single Sofa Bed",
    category: "Furniture",
    price: "$250.00",
    imageUrl:
      "/images/6a0e12f3-3412-4cf5-a40e-d1d511b22ffa-removebg-preview.png",
  },
  {
    id: 1,
    name: "Haru Single Sofa Bed",
    category: "Furniture",
    price: "$250.00",
    imageUrl:
      "/images/383efc70-799c-415e-b15a-de716dc12e1b-removebg-preview.png",
  },
  {
    id: 1,
    name: "Haru Single Sofa Bed",
    category: "Furniture",
    price: "$250.00",
    imageUrl:
      "/images/606b6cfc-655c-4ecb-a875-9b777dcb5322-removebg-preview.png",
  },
  {
    id: 1,
    name: "Haru Single Sofa Bed",
    category: "Furniture",
    price: "$250.00",
    imageUrl:
      "/images/606b6cfc-655c-4ecb-a875-9b777dcb5322-removebg-preview.png",
  },
  {
    id: 1,
    name: "Haru Single Sofa Bed",
    category: "Furniture",
    price: "$250.00",
    imageUrl:
      "/images/6a0e12f3-3412-4cf5-a40e-d1d511b22ffa-removebg-preview.png",
  },
  {
    id: 1,
    name: "Haru Single Sofa Bed",
    category: "Furniture",
    price: "$250.00",
    imageUrl:
      "/images/b632811b-d0ff-4f92-b45e-6066b86c722c-removebg-preview.png",
  },
  {
    id: 1,
    name: "Haru Single Sofa Bed",
    category: "Furniture",
    price: "$250.00",
    imageUrl:
      "/images/606b6cfc-655c-4ecb-a875-9b777dcb5322-removebg-preview.png",
  },
];

const TrendingProducts: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-32 ">
      <h2 className="text-3xl font-semibold mb-8 text-center">New Trending</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg text-center bg-second"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="mb-4 mx-auto"
            />
            <h3 className="text-xl font-medium">{product.name}</h3>
            <p className="text-gray-500">{product.category}</p>
            <p className="text-lg font-semibold">
              {product.originalPrice ? (
                <>
                  <span className="line-through mr-2">
                    {product.originalPrice}
                  </span>
                  {product.price}
                </>
              ) : (
                product.price
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
