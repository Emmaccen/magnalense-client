"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ArrowDown } from "lucide-react";

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

interface FeaturedGridProps {
  products: Product[];
}

type FilterType = "ALL" | "MEN" | "WOMEN" | "KIDS";

const FeaturedGrid: React.FC<FeaturedGridProps> = ({ products }) => {
  const [filter, setFilter] = useState<FilterType>("ALL");

  // Filter tabs
  const filterTabs = [
    { id: "ALL", label: "ALL" },
    { id: "MEN", label: "MEN" },
    { id: "WOMEN", label: "WOMEN" },
    { id: "KIDS", label: "KIDS" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-10">
      <div className="mb-10 flex flex-col sm:flex-row justify-between items-center">
        <h2 className="text-xl font-medium text-gray-700">Featured</h2>
        <div className="flex space-x-2 mt-4 sm:mt-0">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as FilterType)}
              className={`px-4 py-1 rounded-full text-sm ${
                filter === tab.id
                  ? "bg-black text-white"
                  : "bg-white text-black border border-black"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-[#F9FAFB] p-4 rounded-lg">
            {product.label && (
              <div className="text-xs font-medium mb-2 bg-white w-20 p-2 rounded-full">
                {product.label}
              </div>
            )}
            <div className="h-32 sm:h-40 flex items-center justify-center mb-4">
<Image
                src={product.image}
                alt={product.name}
                width={180}
                height={180}
                className="max-h-full max-w-full object-contain"
                style={{ objectFit: "contain" }}
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

      <div className="flex justify-center mt-8">
        <button className="bg-black text-white px-4 py-2 rounded-full flex items-center text-sm">
  See more
  <span className="bg-white text-black rounded-full ml-2 p-1">
    <ArrowDown size={12} />
  </span>
</button>
      </div>
    </div>
  );
};

export default FeaturedGrid;
