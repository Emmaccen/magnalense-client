"use client";

import React, { useState } from "react";
import Image from "next/image";

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
    <div className="mt-14 py-10 bg-gray-50">
      <div className="max-w-6xl w-full mx-auto px-4">
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-center">
          <h2 className="text-xl font-bold text-gray-500">
            Customers Favorites
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-50 p-4 rounded-lg">
              {product.label && (
                <div className="text-xs font-medium mb-2 bg-[#F9FAFB] w-20 p-2 rounded-full">
                  {product.label}
                </div>
              )}
              <div className="h-32 sm:h-40 flex items-center justify-center mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={160}
                  height={160}
                  className="max-h-full max-w-full object-contain"
                  style={{ objectFit: "contain" }}
                />
              </div>
                 <div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-gray-700">{product.name}</h3>
                  </div>

                  <div className="">
                    <span className="font-medium">${product.price}</span>
                  </div>
                </div>

                <div className="flex space-x-3 mt-2">
                  {product.colors.map((colorOption) => (
                    <button
                      key={colorOption.id}
                      className={`w-12 h-12 rounded-full ${colorOption.color === "white"
                        ? "bg-white border-4 border-[#D1D5DB]"
                        : colorOption.color === "blue"
                          ? "bg-blue-600 border-4 border-[#D1D5DB]"
                          : "bg-gray-200"
                        } ${product.defaultColor === colorOption.id
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
    </div>
  );
};

export default CustomersFavoritesGrid;
