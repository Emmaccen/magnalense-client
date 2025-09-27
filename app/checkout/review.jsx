
"use client"
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Radio, RadioGroup } from "@headlessui/react";
import { toast as sonnerToast } from "sonner";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

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

  function toast(toast) {
    return sonnerToast.custom((id) => (
      <Toast
        id={id}
        title={toast.title}
        nameOfCustomer={toast.nameOfCustomer}
        description={toast.description}
        button={{
          label: toast.button.label,
          onClick: () => console.log("Button clicked"),
        }}
      />
    ));
  }

  function Toast(props) {
    const { title, nameOfCustomer, description, button, id } = props;

    return (
      <div className="flex rounded-lg ml-15 mt-20 bg-white shadow-lg ring-1 ring-black/5 w-full md:max-w-[364px] items-center p-4">
        <div className="flex flex-1 items-center">
          <div className="w-full">
            <p className="text-sm font-light text-gray-900">{title}</p>
            <div className="flex">
              <p className="text-sm font-medium text-gray-900">
                {nameOfCustomer}
              </p>
              <CheckCircleIcon className="ml-auto w-4 h-4 rounded-full transition bg-white text-black" />
            </div>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
            <div className=" shrink-0 rounded-md text-sm font-medium  focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
              <button
                className="rounded bg-indigo-50 px-3 py-1 text-[0.75rem] font-light text-[#030712]  hover:bg-indigo-100"
                onClick={() => {
                  button.onClick();
                  sonnerToast.dismiss(id);
                }}
              >
                {button.label}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

    const orderReviews = [{
      Image:{
        src: "glasses-review.svg",
        alt: "Review Glasses",
        width: 35,
        height: 35,
      },

       nameOfGlasses: "Ralphodile's BinoBinoculars",
        color: 'Color',
        size: 'Size M',
        price: '$12.99',

        img: {
            src: "minus.svg",
            alt: "Minus",
            width: 17,
            height: 17,
        }
      },

      {
      Image:{
        src: "glasses-review.svg",
        alt: "Review Glasses",
        width: 35,
        height: 35,
      },
        nameOfGlasses: "Ralphodile's BinoBinoculars",
        color: 'Color',
        size: 'Size M',
        price: '$12.99'
      },

      {
      Image: {
        src: "glasses-review.svg",
        alt: "Review Glasses",
        width: 35,
        height: 35,
      },
        nameOfGlasses: "Ralphodile's BinoBinoculars",
        color: 'Color',
        size: 'Size M',
        price: '$12.99'
      },
    
  ]  

  return (
    <>
      <h3 className="font-medium text-[0.9rem] ">Review your order</h3>
      <p className="font-light text-[0.5rem]">
        Estimated delivery is: 23rd Feb, 2025
      </p>


     {orderReviews.map((orderReview, index) => (
      <div className="flex items-center gap-5  flex-wrap" key={index}>
        <Image
          src={orderReview.Image.src}
          alt={orderReview.Image.alt}
          width={orderReview.Image.width}
          height={orderReview.Image.height}
        />

        <div className="">
          <h3 className="text-[0.7rem] text-[#000000] font-medium">
            {orderReview.nameOfGlasses}
          </h3>

          <div className="flex items-center gap-1">
            <p className="text-[#919191] font-medium text-[0.6rem] ">{orderReview.color}:</p>
            <span className="w-[0.6rem] h-[0.6rem] rounded-[0.6rem] bg-[#98BE9E] "></span>
            <span className=" text-[#5C5F6A] ">—</span>
            <span className=" text-[#919191] font-medium text-[0.6rem] ">
              {orderReview.size}
            </span>
          </div>
        </div>
        <p className="font-bold text-[0.7rem]">{orderReview.price}</p>

      {orderReview.img && (
        <div className="flex border justify-between border-[#E5E7EB] py-[0.3rem] px-[1.5rem] gap-4 rounded-full ">
          <Image
            src={orderReview.img.src}
            alt={orderReview.img.alt}
            width={orderReview.img.width}
            height={orderReview.img.height}
            onClick={removeFromCart}
            className=""
          />
          <p>{increaseOrder}</p>
          <Image
            alt="Plus"
            src="plus.svg"
            width={13}
            height={13}
            onClick={addToCart}
            className=""
          />
        </div>
      )}
        <div className="py-[1.6rem]">
          <div className="relative bg-gray-100 dark:bg-gray-800 p-4 rounded-full w-[2rem] h-[2rem]">
            {/* Cancel Button */}
            <button
              onClick={resetCart}
              //onClick={() => setOpen(false)}
              aria-label="Cancel"
              className="absolute bottom-2 left-2 text-gray-500 hover:text-black dark:hover:text-white"
            >
              <XMarkIcon className="w-[1rem] h-[1rem]" />
            </button>
          </div>
        </div>
      </div>
     ))
}





      <div className="flex  items-center gap-5 mt-[1rem] flex-wrap">
        <Image
          src="glasses-review.svg"
          alt="Review Glasses"
          width={35}
          height={35}
        />

        <div className="">
          <h3 className="text-[0.7rem] text-[#000000] font-medium">
            Ralphodile's BinoBinoculars
          </h3>

          <div className="flex items-center gap-1">
            <p className="text-[#919191] font-medium text-[0.6rem] ">Color:</p>
            <span className="w-[0.6rem] h-[0.6rem] rounded-[0.6rem] bg-[#98BE9E] "></span>
            <span className=" text-[#5C5F6A] ">—</span>
            <span className=" text-[#919191] font-medium text-[0.6rem] ">
              Size: M
            </span>
          </div>
        </div>
        <p className="font-bold text-[0.7rem]">$12.99</p>

        <div className="flex border justify-between border-[#E5E7EB] py-[0.3rem] px-[1.5rem] gap-4 rounded-full ">
          <Image
            alt="Minus"
            src="minus.svg"
            width={17}
            height={17}
            onClick={removeFromCart}
            className=""
          />
          <p>{increaseOrder}</p>
          <Image
            alt="Plus"
            src="plus.svg"
            width={13}
            height={13}
            onClick={addToCart}
            className=""
          />
        </div>

        <div className="py-">
          <div className="relative bg-gray-100 dark:bg-gray-800 p-4 rounded-full w-[2rem] h-[2rem]">
            {/* Cancel Button */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Cancel"
              className="absolute bottom-2 left-2 text-gray-500 hover:text-black dark:hover:text-white"
            >
              <XMarkIcon className="w-[1rem] h-[1rem]" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex  items-center gap-5 mt-[1rem] flex-wrap">
        <Image
          src="glasses-review.svg"
          alt="Review Glasses"
          width={35}
          height={35}
        />

        <div className="">
          <h3 className="text-[0.7rem] text-[#000000] font-medium">
            Ralphodile's BinoBinoculars
          </h3>

          <div className="flex items-center gap-1">
            <p className="text-[#919191] font-medium text-[0.6rem] ">Color:</p>
            <span className="w-[0.6rem] h-[0.6rem] rounded-[0.6rem] bg-[#98BE9E] "></span>
            <span className=" text-[#5C5F6A] ">—</span>
            <span className=" text-[#919191] font-medium text-[0.6rem] ">
              Size: M
            </span>
          </div>
        </div>
        <p className="font-bold text-[0.7rem]">$12.99</p>

        <div className="flex border justify-between border-[#E5E7EB] py-[0.3rem] px-[1.5rem] gap-4 rounded-full ">
          <Image
            alt="Minus"
            src="minus.svg"
            width={17}
            height={17}
            onClick={removeFromCart}
            className=""
          />
          <p>{increaseOrder}</p>
          <Image
            alt="Plus"
            src="plus.svg"
            width={13}
            height={13}
            onClick={addToCart}
            className=""
          />
        </div>

        <div className="py-6">
          <div className="relative bg-gray-100 dark:bg-gray-800 p-4 rounded-full w-[2rem] h-[2rem]">
            {/* Cancel Button */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Cancel"
              className="absolute bottom-2 left-2 text-gray-500 hover:text-black dark:hover:text-white"
            >
              <XMarkIcon className="w-[1rem] h-[1rem]" />
            </button>
          </div>
        </div>
      </div>

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
                className="group relative flex cursor-pointer rounded-lg   text-white transition  w-full items-center justify-betwee focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <img
                    src="credit-card-Pay.svg"
                    alt="Payment icon"
                    className="w-4 h-4 "
                  />
                  <p className="dark:text-gray-700 text-[#000000] text-[0.75rem] font-medium">
                    Debit/Credit Card
                  </p>
                </div>
                <div className="flex  ml-auto gap-3">
                  <h3 className="text-[#070312] text-[0.6rem] font-light ">
                    Click to edit
                  </h3>
                  <Image
                    src="edit-pencil.svg"
                    alt="Pencil"
                    width={15}
                    height={15}
                  />
                </div>
              </Radio>
            </RadioGroup>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          toast({
            title: "Shipping details",
            nameOfCustomer: "Lucius Emmanuel",
            description: "7812 Ralphodi ave. Manchester, Kentucky, 10010",
            button: {
              label: "Click to edit",
              onClick: () => sonnerToast.dismiss(),
            },
          });
        }}
        className="w-[16.6rem] text-[0.75rem] mt-[2.4rem] h-[2rem] dark:hover:bg-black dark:hover:text-white rounded-[3.88rem] bg-[#030712] dark:bg-[#919191] dark:text-black text-white my-[4rem] "
      >
        Review and Pay
      </button>
    </>
  );
}
