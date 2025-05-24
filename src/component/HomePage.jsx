"use client";

import { useState } from "react";
import { Link } from "react-router-dom"
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./style/headComponent.css";
import Footer from "./footer.jsx";
import AboutUs from "./AboutUs.jsx";
import Product from "./Product.jsx";

const products = [
  {
    name: "Industrial Chemical",
    description: "High-performance chemicals used across manufacturing and processing industries.",
    href: "/product/Industrial-Chemical",
    bg: "/assets/industrialChemical.jpg",
    button: "View Trips",
  },
  {
    name: "Construction Chemical",
    description: "Enhancing durability, workability, and sustainability in building materials.",
    href: "/product/Construction-Chemical",
    bg: "/assets/constructionChemical.jpg",
    button: "View Trips",
  },
  {
    name: "Beauty & Personal Care",
    description: "Ingredients and formulations that cater to skincare, haircare, and wellness.",
    href: "/product/Beauty-Personal-Care",
    bg: "/assets/Beauty_Personal_Care_chemicals.jpg",
    button: "View Trips",
  },
  {
    name: "Food & Feed Additives",
    description: "Nutritional and functional additives for safe and enriched food/feed production.",
    href: "/product/Food-Feed-Additives",
    bg: "/assets/Food&FeedAdditives.jpg",
    button: "View Trips",
  },
  {
    name: "Speciality Chemicals",
    description: "Tailored chemical solutions for specific industrial and consumer applications.",
    href: "/product/Speciality-Chemicals",
    bg: "/assets/SpecialityChemicals.jpg",
    button: "View Trips",
  },
  {
    name: "Pharma Intermediates",
    description: "Essential building blocks used in the synthesis of active pharmaceutical ingredients.",
    href: "/product/Pharma-Intermediates",
    bg: "/assets/PharmaIntermediates.jpg",
    button: "View Trips",
  },
  ,
  {
    name: "Adhesive Material",
    description: "Diverse range of high-quality imported materials for Adhesive",
    href: "/product/Other-Trading-Materials",
    bg: "/assets/adhesive_material.jpg",
    button: "View Trips",
  },
  ,
  {
    name: "Inorganic Raw Materials",
    description: "Diverse range of high-quality imported Inorganic Raw Materials",
    href: "/product/Other-Trading-Materials",
    bg: "/assets/inorganicRawMaterial.jpg",
    button: "View Trips",
  },
  ,
  {
    name: "Monomers",
    description: "Diverse range of high-quality of monomers",
    href: "/product/Other-Trading-Materials",
    bg: "/assets/monomers.jpg",
    button: "View Trips",
  },
  ,
  {
    name: "Vitamins",
    description: "Diverse range of Vitamins",
    href: "/product/Other-Trading-Materials",
    bg: "/assets/vitamins.jpg",
    button: "View Trips",
  },
  {
    name: "Other Trading Imported Materials",
    description: "Diverse range of high-quality imported materials for industrial trading needs.",
    href: "/product/Other-Trading-Materials",
    bg: "/assets/OtherTradingImportedMaterials.jpg",
    button: "View Trips",
  },
];


export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="mx-auto max-w-2xl min-h-[100vh] flex flex-col justify-center items-center px-4">
        <div className="text-center mb-30">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
            Empowering Industries with Reliable Chemical Solutions
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Precision, purity, and performance—delivering chemical excellence
            worldwide.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      <AboutUs />

      {/* Travel Cards Section */}
      <section className="px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          All Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
          {products.map((item, index) => (
            <div
              key={index}
              className="relative group flex items-end text-white h-[350px] rounded-xl overflow-hidden shadow-xl bg-black/20"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.bg})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-0" />
              <div
                className="relative z-10 p-4 
              translate-y-0 opacity-100 
              sm:transform sm:transition-all sm:duration-700 sm:translate-y-[60%] sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-hover:delay-100"
              >
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="italic font-serif text-base">{item.description}</p>
                <Link to={item.href}>
                  <button className="mt-4 text-xs uppercase bg-black hover:bg-gray-800 px-4 py-2 rounded text-white tracking-wider focus:outline-dashed focus:outline-yellow-400">
                    {item.button}
                  </button>
                </Link>

              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  );
}
