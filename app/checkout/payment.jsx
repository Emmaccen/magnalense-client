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

  // function Toast(props) {
  //   const { title, nameOfCustomer, description, button, id } = props;

  //   return (
  //     <div className="flex rounded-lg  ml-15 mt-20 bg-white shadow-lg ring-1 ring-black/5 w-full md:max-w-[364px] items-center p-4">
  //       <div className="flex flex-1 items-center">
  //         <div className="w-full">
  //           <p className="text-sm font-light text-gray-900">{title}</p>
  //           <div className="flex">
  //             <p className="text-sm font-medium text-gray-900">
  //               {nameOfCustomer}
  //             </p>
  //             <CheckCircleIcon className="ml-auto w-4 h-4 rounded-full transition bg-white text-black" />
  //           </div>
  //           <p className="mt-1 text-sm text-gray-500">{description}</p>
  //           <div className=" shrink-0 rounded-md text-sm font-medium  focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
  //             <button
  //               className="rounded bg-indigo-50 px-3 py-1 text-[0.75rem] font-light text-[#030712]  hover:bg-indigo-100"
  //               onClick={() => {
  //                 button.onClick();
  //                 sonnerToast.dismiss(id);
  //               }}
  //             >
  //               {button.label}
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

//   const Payment = dynamic(() => import("./payment"), {
//   loading: () => (
//     <div role="status" className="flex justify-center items-center">
//       <svg
//         aria-hidden="true"
//         className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
//         viewBox="0 0 100 101"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//           fill="currentColor"
//         />
//         <path
//           d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//           fill="currentFill"
//         />
//       </svg>
//       <span className="sr-only">Loading...</span>
//     </div>
//   ),
// });

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
                className="input-field peer  w-[33.8rem]"
                placeholder="Card name"
              />

              <label
                htmlFor="Card name"
                className="input-field-label peer-focus:px-2 peer-focus:text-[#919191] peer-focus:dark:text-[#919191] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
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
                className="input-field-label peer-focus:px-2 peer-focus:text-[#919191] peer-focus:dark:text-[#919191] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
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
