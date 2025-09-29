

"use client";
import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { useState, useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { toast as sonnerToast } from "sonner";

export default function payment() {
  const [selectPaymentMethod, setSelectPaymentMethod] = useState(false);
  const [selectDeliveryPaymentMethod, setSelectDeliveryPaymentMethod] = useState(false);
 
  




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


  
  function handleClickPayment(){
    setSelectPaymentMethod((prevSelect) => !prevSelect)
  }
  function handleClick(){
    setSelectDeliveryPaymentMethod((prevSelectDelivery) => !prevSelectDelivery)
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

  return (
    <>
      {/* Payment Options */}

      <section>
        <h3 className="dark:text-[#919191] text-[#030712] text-[0.9rem] ">
          Payment Options
        </h3>
        <p className="dark:text-[#919191] text-[0.75rem] text-[#333333] ">
          Payment processing is done over a secure and encrypted gateway
        </p>

        <div className="flex gap-[2rem]">
          <div className="relative w-[20rem]  my-[1.6rem]">
            <div className="flex items-center my-[1rem] justify-between w-[33.6em] border border-gray-300 rounded-lg px-4 py-2">
              <div className="flex justify-between w-full items-center ">
                <RadioGroup
                 // value={selectPaymentMethod}
                 // onSubmit={handleClickPayment}
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
                    <CheckCircleIcon
                      className={`ml-auto w-4 h-4 rounded-full transition ${
                        selectPaymentMethod 
                          ? "bg-white text-black"
                          : "bg-[#9CA3AF] text-white dark:text-white"
                       }`}
                       onClick={handleClickPayment}
                    />
                  </Radio>
                </RadioGroup>
              </div>
            </div>

            <div className="flex items-center my-[1rem] justify-between w-[33.6em] border border-gray-300 rounded-lg px-4 py-2">
              <div className="flex justify-between w-full items-center ">
                <RadioGroup
                  //value={selectDeliveryPaymentMethod}
                  //onChange={setSelectDeliveryPaymentMethod}
                  aria-label="Server size"
                  className="space-y-2 flex w-full items-center justify-between"
                >
                  <Radio
                    value="Debit"
                    className="group relative flex cursor-pointer rounded-lg   text-white transition  w-full items-center justify-betwee focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src="lot-of-cash-pay.svg"
                        alt="Payment icon"
                        className="w-4 h-4 "
                      />
                      <p className="dark:text-gray-700 focus:border-[#111827] text-[#000000] text-[0.75rem] font-medium">
                        Cash on delivery
                      </p>
                    </div>
                    <CheckCircleIcon
                      className={`ml-auto w-4 h-4 rounded-full transition ${
                        selectDeliveryPaymentMethod 
                          ? "bg-white text-black"
                          : "bg-[#9CA3AF] text-white dark:text-white"
                       }`}
                       onClick={handleClick}
                    />
                  </Radio>
                </RadioGroup>
              </div>
            </div>

            <p className="text-[0.9rem] ">Card Details</p>

            <div className="relative w-[33.6em]  my-[1rem]">
              <input
                id="Card name"
                type="text"
                name="Card name"
                aria-label="Card name"
                required
                className="peer w-full rounded-[0.623rem] border text-[#919191] border-[#D1D5DB] px-[1.25rem] pt-3 placeholder-transparent focus:border-[#111827] focus:outline-none"
                placeholder="Card name"
              />
              <label
                htmlFor="Card name"
                className="absolute text-[0.75rem] left-[1.25rem] bottom-7 bg-white dark:bg-black z-10 text-gray-500 text-sm transition-all 
                                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 
                                    peer-placeholder-shown:text-[0.75rem] peer-focus:bottom-7 peer-focus:text-sm peer-focus:text-[#D1D5DB]"
              >
                Card name
              </label>
            </div>

            <div className="relative w-[33.6rem]  my-[1rem]">
              <input
                id="Card number"
                inputMode="numeric"
                pattern="[0-9]"
                type="telephone"
                name="Card number"
                aria-label="Card number"
                required
                className="peer w-full text-[0.75rem] rounded-[0.623rem] border text-[#919191] border-[#D1D5DB] px-[1.25rem] pt-3 placeholder-transparent focus:border-[#111827] focus:outline-none"
                placeholder="Card number"
              />
              <label
                htmlFor="Card number"
                className="absolute text-[0.75rem] left-[1.25rem] bottom-5 bg-white dark:bg-black z-10 text-gray-500 text-sm transition-all 
                                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 
                                    peer-placeholder-shown:text-[0.75rem] peer-focus:bottom-7 peer-focus:text-sm peer-focus:text-[#D1D5DB]"
              >
                Card number
              </label>
            </div>

            <div className="flex gap-4">
              <div>
                <select
                  id="expiryMonth"
                  className="w-[16.3rem] text-[0.75rem] h-8 border border-gray-300 rounded-[0.5rem] px-2 text-gray-700 focus:outline focus:ring-1 focus:ring-[#000000]"
                >
                  <option value="">Expiry date</option>
                  <option value="01">01 - Jan </option>
                  <option value="02">02 - Feb</option>
                  <option value="03">03 - Mar</option>
                  <option value="04">04 - Apr</option>
                  <option value="05">05 - May</option>
                  <option value="06">06 - Jun</option>
                  <option value="07">07 - Jul</option>
                  <option value="08">08 - Aug</option>
                  <option value="09">09 - Sep</option>
                  <option value="10">10 - Oct</option>
                  <option value="11">11 - Nov</option>
                  <option value="12">12 - Dec</option>
                </select>
              </div>

              <div>
                <select
                  id="expiryMonth"
                  className="w-[16.3rem] gap-[2rem] text-[0.75rem] h-8 border border-gray-300 rounded-[0.5rem] px-2 text-gray-700 focus:outline focus:ring-1 focus:ring-[#000000]"
                >
                  <option value="">CVV </option>
                  <option value="01">01 - Jan </option>
                  <option value="02">02 - Feb</option>
                  <option value="03">03 - Mar</option>
                  <option value="04">04 - Apr</option>
                  <option value="05">05 - May</option>
                  <option value="06">06 - Jun</option>
                  <option value="07">07 - Jul</option>
                  <option value="08">08 - Aug</option>
                  <option value="09">09 - Sep</option>
                  <option value="10">10 - Oct</option>
                  <option value="11">11 - Nov</option>
                  <option value="12">12 - Dec</option>
                </select>
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
              className="w-[16.6rem] h-[3.25rem py-[0.7rem] px-[4.28rem] text-[0.8rem] hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white rounded-[3.88rem] bg-[#030712] dark:bg-[#919191] dark:text-black text-white my-[3.2rem]">
              Review and Pay
            </button>
          </div>

          {/* <button
      className="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white"
      onClick={() => {
        toast({
          title: 'This is a headless toast',
          description:
            'You have full control of styles and jsx, while still having the animations.',
          button: {
            label: 'Reply',
            onClick: () => sonnerToast.dismiss(),
          },
        });
      }}
    >
      Render toast
    </button> */}
        </div>
      </section>
    </>
  );
}
