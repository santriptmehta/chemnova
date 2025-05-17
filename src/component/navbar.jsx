"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, PopoverGroup } from "@headlessui/react"
import {
  BeakerIcon,
  UserIcon,
  FunnelIcon,
  ArrowPathIcon,
  Bars3Icon,
  SquaresPlusIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline"

import "./style/navbar.css"

import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid"

const products = [
  {
    name: "Industrial Chemical",
    description: "High-performance chemicals used across manufacturing and processing industries.",
    href: "/product/Industrial-Chemical",
    icon: BeakerIcon,
  },
  {
    name: "Construction Chemical",
    description: "Enhancing durability, workability, and sustainability in building materials.",
    href: "/product/Construction-Chemical",
    icon: FunnelIcon,
  },
  {
    name: "Beauty & Personal Care",
    description: "Ingredients and formulations that cater to skincare, haircare, and wellness.",
    href: "/product/Beauty-Personal-Care",
    icon: UserIcon,
  },
  {
    name: "Food and Feed Additives",
    description: "Nutritional and functional additives for safe and enriched food/feed production.",
    href: "/product/Food-Feed-Additives",
    icon: SquaresPlusIcon,
  },
  {
    name: "Speciality Chemicals",
    description: "Tailored chemical solutions for specific industrial and consumer applications.",
    href: "/product/Speciality-Chemicals",
    icon: ArrowPathIcon,
  },
  {
    name: "Pharma Intermediates",
    description: "Essential building blocks used in the synthesis of active pharmaceutical ingredients.",
    href: "/product/Pharma-Intermediates",
    icon: ArrowPathIcon,
  },
  {
    name: "Other Trading Imported Materials",
    description: "Diverse range of high-quality imported materials for industrial trading needs.",
    href: "/product/Other-Trading-Materials",
    icon: ArrowPathIcon,
  },
]

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
]

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header>
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="text-sm/6 font-semibold text-gray-900">
            Home
          </Link>

          <div className="relative group">
            <button className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              Product
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </button>

            <div className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
              <div className="p-4">
                {products.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50 cursor-pointer"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <div className="block font-semibold text-gray-900">{item.name}</div>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/about" className="text-sm/6 font-semibold text-gray-900">
            About Us
          </Link>
          <Link to="/contact" className="text-sm/6 font-semibold text-gray-900">
            Contact Us
          </Link>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
            <span className="sr-only">Search</span>
            <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
