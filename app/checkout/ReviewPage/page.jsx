"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Radio, RadioGroup } from "@headlessui/react";
import { toast as sonnerToast } from "sonner";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import dayjs from "dayjs";
// import { moneyFormat } from "../utils/moneyFormat"

export default function review() {
  const [increaseOrder, setIncreaseOrder] = useState(0);
  const [open, setOpen] = useState(true);
  const [selectPaymentMethod, setSelectPaymentMethod] = useState(null);

  function addToCart() {
    setIncreaseOrder(increaseOrder + 1);
  }
  function removeFromCart() {
    setIncreaseOrder(increaseOrder - 1);
  }
  function resetCart() {
    setIncreaseOrder === 0;
  }

  const orderReviews = [
    {
      Image: {
        src: "glasses-review.svg",
        alt: "Review Glasses",
        width: 35,
        height: 35,
      },

      nameOfGlasses: "Ralphodile's BinoBinoculars",
      color: "Color",
      size: "Size M",
      priceCents: 12.99,

      img: {
        src: "minus.svg",
        alt: "Minus",
        width: 17,
        height: 17,
      },
      img1: {
        src: "plus.svg",
        alt: "Plus",
        width: 17,
        height: 17,
      },
    },

    {
      Image: {
        src: "glasses-review.svg",
        alt: "Review Glasses",
        width: 35,
        height: 35,
      },
      nameOfGlasses: "Ralphodile's BinoBinoculars",
      color: "Color",
      size: "Size M",
      priceCents: 12.99,

      img: {
        src: "minus.svg",
        alt: "Minus",
        width: 17,
        height: 17,
      },
      img1: {
        src: "plus.svg",
        alt: "Plus",
        width: 17,
        height: 17,
      },
    },

    {
      Image: {
        src: "glasses-review.svg",
        alt: "Review Glasses",
        width: 35,
        height: 35,
      },
      nameOfGlasses: "Ralphodile's BinoBinoculars",
      color: "Color",
      size: "Size M",
      priceCents: 12.99,

      img: {
        src: "minus.svg",
        alt: "Minus",
        width: 17,
        height: 17,
      },
      img1: {
        src: "plus.svg",
        alt: "Plus",
        width: 17,
        height: 17,
      },
    },
  ];

  const shippingDetails = [
    {
      nameofCustomer: "Lucius Emmanuel",

      addressofCustomer: "7812 Ralphodi ave. Manchester, Kentucky, 10010",
      button: {
        label: "Click to edit",
        Image: {
          src: "edit-pencil.svg",
          width: 17,
          height: 17,
        },
      },
    },
  ];

  return (
    <>


    
      <h3 className="font-medium text-[0.9rem] ">Review your order</h3>

      <p className="font-light text-[0.5rem]">
        {/* {dayjs(orderReviews).format('dddd, MMMM, D')} */}
        Estimated delivery is: 23rd Feb, 2025
      </p>
      {orderReviews.map((orderReview, index) => (
        <div key={orderReview.id}>
          <div
            className="flex items-center gap-5 flex-wrap"
            key={orderReview.id}
          >
            <Image
              src={orderReview.Image.src}
              alt={orderReview.Image.alt}
              width={orderReview.Image.width}
              height={orderReview.Image.height}
            />
            <div className="">
              <h3 className="text-[0.7rem]  font-medium">
                {orderReview.nameOfGlasses}
              </h3>

              <div className="flex items-center gap-1">
                <p className=" font-medium text-[0.6rem] ">
                  {orderReview.color}:
                </p>
                <span className="w-[0.6rem] h-[0.6rem] rounded-[0.6rem] bg-[#98BE9E] "></span>
                <span className="">—</span>
                <span className="font-medium text-[0.6rem] ">
                  {orderReview.size}
                </span>
              </div>
            </div>
            <p className="font-bold text-[0.7rem]">
              {/* {moneyFormat(orderReview.priceCents)} */}
              {(orderReview.priceCents / 100).toFixed(2)}
            </p>{" "}
            {/*this is because 1 dollar = 100 cents and toFixed function tells us how many decimal places it should be*/}
            {orderReview.img && (
              <div className="flex border justify-between border-[#E5E7EB] py-[0.3rem] px-[1.5rem] gap-4 rounded-full ">
                <Image
                  src={orderReview.img.src}
                  alt={orderReview.img.alt}
                  width={orderReview.img.width}
                  height={orderReview.img.height}
                  onClick={removeFromCart}
                  className="invert-on-dark"
                />
                <p>{increaseOrder}</p>
                <Image
                  alt={orderReview.img1.alt}
                  src={orderReview.img1.src}
                  width={orderReview.img1.width}
                  height={orderReview.img1.height}
                  onClick={addToCart}
                  className="invert-on-dark"
                />
              </div>
            )}
            <div className="py-[1.6rem]">
              <div className="relative bg-gray-100  p-4 rounded-full w-[2rem] h-[2rem]">
                {/* Cancel Button */}
                <button
                  onClick={resetCart}
                  //onClick={() => setOpen(false)}
                  aria-label="Cancel"
                  className="absolute bottom-2 left-2 text-gray-500 "
                >
                  <XMarkIcon className="w-[1rem] h-[1rem]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="mt-[2.4rem]">
        <h3 className="font-medium text-[0.9rem] text-[#030712]">
          Payment Options
        </h3>

        <div className="flex items-center my-[0.8rem] justify-between w-[27rem] border border-gray-300 rounded-lg px-4 py-2">
          <div className="flex justify-between w-full items-center ">
            <RadioGroup
              value={selectPaymentMethod}
              onChange={setSelectPaymentMethod}
              aria-label="Payment Method"
              className="space-y-2 flex w-full items-center justify-between"
            >
              <Radio
                value="Debit"
                aria-label="Payment Method"
                className="group relative flex cursor-pointer rounded-lg transition  w-full items-center justify-betwee focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <img
                    src="credit-card-Pay.svg"
                    alt="Payment icon"
                    className="w-4 h-4 invert-on-dark"
                  />
                  <p className="text-[0.75rem] font-medium">
                    Debit/Credit Card
                  </p>
                </div>
                <div className="flex  ml-auto gap-3">
                  <h3 className="text-[#070312 text-[0.6rem] font-light ">
                    Click to edit
                  </h3>
                  <Image
                    src="edit-pencil.svg"
                    alt="Pencil"
                    width={15}
                    height={15}
                    className="invert-on-dark"
                  />
                </div>
              </Radio>
            </RadioGroup>
          </div>
        </div>
      </div>

      {shippingDetails.map((shippingDetail) => {
        {
          /** This is not displaying why!! */
        }
        <div key={shippingDetail.id}>
          <p>Shipping details</p>
          <div className="flex">
            <h3>{shippingDetail.nameofCustomer}</h3>
            <h3>{shippingDetail.addressofCustomer}</h3>
          </div>
          {shippingDetails.button && (
            <div className="flex">
              <button>{label}</button>
              <Image src={shippingDetails.button.Image} />
            </div>
          )}
        </div>;
      })}

      <button
        // onClick={() => {
        //   toast({
        //     title: "Shipping details",
        //     nameOfCustomer: "Lucius Emmanuel",
        //     description: "7812 Ralphodi ave. Manchester, Kentucky, 10010",
        //     button: {
        //       label: "Click to edit",
        //       onClick: () => sonnerToast.dismiss(),
        //     },
        //   });
        // }}
        className="btn "
      >
        Review and Pay
      </button>
    </>
  );
}
