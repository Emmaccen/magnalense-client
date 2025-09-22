
import React from "react";
//import Header from "@/components/header";
import Link from "next/link";
import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels} from '@headlessui/react'


export default function CheckoutPage() {
  return (
    <>
      <title>Checkout Page</title>
      <link rel="icon" type="image/svg+xml" href="/phone-solid-full.svg" />

      {/* <Header /> */}
      <main>
        <section className="flex dark:text-white justify-center gap-[3rem]">
          {/* The first Div */}
          <div className="w-[53rem]">
            <h1 className="mt-[1.5rem] mb-[1.5rem] mr-[45rem] font-semibold text-[2rem]">
              Checkout
            </h1>
            <div className="w-[23.3rem] mr-[24rem] mb-[1.5rem] dark:bg-[#FFF5EA] bg-[#FFF5EA] border-[#FFE4C7] h-[4rem] rounded-[0.63rem] ">
              <p className="pt-[1.4rem] pb-[2rem] pl-[2rem] font-light text-xs dark:text-black">
                Already have an account? <Link href="#">Log In</Link> for faster
                checkout
              </p>
            </div>

              <TabGroup className=" border border-white gap-[3rem] mb-[1.5rem]">
              <TabList className="flex items-center w-[23.3rem] gap-[0.75rem]">
            
              <Tab className="flex items-center w-[9.62rem] gap-[1rem] ">
                <p className="text-[#919191]">Information</p>
                <div className="dark:bg-[#6B7280] w-[2rem] h-[2rem] rounded-[2rem] relative ">
                  <Image
                    src="home-simple.svg"
                    alt="home-simple"
                    width={20}
                    height={20}
                    className="absolute bottom-2 left-1.5"
                  />
                </div>
              </Tab>
              <Tab className="flex items-center w-[9.62rem] gap-[1rem] ">
                <p className="dark:text-[#919191]">Payment</p>
                <div className="bg-[#6B7280] w-[2rem] h-[2rem] rounded-[2rem] relative ">
                  <Image
                    src="credit-card.svg"
                    alt="home-simple"
                    width={20}
                    height={20}
                    className="absolute bottom-2 left-1.5"
                  />
                </div>
              </Tab>
              <div className="flex items-center w-[9.62rem] gap-[1rem]">
                <p className="dark:text-[#919191]">Review</p>
                <div className="bg-[#6B7280] w-[2rem] h-[2rem] rounded-[2rem] relative ">
                  <Image
                    src="page-flip.svg"
                    alt="home-simple"
                    width={20}
                    height={20}
                    className="absolute bottom-1.5 left-1.5"
                  />
                </div>
              </div>
              </TabList>
              <div className="w-[23.3rem] my-[1rem] mb-[2rem] border border-[#F1F1F1] dark:border-[#919191] "></div>


       <TabPanels>
                <TabPanel >
                    <div >
              <label
                htmlFor="email"
                className="font-medium text-[1.12rem] dark:text-[#919191] text-[#030712]"
              >
                Customer Information
              </label>
              <div className="flex gap-[2rem]">
                <div className="">
                  <input
                    type="email"
                    required
                    name="Email address"
                    className="w-[20rem] my-[1rem] h-[3.13rem] px-[1.25rem] rounded-[0.623rem] border border-[#D1D5DB]"
                    placeholder="Email address"
                  ></input>
                </div>
                <div className="flex items-center w-full max-w-md">
                  <select className="p-3 border  text-[#4B5563] border-[#D1D5DB] rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500">
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
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="p-2.5 border border-[#D1D5DB] text-[#4B5563] rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="my-[2rem]">
                <p className="dark:text-[#919191]">Shipping address</p>
                <div className="flex gap-[2rem]">
                  <input
                    type="text"
                    required
                    name="First name"
                    className="w-[20rem] my-[1rem]  h-[3.13rem] px-[1.25rem] rounded-[0.623rem] border border-[#D1D5DB]"
                    placeholder="First name"
                  ></input>
                  <input
                    type="text"
                    required
                    name="Last name"
                    className="w-[20rem] my-[1rem] h-[3.13rem] px-[1.25rem] rounded-[0.623rem] border border-[#D1D5DB]"
                    placeholder="Emmaccen"
                  ></input>
                </div>
                <div className="flex gap-[2rem]">
                  <div className="flex items-center   max-w-md">
                    <select className="w-[20rem] py-3 px-[1.25rem] border  text-[#4B5563]  border-[#D1D5DB] rounded-[0.63rem] focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="+234" className="text-[#4B5563]">
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
                    <select className="w-[20rem] py-3 px-[1.25rem] border  text-[#4B5563]  border-[#D1D5DB] rounded-[0.63rem] focus:outline-none focus:ring-2 focus:ring-blue-500">
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
              <input
                type="text"
                required
                name="Last name"
                className="w-[42rem] h-[3.13rem] px-[1.25rem] rounded-[0.623rem] border border-[#D1D5DB]"
                placeholder="Address"
              ></input>
              <div className="my-[2rem]">
                <p className="dark:text-[#919191]">Billing address</p>
                <div className="flex gap-[2rem]">
                  <input
                    type="text"
                    required
                    name="First name"
                    className="w-[20rem] my-[1rem]  h-[3.13rem] px-[1.25rem] rounded-[0.623rem] border border-[#D1D5DB]"
                    placeholder="First name"
                  ></input>
                  <input
                    type="text"
                    required
                    name="Last name"
                    className="w-[20rem] my-[1rem] h-[3.13rem] px-[1.25rem] rounded-[0.623rem] border border-[#D1D5DB]"
                    placeholder="Emmaccen"
                  ></input>
                </div>
                <div className="flex gap-[2rem]">
                  <div className="flex items-center   max-w-md">
                    <select className="w-[20rem] py-3 px-[1.25rem] border  text-[#4B5563]  border-[#D1D5DB] rounded-[0.63rem] focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="+234" className="text-[#4B5563]">
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
                    <select className="w-[20rem] py-3 px-[1.25rem]  border  text-[#4B5563]  border-[#D1D5DB] rounded-[0.63rem] focus:outline-none focus:ring-2 focus:ring-blue-500">
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
              <input
                type="text"
                required
                name="Last name"
                className="w-[42rem] h-[3.13rem] px-[1.25rem] rounded-[0.623rem] border border-[#D1D5DB]"
                placeholder="Address"
              ></input>
              <button className="w-[21rem] h-[3.25rem] hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white rounded-[3.88rem] bg-[#030712] dark:bg-[#919191] dark:text-black text-white my-[4rem] ">
                Continue to payment
              </button>
            </div>
                </TabPanel>




                <TabPanel>Content 2</TabPanel>
                <TabPanel>Content 3</TabPanel>
      </TabPanels>
            </TabGroup>  

            
            
            {/* <div className="my-[2rem] ">
              <label
                htmlFor="email"
                className="font-medium text-[1.12rem] dark:text-[#919191] text-[#030712]"
              >
                Customer Information
              </label>
              <div className="flex gap-[2rem]">
                <div className="">
                  <input
                    type="email"
                    required
                    name="Email address"
                    className="w-[20rem] my-[1rem]  h-[3.13rem] px-[1.25rem] rounded-[0.623rem] border border-[#D1D5DB]"
                    placeholder="Email address"
                  ></input>
                </div>
                <div className="flex items-center w-full max-w-md">
                  <select className="p-3 border  text-[#4B5563] border-[#D1D5DB] rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500">
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
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="p-2.5 border border-[#D1D5DB] text-[#4B5563] rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="my-[2rem]">
                <p>Shipping address</p>
                <div className="flex gap-[2rem]">
                  <input
                    type="text"
                    required
                    name="First name"
                    className="w-[20rem] my-[1rem]  h-[3.13rem] px-[1.25rem] rounded-[0.623rem] border border-[#D1D5DB]"
                    placeholder="First name"
                  ></input>
                  <input
                    type="text"
                    required
                    name="Last name"
                    className="w-[20rem] my-[1rem] h-[3.13rem] px-[1.25rem] rounded-[0.623rem] border border-[#D1D5DB]"
                    placeholder="Emmaccen"
                  ></input>
                </div>
                <div className="flex gap-[2rem]">
                  <div className="flex items-center   max-w-md">
                    <select className="w-[20rem] py-3 px-[1.25rem] border  text-[#4B5563]  border-[#D1D5DB] rounded-[0.63rem] focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="+234" className="text-[#4B5563]">
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
                    <select className="w-[20rem] py-3 px-[1.25rem] border  text-[#4B5563]  border-[#D1D5DB] rounded-[0.63rem] focus:outline-none focus:ring-2 focus:ring-blue-500">
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
              <input
                type="text"
                required
                name="Last name"
                className="w-[42rem] h-[3.13rem] px-[1.25rem] rounded-[0.623rem] border border-[#D1D5DB]"
                placeholder="Address"
              ></input>
              <div className="my-[2rem]">
                <p>Shipping address</p>
                <div className="flex gap-[2rem]">
                  <input
                    type="text"
                    required
                    name="First name"
                    className="w-[20rem] my-[1rem]  h-[3.13rem] px-[1.25rem] rounded-[0.623rem] border border-[#D1D5DB]"
                    placeholder="First name"
                  ></input>
                  <input
                    type="text"
                    required
                    name="Last name"
                    className="w-[20rem] my-[1rem] h-[3.13rem] px-[1.25rem] rounded-[0.623rem] border border-[#D1D5DB]"
                    placeholder="Emmaccen"
                  ></input>
                </div>
                <div className="flex gap-[2rem]">
                  <div className="flex items-center   max-w-md">
                    <select className="w-[20rem] py-3 px-[1.25rem] border  text-[#4B5563]  border-[#D1D5DB] rounded-[0.63rem] focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="+234" className="text-[#4B5563]">
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
                    <select className="w-[20rem] py-3 px-[1.25rem]  border  text-[#4B5563]  border-[#D1D5DB] rounded-[0.63rem] focus:outline-none focus:ring-2 focus:ring-blue-500">
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
              <input
                type="text"
                required
                name="Last name"
                className="w-[42rem] h-[3.13rem] px-[1.25rem] rounded-[0.623rem] border border-[#D1D5DB]"
                placeholder="Address"
              ></input>
              <button className="w-[21rem] h-[3.25rem] hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white rounded-[3.88rem] bg-[#030712] dark:bg-[#919191] dark:text-black text-white my-[4rem] ">
                Continue to payment
              </button>
            </div> */}
          </div>





          <div className="w-[25rem] mt-[2rem] mb-[1.5rem] border">
            <h3 className="font-bold text-[1.13rem]">Your Order</h3>

            <div className="flex w-[25rem] justify-between my-[1.31rem]    ">
              <div className="flex gap-[0.75rem] ">
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
              <button className="border dark:text-[#919191] border-[#D1D5DB] px-4 py-2 text-[#5C5F6A] font-medium text-[0.88rem] rounded-[0.625rem] ">
                Edit cart
              </button>
            </div>

            <div className="flex justify-between w-[25rem]     item">
              <p className="text-[#919191]">Subtotal:</p>
              <p className="text-[#111827] dark:text-[#919191] font-semibold text-[1rem]">$75.00</p>
            </div>
            <div className="flex justify-between w-[25rem] my-[1.31rem]     item">
              <p className="text-[#919191]">Shipping:</p>
              <p className="text-[#111827] dark:text-[#919191] font-semibold text-[1rem]">$2.99</p>
            </div>
            <div className="flex justify-between w-[25rem] my-[1.31rem]     item">
              <p className="text-[#919191]">Tax:</p>
              <p className="text-[#111827] dark:text-[#919191] font-semibold text-[1rem]">$2.99</p>
            </div>
            <div className="w-[25rem]  border border-[#F1F1F1] dark:border-[#919191] "></div>
            <div className="my-[2rem] ">
              <p className="w-[25rem] text-[#4B5563] font-normal text-[0.75rem] gap-[0.5rem] ">
                Enter Discount Code
              </p>

              <div className="flex">
                <input
                  type="text"
                  required
                  name="Last name"
                  className="w-[272rem] dark:text-[#919191] text-[#030712] font-medium text-[0.88rem] h-[2.5rem] px-[1.25rem] rounded-l-[4rem] border border-[#D1D5DB]"
                  placeholder="Ralph007"
                ></input>
                <button className="bg-[#030712] dark:bg-[#919191] text-white dark:text-black px-10 rounded-r-[4rem] text-[0.875rem] font-medium ">
                  Apply
                </button>
              </div>

              <div className="flex justify-between w-[25rem] my-[1.31rem]     item">
                <p className="text-[#030712]">Total</p>
                <p className="text-[#030712] font-semibold text-[1rem]">
                  $2.99
                </p>
              </div>

              <div className="w-[25rem]  border border-[#F1F1F1] "></div>
            </div>

            <button className="w-[25rem] h-[2.5rem] rounded-[3.88rem] bg-[#030712] dark:bg-[#919191] dark:text-black text-white my-[2rem] ">
              Place Order
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
