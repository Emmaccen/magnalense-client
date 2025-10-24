"use client";

import Image from "next/image";
import React from "react";

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

interface ProductGridProps {
  products: Product[];
}

const ProductCard: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-10 bg-white">
      {/* Header */}
      <div className="mb-10 flex flex-col sm:flex-row justify-between items-center">
        <h2 className="text-[28px] lg:text-[32px] font-bold text-gray-500">
          You might also like
        </h2>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-[#F9FAFB] p-4 rounded-lg">
            {/* Product label */}
            {product.label && (
              <div className="text-xs font-medium mb-2 bg-white w-20 p-2 rounded-full">
                {product.label}
              </div>
            )}

            {/* Product image */}
            <div className="h-32 sm:h-40 flex items-center justify-center mb-4">
              <Image
                src={product.image}
                alt={product.name}
                width={180}
                height={180}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Product details */}
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-gray-700">{product.name}</h3>
                <span className="font-medium">${product.price}</span>
              </div>

              {/* Color options */}
              <div className="flex space-x-3 mt-2">
                {product.colors.map((colorOption) => (
                  <button
                    key={colorOption.id}
                    className={`w-12 h-12 rounded-full ${
                      colorOption.color === "white"
                        ? "bg-white border-4 border-[#D1D5DB]"
                        : colorOption.color === "blue"
                        ? "bg-blue-600 border-4 border-[#D1D5DB]"
                        : "bg-gray-200"
                    } ${
                      product.defaultColor === colorOption.id
                        ? "border-4 border-[#6B7280]"
                        : ""
                    }`}
                    aria-label={`Select ${colorOption.color} color`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
