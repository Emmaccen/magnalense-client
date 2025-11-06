"use client";

import { Check, ChevronRight, Glasses, Shield, Truck, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Review from "@/components/pages/Reviews" 
import FAQ from "@/components/pages/FAQ"

type ProductView = "front" | "side";

export default function ProductDetailResponsive() {
  const [activeTab, setActiveTab] = useState<"details" | "reviews" | "faqs">(
    "details"
  );
  const [isMobile, setIsMobile] = useState(false);
  const [, setIsTablet] = useState(false);

  const [currentView, setCurrentView] = useState<ProductView>("front");
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-4 md:py-6">
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-4 md:mb-6">
        <div className="flex justify-between overflow-x-auto">
          <button
            onClick={() => setActiveTab("details")}
            className={`px-3 py-2 md:px-4 md:py-2 text-sm font-medium whitespace-nowrap ${
              activeTab === "details"
                ? "border-b-2 border-black"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {isMobile ? "Product Details" : "Product Description"}
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-3 py-2 md:px-4 md:py-2 text-sm font-medium whitespace-nowrap ${
              activeTab === "reviews"
                ? "border-b-2 border-black"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Rating & Reviews
          </button>
          <button
            onClick={() => setActiveTab("faqs")}
            className={`px-3 py-2 md:px-4 md:py-2 text-sm font-medium whitespace-nowrap ${
              activeTab === "faqs"
                ? "border-b-2 border-black"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            FAQs
          </button>
        </div>
      </div>

      {activeTab === "details" && (
        <div>
          <div className="border-gray-200 rounded-2xl p-4 md:p-6 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              {/* Product Info Column */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-base md:text-lg font-bold">
                    Features & Size
                  </h2>
                  <div className="flex items-center">
                    <span className="text-gray-500">SKU:</span>
                    <span className="ml-2 font-medium">XL0063-01</span>
                  </div>

                  <div className="flex items-center">
                    <span className="text-gray-500">Shape:</span>
                    <span className="ml-2 font-medium">Cat eye</span>
                  </div>

                  <div className="flex items-center">
                    <span className="text-gray-500">Size:</span>
                    <span className="ml-2 font-medium">Medium 56-46-137</span>
                  </div>

                  <div className="flex items-center">
                    <span className="text-gray-500">Materials:</span>
                    <span className="ml-2 font-medium">TR90</span>
                  </div>

                  <div className="flex items-center">
                    <span className="text-gray-500">Weight:</span>
                    <span className="ml-2 font-medium">21.3g</span>
                  </div>

                  <div className="flex items-center">
                    <span className="text-gray-500">
                      Anti-Scratch lens coating
                    </span>
                  </div>
                </div>

                <div className="flex items-center pt-2">
                  <span className="text-gray-600">
                    Not sure about your size?
                  </span>
                  <button
                    onClick={() => setShowSizeGuide(true)}
                    className="ml-2 text-gray-800 font-medium flex items-center hover:underline"
                  >
                    Size Guide <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>

              {/* Product Image Column */}
              <div className="relative">
                <div className="relative aspect-square md:aspect-auto md:h-[350px] w-full">
                  {currentView === "front" && (
                    <div className="relative h-full w-full">
                      <Image
                        src="/images/front-view.png"
                        alt="Eyeglasses front view"
                        fill
                        className="object-contain"
                        priority
                      />

                      {/* Measurement Annotations */}
                      <div className="absolute inset-0">
                        {/* Height Measurement */}
                        {/* <div className="absolute left-[20%] top-[10%] h-[80%] flex flex-col items-center">
                        <div className="h-full border-l border-dashed border-gray-400"></div>
                        <div className="absolute top-[-20px] whitespace-nowrap text-xs text-gray-600">42mm</div>
                        <div className="absolute bottom-[-20px] whitespace-nowrap text-xs text-gray-600"></div>
                      </div> */}

                        {/* Bridge Width Measurement */}
                        {/* <div className="absolute left-[40%] top-[15%] w-[10%]">
                        <div className="w-full border-t border-dashed border-gray-400"></div>
                        <div className="absolute top-[-20px] left-[50%] transform -translate-x-1/2 whitespace-nowrap text-xs text-gray-600">
                          19 mm
                        </div>
                      </div> */}

                        {/* Lens Width Measurement */}
                        {/* <div className="absolute right-[20%] top-[15%] w-[20%]">
                        <div className="w-full border-t border-dashed border-gray-400"></div>
                        <div className="absolute top-[-20px] left-[50%] transform -translate-x-1/2 whitespace-nowrap text-xs text-gray-600">
                          49 mm
                        </div>
                      </div> */}

                        {/* Total Width Measurement */}
                        {/* <div className="absolute left-[10%] bottom-[20%] w-[80%]">
                        <div className="w-full border-t border-dashed border-gray-400"></div>
                        <div className="absolute bottom-[-20px] left-[50%] transform -translate-x-1/2 whitespace-nowrap text-xs text-gray-600">
                          124mm
                        </div>
                      </div> */}
                      </div>
                    </div>
                  )}

                  {currentView === "side" && (
                    <div className="relative h-full w-full flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <Image
                          src="/images/side-view.png"
                          alt="Eyeglasses front view"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* View Selector */}
                <div className="flex justify-between space-x-6">
                  <div>
                    <button
                      onClick={() => setCurrentView("front")}
                      className={`pb-1 px-2 ${
                        currentView === "front"
                          ? "border-b-2 border-gray-800 font-medium"
                          : "text-gray-500"
                      }`}
                    >
                      Front
                    </button>
                    <button
                      onClick={() => setCurrentView("side")}
                      className={`pb-1 px-2 ${
                        currentView === "side"
                          ? "border-b-2 border-gray-800 font-medium"
                          : "text-gray-500"
                      }`}
                    >
                      Side
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => setShowSizeGuide(true)}
                      className="pb-1 px-2 text-gray-500 hover:text-gray-800 "
                    >
                      Size Guide
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-20">
              {/* Product Info Column */}
              <div className="space-y-4">
                <div>
                  <h2 className="text-base md:text-lg font-bold">
                    Description
                  </h2>
                </div>

                <h3 className="text-lg md:text-xl font-bold mb-3">
                  About Juliet Stylish
                </h3>
                <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                  <p>
                    Rich and stylish Isabella butterfly frame glasses take on
                    the retro tortoise style for an irresistible combination.
                    This full-rim design for women is perfect for a savvy pair
                    of everyday eyeglasses that will take you from the office to
                    anywhere else your busy life leads you. The glossy finish
                    also looks fabulous for a fashionable pair of sunglasses.
                  </p>
                </div>
              </div>

              {/* Product Image Column */}
              <div className="relative">
                <div className="relative aspect-square md:aspect-auto md:h-[350px] w-full">
                  <div className="relative h-full w-full">
                    <Image
                      src="/images/Frame-J.png"
                      alt="Eyeglasses front view"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Size Guide Modal */}
          {showSizeGuide && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
                <div className="p-4 border-b flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Size Guide</h2>
                  <button
                    onClick={() => setShowSizeGuide(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg mb-2">
                        How to Read Your Frame Size
                      </h3>
                      <p className="text-gray-600">
                        Frame sizes are typically displayed as three numbers,
                        for example: 56-46-137
                      </p>
                      <ul className="mt-2 space-y-2 text-gray-600">
                        <li>
                          <span className="font-medium">56:</span> Lens width in
                          millimeters
                        </li>
                        <li>
                          <span className="font-medium">46:</span> Bridge width
                          in millimeters
                        </li>
                        <li>
                          <span className="font-medium">137:</span> Temple
                          length in millimeters
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg mb-2">
                        Size Categories
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                        <div className="border rounded p-3 text-center">
                          <div className="font-medium">Small</div>
                          <div className="text-sm text-gray-600 mt-1">
                            48-53mm lens width
                          </div>
                        </div>
                        <div className="border rounded p-3 text-center bg-gray-50">
                          <div className="font-medium">Medium</div>
                          <div className="text-sm text-gray-600 mt-1">
                            54-58mm lens width
                          </div>
                        </div>
                        <div className="border rounded p-3 text-center">
                          <div className="font-medium">Large</div>
                          <div className="text-sm text-gray-600 mt-1">
                            59-62mm lens width
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg mb-2">
                        How to Measure
                      </h3>
                      <p className="text-gray-600">
                        For the most accurate fit, measure your current glasses
                        or use a ruler to measure your face:
                      </p>
                      <ul className="mt-2 space-y-1 text-gray-600 list-disc pl-5">
                        <li>Lens width: The horizontal width of each lens</li>
                        <li>Bridge width: The distance between lenses</li>
                        <li>Temple length: From hinge to tip of temple arm</li>
                        <li>Frame width: The total width of the frame</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t">
                    <button
                      onClick={() => setShowSizeGuide(false)}
                      className="w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === "reviews" && (
        <div
          className={`${
            isMobile ? " border-gray-200" : " border-blue-100"
          } rounded-lg p-4 md:p-6`}
        >
          <div className="text-center py-6 md:py-8">
            <Review />
          </div>
        </div>
      )}

      {activeTab === "faqs" && (
        <div
          className={`rounded-lg`}
        >
          <div className="text-center py-6 md:py-8">
            <FAQ />
          </div>
        </div>
      )}

      {/* Features Banner */}
      <div
        className={`bg-gray-50 ${
          isMobile ? "p-4 rounded-lg" : "p-6"
        } grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 rounded-2xl`}
      >
        <div className="flex gap-3 items-center text-center">
          <div className="mb-2">
            <Truck
              className={`${isMobile ? "h-5 w-5" : "h-6 w-6"} text-gray-700`}
            />
          </div>
          <div className={`${isMobile ? "text-xs" : "text-sm"} font-medium`}>
            3 - 5 Days Delivery
          </div>
        </div>
        <div className="flex gap-3 items-center text-center">
          <div className="mb-2">
            <Shield
              className={`${isMobile ? "h-5 w-5" : "h-6 w-6"} text-gray-700`}
            />
          </div>
          <div className={`${isMobile ? "text-xs" : "text-sm"} font-medium`}>
            5 Stages Quality Control
          </div>
        </div>
        <div className="flex gap-3 items-center text-center">
          <div className="mb-2">
            <Check
              className={`${isMobile ? "h-5 w-5" : "h-6 w-6"} text-gray-700`}
            />
          </div>
          <div className={`${isMobile ? "text-xs" : "text-sm"} font-medium`}>
            365 Days Quality Guarantee
          </div>
        </div>
        <div className="flex gap-3 items-center text-center">
          <div className="mb-2">
            <Glasses
              className={`${isMobile ? "h-5 w-5" : "h-6 w-6"} text-gray-700`}
            />
          </div>
          <div className={`${isMobile ? "text-xs" : "text-sm"} font-medium`}>
            Millions of Glasses Sold
          </div>
        </div>
      </div>
    </div>
  );
}
