"use client";
import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { useState, useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
// import { toast as sonnerToast } from "sonner";
// import dynamic from "next/dynamic";


export default function payment() {
  const [selectPaymentMethod, setSelectPaymentMethod] = useState(false);
  const [selectDeliveryPaymentMethod, setSelectDeliveryPaymentMethod] =
    useState(false);

  // function toast(toast) {
  //   return sonnerToast.custom((id) => (
  //     <Toast
  //       id={id}
  //       title={toast.title}
  //       nameOfCustomer={toast.nameOfCustomer}
  //       description={toast.description}
  //       button={{
  //         label: toast.button.label,
  //         onClick: () => console.log("Button clicked"),
  //       }}
  //     />
  //   ));
  // }

  function handleClickPayment() {
    setSelectPaymentMethod((prevSelect) => !prevSelect);
  }
  function handleClick() {
    setSelectDeliveryPaymentMethod((prevSelectDelivery) => !prevSelectDelivery);
  }

  


  return (
    <>
      {/* Payment Options */}

      <section className="bg-background  text-primary">
        <h3 className="  text-[0.9rem] ">Payment Options</h3>
        <p className=" text-[0.75rem] text-[#333333 ">
          Payment processing is done over a secure and encrypted gateway
        </p>

        <div className="flex gap-[7rem] ">
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
                    className="group relative flex cursor-pointer rounded-lg transition  w-full items-center justify-betwee focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src="credit-card-Pay.svg"
                        alt="Payment icon"
                        className="w-4 h-4 invert-on-dark"
                      />
                      <p className=" text-[0.75rem] font-medium">
                        Debit/Credit Card
                      </p>
                    </div>
                    <CheckCircleIcon
                      className={`ml-auto w-4 h-4 rounded-full transition ${
                        selectPaymentMethod
                          ? "bg-white text-black"
                          : "bg-[#9CA3AF] text-white"
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
                    className="group relative flex cursor-pointer rounded-lg transition  w-full items-center justify-betwee focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src="lot-of-cash-pay.svg"
                        alt="Payment icon"
                        className="w-4 h-4 invert-on-dark"
                      />
                      <p className=" focus:border-[#111827]  text-[0.75rem] font-medium">
                        Cash on delivery
                      </p>
                    </div>
                    <CheckCircleIcon
                      className={`ml-auto w-4 h-4 rounded-full transition ${
                        selectDeliveryPaymentMethod
                          ? "bg-white text-black"
                          : "bg-[#9CA3AF] text-white "
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
                className="input-field peer  w-[33.8rem]"
                placeholder="Card name"
              />

              <label
                htmlFor="Card name"
                className="input-field-label peer-focus:px-2 peer-focus:text-[#919191]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
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
                className=" input-field peer  w-[33.8rem]"
                placeholder="Card number"
              />
              <label
                htmlFor="Card number"
                className="input-field-label peer-focus:px-2 peer-focus:text-[#919191]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
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
              className="btn"
            >
              Review and Pay
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
