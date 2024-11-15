"use client";

import { GlobalContext } from "@/context";
import { getAllAdminProducts } from "@/services/product";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { isAuthUser } = useContext(GlobalContext);

  const [products, setProducts] = useState([]);
  const router = useRouter();

  async function getListOfProducts() {
    const res = await getAllAdminProducts();

    if (res.success) {
      setProducts(res.data);
    }
  }

  useEffect(() => {
    getListOfProducts();
  }, []);

  console.log(products);

  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-[#f5e5e4] bg-[#694441] max-w-full">
      <section className="">
        <div className="grid max-w-screen-xl px-4 py-8 mx-suto  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
            <img className="rounded-lg"
              src="https://i.pinimg.com/564x/76/e6/b9/76e6b9355380c85fe9a80dddae96172c.jpg"
              alt="Explore Shop Collection"
            />
          </div>
          <div className="pl-20 place-self-center lg:col-span-7 text-center">
            <h1 className="text- max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              Welcome to our store
            </h1>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-center">
              Quisquemos sodales suscipit tortor ditaemcos condimentum de cosmo
              lacus meleifend menean diverra loremous.
            </p>

            <button
              type="button"
              onClick={() => router.push("/product/listing/all-products")}
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white rounded-lg hover:bg-slate-600"
            >
              Explore Shop Collection
            </button>
          </div>
        </div>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid p-6 bg-green-200 rounded-lg place-content-center sm:p-8">
              <div className="max-w-md mx-auto text-center lg:text-left">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                    Collection of different products at your budget
                  </h2>
                </div>
                <button
                  onClick={() => router.push("/product/listing/all-products")}
                  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Shop ALL
                </button>
              </div>
            </div>
            <div className="lg:col-span-2 lg:py-8 bg-white rounded-lg px-4">
              <ul className="grid grid-cols-2 gap-4">
                {products && products.length
                  ? products
                      .filter((item) => item.onSale === "yes")
                      .splice(0, 2)
                      .map((productItem) => (
                        <li
                          onClick={() =>
                            router.push(`/product/${productItem._id}`)
                          }
                          className="cursor-pointer"
                          key={productItem._id}
                        >
                          <div>
                            <img
                              src={productItem.imageUrl}
                              alt="Sale Product Item"
                              className="object-cover w-full rounded aspect-square"
                            />
                          </div>
                          <div className="mt-3">
                            <h3 className="font-medium text-gray-900">
                              {productItem.name}
                            </h3>
                            <p className="mt-1 text-sm text-gray-800">
                              ${productItem.price}{" "}
                              <span className="text-red-700">{`(-${productItem.priceDrop}%) Off`}</span>
                            </p>
                          </div>
                        </li>
                      ))
                  : null}
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 bg-white rounded-2xl">
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-950 sm:text-3xl">
              SHOP BY CATEGORY
            </h2>
          </div>
          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li>
              <div className="relative block group">
                <img
                  src="https://i.pinimg.com/564x/13/14/4c/13144c742f14e8dfb481e689fd9af6cb.jpg"
                  className="object-cover w-full aspect-square rounded-xl"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium  text-black"></h3>
                  <button
                    onClick={() => router.push("/product/listing/car")}
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="relative block group">
                <img
                  src="https://i.pinimg.com/564x/66/c2/3f/66c23f9566266ec63f39b2dac1a56585.jpg"
                  className="object-cover w-full aspect-square rounded-xl"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-black" ></h3>
                  <button
                    onClick={() => router.push("/product/listing/phone")}
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </li>
            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <div className="relative block group">
                <img
                  src="https://i.pinimg.com/564x/3b/89/4e/3b894e5d9e1feb7c90a52440e61c2f9c.jpg"
                  className="object-cover w-full aspect-square rounded-xl"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white"></h3>
                  <button
                    onClick={() => router.push("/product/listing/helicopter")}
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
    
    <footer class="bg-[#382d2c] text-white py-8 max-w-full">
    <div class="container px-4 ml-[7rem]">
        <div class="flex flex-wrap justify-between">
            {/* <!-- Logo and Description --> */}
            <div class="w-full md:w-1/3 mb-6 md:mb-0">
                <div class="flex items-center mb-4">
                    {/* <img src="/path/to/logo.png" alt="Logo" class="h-10 mr-3"> */}
                    <h2 class="text-xl font-bold">Direct Deal</h2>
                </div>
                <p class="text-gray-400 mr-5">Here you can easily sell, purchase and get items on rent direct to the dealer. Feel free to connect with the dealers and get want you like...</p>
            </div>

            {/* <!-- Navigation Links --> */}
            <div class="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                <ul class="space-y-2">
                    <li><a href="#" class="hover:text-gray-400">Home</a></li>
                    <li><a href="#" class="hover:text-gray-400">Shop</a></li>
                    <li><a href="#" class="hover:text-gray-400">About Us</a></li>
                    <li><a href="#" class="hover:text-gray-400">Contact</a></li>
                </ul>
            </div>

            {/* Contact Information   */}
            <div class="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
                <ul class="space-y-2">
                    <li><a href="mailto:directdeal@gmail.com" class="hover:text-gray-400">directdeal@gmail.com</a></li>
                    <li><a href="tel:+1234567890" class="hover:text-gray-400">+91 1111-222-333</a></li>
                    <li>India HP 1234556</li>
                </ul>
            </div>
        </div>

        {/* <!-- Social Media Icons --> */}
        {/* <div class="flex justify-center mt-6">
            <a href="#" class="text-gray-400 hover:text-white mx-2">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5.1 3.9 9.3 8.9 9.9v-7h-2.7V12h2.7v-1.9c0-2.7 1.6-4.1 4-4.1 1.1 0 2.1.1 2.4.2v2.7h-1.6c-1.3 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7c5-.6 8.9-4.8 8.9-9.9z"/></svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white mx-2">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm4.7 18.2h-2.5v-6.1c0-1.4-.5-2.4-1.7-2.4-1.2 0-1.8.8-1.8 1.8v6.7H9.5v-9.7h2.3v1.3c.3-.5 1.2-1.3 2.7-1.3 1.9 0 3.3 1.3 3.3 4.2v6.2h.2zm-6.9-7.2H5.2v7.4h2.7v-7.4zm-.5-2.4c-1.3 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3 2.3-1 2.3-2.3-1-2.3-2.3-2.3z"/></svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white mx-2">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22c-5.5 0-10-4.5-10-10S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10zm0-15.5c-1.5 0-2.8 1.3-2.8 2.8s1.3 2.8 2.8 2.8 2.8-1.3 2.8-2.8-1.3-2.8-2.8-2.8zM12 16.5c-2.1 0-4.1-1-5.4-2.6-.5-.6-.4-1.5.2-2s1.5-.4 2-.2c1.1 1 2.5 1.7 4.2 1.7 2.5 0 4.6-1.5 5.4-3.6.3-.8.9-1.3 1.6-1.3.1 0 .3 0 .5.1.8.3 1.3 1.2 1.3 2.2v.1c0 3.1-2.5 5.6-5.6 5.6z"/></svg>
            </a>
        </div> */}
    </div>
    <div class="mt-6 text-center text-gray-400">
            <p>&copy; <span id="currentYear"></span> Direct Deal. All rights reserved.</p>
        </div>
</footer>
    </>
  );
}
