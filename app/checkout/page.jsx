"use client";
import React from "react";
//import Header from "@/components/header";
import Link from "next/link";
import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Payment from "./payment";
import Review from "./review";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [selectPaymentMethod, setSelectPaymentMethod] = useState(null);
  // const [selectDeliveryPaymentMethod, setSelectDeliveryPaymentMethod] = useState("");
  const [inputText, setInputText] = useState('')
  const router = useRouter() 
  
  function saveInputText(event){     //this function saves the data that is typed into the input fields 
    setInputText(event.target.value)
  }

  function handleContinueToPayment(){   //I want this button to take me to the payment page
    router.push("/payment")   
  }



  return (

    <>
      <title>Checkout Page</title>
      <link rel="icon" type="image/svg+xml" href="/phone-solid-full.svg" />

      {/* <Header /> */}
      <main>
        <section className="flex flex-wrap  justify-center gap-[2.4rem]">
          {/* The first Div:Checkout */}
          <div className="w-[34rem]">
            <h1 className="mt-[2.4rem] mb-[1.2rem] mr-[45rem] font-semibold text-[1.5rem]">
              Checkout
            </h1>
            <div className="w-[23rem] mr-[24rem] mb-[1.5rem]  bg-[#FFF5EA] border border-[#FFE4C7] h-[3.2rem] rounded-[0.63rem] ">
              <p className="pt-[1rem] pb-[2rem] pl-[1.2rem] pr-[4.55rem] font-light text-[0.7rem] dark:text-black">
                Already have an account? <Link href="#">Log In</Link> for faster
                checkout
              </p>
            </div>

            <TabGroup
              manual
              defaultIndex={0}
              className=" border border-white gap-[3rem] mb-[1.5rem]"
            >
              <TabList className="flex items-center w-[23.3rem] gap-[2.4rem]">
                <Tab className="flex items-center w-[9.62rem] gap-[0.6rem] focus:outline-none">
                  {({ selected }) => (
                    <>
                      <p className="dark:text-[#91919 text-[1rem] cursor-pointer">
                        Information
                      </p>
                      <div
                        className={`w-[1.6rem] h-[1.6rem] relative rounded-full px-3 py-1 text-white 
                    ${
                      selected ? "bg-black dark:bg-[#c1b4a7]" : "bg-[#6B7280]"
                    }`}
                      >
                        <Image
                          src="home-simple.svg"
                          alt="home-simple"
                          width={16}
                          height={16}
                          className="absolute bottom-1.5 left-1.5"
                        />
                      </div>
                    </>
                  )}
                </Tab>

                <Tab className="flex items-center w-[9.62rem] gap-[0.6rem] focus:outline-none">
                  {({ selected }) => (
                    <>
                      <p className="dark:text-[#919191] text-[1rem] cursor-pointer">
                        Payment
                      </p>
                      <div
                        className={`w-[1.6rem] h-[1.6rem] relative rounded-full px-3 py-1 text-white 
                    ${
                      selected ? "bg-black dark:bg-[#c1b4a7]" : "bg-[#6B7280]"
                    }`}
                      >
                        <Image
                          src="credit-card.svg"
                          alt="Payment"
                          width={16}
                          height={16}
                          className="absolute bottom-1.5 left-1.5"
                        />
                      </div>
                    </>
                  )}
                </Tab>

                <Tab className="flex items-center w-[9.62rem] gap-[0.6rem] focus:outline-none">
                  {({ selected }) => (
                    <>
                      <p className="dark:text-[#919191] text-[1rem] cursor-pointer">
                        Review
                      </p>
                      <div
                        className={`w-[1.6rem] h-[1.6rem] relative rounded-full px-3 py-1 text-white 
                    ${
                      selected ? "bg-black dark:bg-[#c1b4a7]" : "bg-[#6B7280]"
                    }`}
                      >
                        <Image
                          src="page-flip.svg"
                          alt="Payment"
                          width={16}
                          height={16}
                          className="absolute bottom-1.5 left-1"
                        />
                      </div>
                    </>
                  )}
                </Tab>
              </TabList>
              <div className="w-[23.3rem] my-[1rem] mb-[2rem] border border-[#F1F1F1] dark:border-[#919191] "></div>

              <TabPanels>
                <TabPanel>
                  <div>
                    <p className="dark:text-[#919191] text-[0.9rem] font-medium">
                      Customer Information
                    </p>

                    <div className="flex gap-[1.6rem]">
                      <div className="">
                        <div className="relative w-[16rem] my-[0.8rem] h-[2.5rem ">
                          <input
                            type="email"
                            id="email"
                            name="Email address"
                            aria-label="Email address"
                            required
                            className="peer w-full rounded-[0.623rem] border text-[#919191] border-[#D1D5DB] px-[1.25rem] pt-2 placeholder-transparent focus:border-[#111827] focus:outline-none"
                            placeholder="Email address"
                            onChange={saveInputText}
                          />
                          <label
                            htmlFor="email"
                            className="absolute left-[1.25rem] bottom-6 bg-white z-10 text-[#4B5563] text-[0.7rem] font-light transition-all 
                                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 
                                    peer-placeholder-shown:text-[0.7rem] peer-focus:bottom-7 peer-focus:text-[0.7rem] peer-focus:text-[#D1D5DB]"
                          >
                            Email address
                          </label>
                        </div>
                      </div>

                      <div className="flex items-center w-full max-w-md">
                        <select className="p-2 border text-[#4B5563] text-[0.75rem] border-[#D1D5DB] rounded-l-md focus:outline-none   focus:border-[#111827]">
                          <option value="+234"> +234</option>
                          <option value="+1"> +1</option>
                          <option value="+44"> +44</option>
                          <option value="+91"> +91</option>
                        </select>

                        <input
                          type="tel"
                          aria-label="Phone number"
                          placeholder="Phone number"
                          className="flex w-[12rem] peer p-1.5 border text-[0.75rem] border-gray-300 rounded-r-md focus:outline-none px-3  focus:border-[#111827]"
                        />
                      </div>
                    </div>

                    <div className="my-[2rem]">
                      <p className="dark:text-[#919191] text-[0.9rem] font-medium">
                        Shipping address
                      </p>
                      <div className="flex gap-[1.6rem] relative my-[0.8rem]">
                        <div className="relative w-[20rem]">
                          <input
                            id="First name"
                            type="text"
                            name="First name"
                            aria-label="First name"
                            required
                            className="peer w-full rounded-[0.623rem] border text-[#919191] border-[#D1D5DB] px-[1.25rem] pt-2 placeholder-transparent focus:border-[#111827] focus:outline-none"
                            placeholder="First name"
                          />
                          <label
                            htmlFor="First name"
                            className="absolute left-[1.25rem] bottom-6 bg-white z-10 text-[#4B5563] text-[0.7rem] font-light transition-all 
                                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 
                                    peer-placeholder-shown:text-[0.7rem] peer-focus:bottom-7 peer-focus:text-[0.7rem] peer-focus:text-[#D1D5DB]"
                          >
                            First name
                          </label>
                        </div>
                        <div className="relative w-[20rem]">
                          <input
                            type="text"
                            id="Last name"
                            name="Last name"
                            aria-label="Last name"
                            required
                            className="peer w-full rounded-[0.623rem] border text-[#919191] border-[#D1D5DB] px-[1.25rem] pt-2 placeholder-transparent focus:border-[#111827] focus:outline-none"
                            placeholder="Last name"
                          />
                          <label
                            htmlFor="Last name"
                            className="absolute left-[1.25rem] bottom-6 bg-white z-10 text-[#4B5563] text-[0.7rem] font-light transition-all 
                                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 
                                    peer-placeholder-shown:text-[0.7rem] peer-focus:bottom-7 peer-focus:text-[0.7rem] peer-focus:text-[#D1D5DB]"
                          >
                            Last name
                          </label>
                        </div>
                      </div>

                      <div className="flex gap-[1.6rem] my-[1rem]">
                        <div className="flex items-center   max-w-md">
                          <select className="w-[16rem] py-2 px-[1rem] text-[0.7rem] border  text-[#4B5563]  border-[#D1D5DB] rounded-[0.63rem] focus:outline-none focus:ring-1 focus:ring-[#111827]">
                            <option value="+234" className="text-[#4B5563] ">
                              Country
                            </option>
                            <option value="+234" className="text-[#4B5563]">
                              +234
                            </option>
                            <option value="+1" className="text-[#4B5563]">
                              +1
                            </option>
                            <option value="+44" className="text-[#4B5563]">
                              +44
                            </option>
                            <option value="+91" className="text-[#4B5563]">
                              +91
                            </option>
                          </select>
                        </div>

                        <div className="flex items-center max-w-md">
                          <select className="w-[16rem] py-2 text-[0.7rem] px-[1rem] border  text-[#4B5563]  border-[#D1D5DB] rounded-[0.63rem] focus:outline-none focus:ring-1 focus:ring-[#111827]">
                            <option value="+234" className="text-[#4B5563]">
                              State
                            </option>
                            <option value="+234" className="text-[#4B5563]">
                              +234
                            </option>
                            <option value="+1" className="text-[#4B5563]">
                              +1
                            </option>
                            <option value="+44" className="text-[#4B5563]">
                              +44
                            </option>
                            <option value="+91" className="text-[#4B5563]">
                              +91
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="relative w-[20rem] my-[1rem]">
                      <input
                        type="text"
                        id="Address"
                        name="Address"
                        aria-label="Address"
                        required
                        className="peer w-[33.8rem] px-[1.25rem] rounded-[0.623rem] border text-[#919191] border-[#D1D5DB] placeholder-transparent pt-2 focus:border-[#111827] focus:outline-none"
                        placeholder="Address"
                      />
                      <label
                        htmlFor="Address"
                        className="absolute left-[1.25rem] bottom-6 bg-white z-10 text-[#4B5563] text-[0.7rem] font-light transition-all 
                                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 
                                    peer-placeholder-shown:text-[0.7rem] peer-focus:bottom-7 peer-focus:text-[0.7rem] peer-focus:text-[#D1D5DB]"
                      >
                        Address
                      </label>
                    </div>

                    <div className="my-[2rem]">
                      <p className="dark:text-[#919191] text-[0.9rem] text-[#030712] ">
                        Billing address
                      </p>
                      <div className="flex gap-[1.6rem] my-[0.6rem]">
                        <div className="relative w-[20rem]">
                          <input
                            type="text"
                            id="First name"
                            name="Firt name"
                            aria-label="First name"
                            required
                            className="peer w-full rounded-[0.623rem] border text-[#919191] border-[#D1D5DB] px-[1.25rem] pt-2 placeholder-transparent focus:border-[#111827] focus:outline-none"
                            placeholder="First name"
                          />
                          <label
                            htmlFor="First name"
                            className="absolute left-[1.25rem] bottom-6 bg-white z-10 text-[#4B5563] text-[0.7rem] font-light transition-all 
                                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 
                                    peer-placeholder-shown:text-[0.7rem] peer-focus:bottom-7 peer-focus:text-[0.7rem] peer-focus:text-[#D1D5DB]"
                          >
                            First name
                          </label>
                        </div>
                        <div className="relative w-[20rem]">
                          <input
                            type="text"
                            id="Last name"
                            name="Last name"
                            aria-label="Last name"
                            required
                            className="peer w-full rounded-[0.623rem] border text-[#919191] border-[#D1D5DB] px-[1.25rem] pt-2 placeholder-transparent focus:border-[#111827] focus:outline-none"
                            placeholder="Last name"
                          />
                          <label
                            htmlFor="Last name"
                            className="absolute left-[1.25rem] bottom-6 bg-white z-10 text-[#4B5563] text-[0.7rem] font-light transition-all 
                                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 
                                    peer-placeholder-shown:text-[0.7rem] peer-focus:bottom-7 peer-focus:text-[0.7rem] peer-focus:text-[#D1D5DB]"
                          >
                            Last name
                          </label>
                        </div>
                      </div>

                      <div className="flex gap-[1.6rem] my-[1rem] ">
                        <div className="flex items-center   max-w-md">
                          <select className="w-[16rem] py-2 px-[1rem] border text-[0.7rem] text-[#4B5563]  border-[#D1D5DB] rounded-[0.63rem] focus:outline-none focus:ring-1 focus:ring-[#111827]">
                            <option
                              value="+234"
                              className="text-[#4B5563] text-[0.7rem] "
                            >
                              Country
                            </option>
                            <option value="+234" className="text-[#4B5563]">
                              +234
                            </option>
                            <option value="+1" className="text-[#4B5563]">
                              +1
                            </option>
                            <option value="+44" className="text-[#4B5563]">
                              +44
                            </option>
                            <option value="+91" className="text-[#4B5563]">
                              +91
                            </option>
                          </select>
                        </div>
                        <div className="flex items-center w-full max-w-md">
                          <select className="w-[16rem] py-2 px-[1rem] text-[0.7rem] border  text-[#4B5563]  border-[#D1D5DB] rounded-[0.63rem] focus:outline-none focus:ring-1  focus:ring-[#111827]">
                            <option value="State" className="text-[#4B5563]">
                              State
                            </option>
                            <option value="+234" className="text-[#4B5563]">
                              +234
                            </option>
                            <option value="+1" className="text-[#4B5563]">
                              +1
                            </option>
                            <option value="+44" className="text-[#4B5563]">
                              +44
                            </option>
                            <option value="+91" className="text-[#4B5563]">
                              +91
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="relative w-[20rem] my-[1rem]">
                      <input
                        type="text"
                        id="Address"
                        name="Address"
                        aria-label="Address"
                        required
                        className="peer w-[33.8rem] px-[1.25rem] rounded-[0.623rem] border text-[#919191] border-[#D1D5DB] placeholder-transparent pt-2 focus:border-[#111827] focus:outline-none"
                        placeholder="Address"
                      />
                      <label
                        htmlFor="Address"
                        className="absolute left-[1.25rem] bottom-6 bg-white z-10 text-[#4B5563] text-[0.7rem] font-light transition-all 
                                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 
                                    peer-placeholder-shown:text-[0.7rem] peer-focus:bottom-7 peer-focus:text-[0.7rem] peer-focus:text-[#D1D5DB]"
                      >
                        Address
                      </label>
                    </div>

                    <button 
                    onClick={handleContinueToPayment}
                    className="w-[16.6rem]  py-[0.7rem] px-[4.28rem] text-[0.8rem] hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white rounded-[3.88rem] bg-[#030712] dark:bg-[#919191] dark:text-black text-white my-[3.2rem] ">
                      Continue to payment
                    </button>
                  </div>
                </TabPanel>
                <TabPanel>
                  {/**the Payment Options were here */}
                  <Payment />
                </TabPanel>

                <TabPanel>
                  <Review />
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>

          <div className="w-[20.3rem] mt-[5.4rem]">
            <h3 className="font-bold text-[0.9rem]">Your Order</h3>

            <div className="flex  justify-between my-[1.05rem]    ">
              <div className="flex gap-[0.75rem] w-[14.95rem]">
                <Image
                  src="pink glasses.svg"
                  alt="pink-glasses"
                  width={30}
                  height={30}
                />
                <Image
                  src="black glasses.svg"
                  alt="pink-glasses"
                  width={30}
                  height={30}
                />
                <Image
                  src="plain glasses.svg"
                  alt="pink-glasses"
                  width={30}
                  height={30}
                />
              </div>
              <button className="border dark:text-[#919191] border-[#D1D5DB] px-[1.2rem] py-[0.475rem] text-[#5C5F6A] font-medium text-[0.7rem] rounded-[0.625rem] ">
                Edit cart
              </button>
            </div>

            <div className="flex justify-between">
              <p className="text-[#919191] text-[0.8rem] font-medium ">
                Subtotal:
              </p>
              <p className="text-[#111827] dark:text-[#919191] font-semibold text-[0.8rem]">
                $75.00
              </p>
            </div>
            <div className="flex justify-between  my-[0.8rem]">
              <p className="text-[#919191] text-[0.8rem] font-medium">
                Shipping:
              </p>
              <p className="text-[#111827] dark:text-[#919191] font-semibold text-[0.8rem]">
                $2.99
              </p>
            </div>
            <div className="flex justify-between  my-[1.31rem]">
              <p className="text-[#919191] text-[0.8rem] font-medium">Tax:</p>
              <p className="text-[#111827] dark:text-[#919191] font-semibold text-[0.8rem]">
                $2.99
              </p>
            </div>
            <div className="border my-[1.65rem] border-[#F1F1F1] dark:border-[#919191] "></div>
            <div className="my-[2rem] ">
              <p className=" text-[#4B5563] font-normal text-[0.6rem] my-[0.4rem] ">
                Enter Discount Code
              </p>

              <div className="flex">
                <input
                  aria-label=""
                  type="text"
                  required
                  name="Last name"
                  className="text-[0.7rem] w-[20.3rem] dark:text-[#919191] text-[#030712] font-medium  px-[1.64rem] py-[0.65rem] rounded-l-[4rem] border border-[#D1D5DB]"
                  placeholder="Ralph007"
                ></input>
                <button className="bg-[#030712] dark:bg-[#919191] text-white dark:text-black pl-[2.59rem] pr-[1.93rem] rounded-r-[4rem] text-[0.875rem] font-medium ">
                  Apply
                </button>
              </div>

              <div className="flex justify-between my-[1.24rem]">
                <p className="text-[#030712] font-medium text-[0.8rem]">
                  Total
                </p>
                <p className="text-[#030712] font-bold text-[0.8rem]">$2.99</p>
              </div>

              <div className=" border border-[#F1F1F1] "></div>
            </div>

            <button className="w-[20.3rem] py-[0.7rem] my-[2.4rem] px-[4.28rem] text-[0.8rem] hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white rounded-[3.88rem] bg-[#030712] dark:bg-[#919191] dark:text-black text-white ">
              Place Order
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
