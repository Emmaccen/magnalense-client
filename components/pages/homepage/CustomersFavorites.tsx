"use client";

import React, { useState } from "react";

// Define types for our component
interface ProductColor {
  id: string;
  color: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  label: "Best Seller" | "Flash Sale" | "";
  colors: ProductColor[];
  defaultColor: string;
}

interface CustomersFavoritesGridProps {
  products: Product[];
}

const CustomersFavoritesGrid: React.FC<CustomersFavoritesGridProps> = ({
  products,
}) => {
  const [] = useState<"ALL" | "MEN" | "WOMEN" | "KIDS">("ALL");

  return (
    <div className="mt-14 py-10 bg-gray-200">
      <div className="max-w-6xl w-full mx-auto px-4">
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-center">
          <h2 className="text-xl font-medium text-gray-700">
            Customers Favorites
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-50 p-4 rounded-lg">
              {product.label && (
                <div className="text-xs font-medium mb-2 bg-gray-200 w-20 p-2 rounded-full">
                  {product.label}
                </div>
              )}
              <div className="h-32 sm:h-40 flex items-center justify-center mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-gray-700">{product.name}</h3>
                  <div className="flex space-x-1 mt-2">
                    {product.colors.map((colorOption) => (
                      <button
                        key={colorOption.id}
                        className={`w-6 h-6 rounded-full ${
                          colorOption.color === "white"
                            ? "bg-white border border-gray-300"
                            : colorOption.color === "blue"
                            ? "bg-blue-600"
                            : "bg-gray-300"
                        } ${
                          product.defaultColor === colorOption.id
                            ? "ring-2 ring-offset-2 ring-gray-400"
                            : ""
                        }`}
                        aria-label={`Select ${colorOption.color} color`}
                      ></button>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-medium">${product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomersFavoritesGrid;
