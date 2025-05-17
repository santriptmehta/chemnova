"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, TrendingUp, Shield, Lightbulb, Layers, Users, Zap, Leaf } from "lucide-react"

const links = [{ name: "Our values", href: "#" }]
const stats = [
  { name: "Served Clients", value: "-+" },
  { name: "Total Products", value: "400+" },
  { name: "Served Region", value: "+-" },
  { name: "Availablity", value: "+-" },
]

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("market")

  const benefits = [
    {
      id: "market",
      title: "Strong Market Position",
      icon: <TrendingUp className="w-6 h-6 text-black" />,
      description:
        "Strategically positioned to tap into the $300 billion Indian chemical market (projected by 2025), focusing on high-growth sectors and emerging opportunities.",
    },
    {
      id: "reliable",
      title: "Reliable Partner",
      icon: <Shield className="w-6 h-6 text-black" />,
      description:
        "Extensive global sourcing network ensures consistent supply with a robust nationwide distribution network for efficient delivery, backed by ongoing pursuit of ISO 9001 certification.",
    },
    {
      id: "innovation",
      title: "Innovative Solutions",
      icon: <Lightbulb className="w-6 h-6 text-black" />,
      description:
        "In-house R&D team focused on sustainable and tailored chemical innovations with adoption of advanced manufacturing technologies to enhance efficiency and quality.",
    },
    {
      id: "business",
      title: "Integrated Business Model",
      icon: <Layers className="w-6 h-6 text-black" />,
      description:
        "Synergy of trading and manufacturing operations enhances control, scalability, and efficiency across the entire supply chain.",
    },
    {
      id: "expertise",
      title: "Technical Expertise",
      icon: <Users className="w-6 h-6 text-black" />,
      description:
        "Deep industry knowledge and technical capabilities to develop customized client solutions tailored to your specific needs.",
    },
    {
      id: "agile",
      title: "Agile Operations",
      icon: <Zap className="w-6 h-6 text-black" />,
      description:
        "Flexible and responsive approach to meet evolving market demands swiftly, ensuring you stay ahead of the competition.",
    },
    {
      id: "sustainability",
      title: "Sustainability & Responsibility",
      icon: <Leaf className="w-6 h-6 text-black" />,
      description:
        "Emphasis on eco-friendly processes and ethical business practices, committed to reducing environmental impact and increasing social accountability.",
    },
  ]

  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
        />
        {/* Background blur shapes */}
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-1097/845 w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>

        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-1097/845 w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">About us</h2>
            <div className="mx-auto max-w-7xl text-center">
              <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl">
                At Chemnovaa Solution Private Limited, we are not just a chemical company — we are a powerhouse of
                innovation, precision, and reliability. With a robust presence in trading, distribution, and
                manufacturing, we deliver cutting-edge chemical solutions that power progress across multiple
                industries. Our extensive product portfolio is a testament to our commitment to excellence, offering
                unmatched versatility, consistency, and performance. Through a holistic, client-centric approach, we
                provide tailor-made formulations, seamless logistics, and rigorous quality assurance, ensuring that
                every solution exceeds expectations. Fueled by a relentless drive for technological advancement,
                regulatory mastery, and sustainable impact, we are constantly redefining industry standards. At the
                heart of Chemnovaa lies a bold vision — to be the catalyst of success for our partners by delivering
                nothing short of extraordinary quality, unwavering innovation, and exceptional customer satisfaction.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-4xl text-center">
            <dl className="mt-16 grid grid-cols-1 gap-8 text-center sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col gap-1">
                  <dt className="text-base text-gray-300">{stat.name}</dt>
                  <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      {/* Why Partner With Chemnovaa Section */}
      <div className="mt-24 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Why Partner With Chemnovaa?
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Chemnovaa Solution Private Limited delivers a strong value proposition for partners seeking reliable,
            innovative, and sustainable chemical solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Benefits Selector */}
          <div className="lg:col-span-2">
            <div className="space-y-2">
              {benefits.map((benefit) => (
                <button
                  key={benefit.id}
                  onClick={() => setActiveTab(benefit.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between transition-all duration-300 ${
                    activeTab === benefit.id
                      ? "bg-gradient-to-r from-[#776fff]/10 to-[#776fff]/10 border-l-4 border-[#776fff]"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`mr-3 p-2 rounded-full ${activeTab === benefit.id ? "bg-[#776fff]" : "bg-gray-200"}`}
                    >
                      {benefit.icon}
                    </div>
                    <span className="font-medium text-gray-900">{benefit.title}</span>
                  </div>
                  {activeTab === benefit.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-700" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-700" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Benefit Content */}
          <div className="lg:col-span-3">
            {benefits.map(
              (benefit) =>
                activeTab === benefit.id && (
                  <div key={benefit.id} className="bg-gray-50 rounded-lg p-8 border border-gray-200 shadow-sm">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">{benefit.description}</p>
                  </div>
                ),
            )}
          </div>
        </div>
      </div>
      {/* Manufacturing Capabilities Section */}
      <div className="mt-24 mx-auto max-w-7xl px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Our Manufacturing Capabilities
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Delivering excellence through advanced infrastructure, innovative R&D, and uncompromised quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Manufacturing Strength */}
          <div className="bg-gradient-to-br from-[#776fff]/5 to-[#ff4694]/5 rounded-xl p-8 border border-gray-200 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-[#776fff]/10 mr-4">
                <Zap className="w-6 h-6 text-[#776fff]" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Manufacturing Strength</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-[#776fff] mr-2">•</div>
                <p>
                  Collaborations with leading industry experts to accelerate innovation and formulation development.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-[#776fff] mr-2">•</div>
                <p>Emphasis on process optimization and tailor-made solutions to meet specific client requirements.</p>
              </li>
            </ul>
          </div>

          {/* R&D Excellence */}
          <div className="bg-gradient-to-br from-[#ff4694]/5 to-[#776fff]/5 rounded-xl p-8 border border-gray-200 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-[#ff4694]/10 mr-4">
                <Lightbulb className="w-6 h-6 text-[#ff4694]" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">R&D Excellence</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-[#ff4694] mr-2">•</div>
                <p>State-of-the-art facilities equipped to scale up complex chemical processes with precision.</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-[#ff4694] mr-2">•</div>
                <p>Expertise in a broad range of chemistries, enabling versatile solutions for diverse applications.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Advanced Infrastructure */}
        <div className="mt-12 bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm">
          <div className="flex items-center mb-6">
            <div className="p-2 rounded-full bg-gray-200 mr-4">
              <Layers className="w-6 h-6 text-[#776fff]" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Scalable & Advanced Infrastructure</h3>
          </div>

          <p className="text-gray-700 mb-6">
            State-of-the-art facilities equipped to scale up complex chemical processes with precision.
          </p>

          <h4 className="text-xl font-medium text-gray-900 mb-4">
            Expertise in a broad range of chemistries, including:
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Nitration Reaction",
              "Hydrogenation",
              "Esterification",
              "Friedel–Crafts Alkylation",
              "Oxidation Reaction",
              "Ethoxylation",
              "Chlorination",
              "Grignard Reaction",
            ].map((chemistry, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-center">
                <p className="font-medium text-gray-900">{chemistry}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-500 italic mt-4 text-center">
            Need a specialized reaction or niche chemistry showcased? Let us know — we can highlight it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Quality Assurance */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-gray-200 mr-4">
                <Shield className="w-6 h-6 text-[#776fff]" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Uncompromised Quality Assurance</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-gray-900 mr-2">•</div>
                <p>Robust quality systems backed by partnerships with independent third-party labs.</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-gray-900 mr-2">•</div>
                <p>Rigorous sample testing and regulatory validation protocols to ensure product integrity.</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-gray-900 mr-2">•</div>
                <p>Focused on delivering consistent quality and reliability in every batch.</p>
              </li>
            </ul>
          </div>

          {/* Environmental Compliance */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-gray-200 mr-4">
                <Leaf className="w-6 h-6 text-[#ff4694]" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Environmental & Regulatory Compliance</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-gray-900 mr-2">•</div>
                <p>Operations aligned with SCOMET and BIS regulations for controlled materials.</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-gray-900 mr-2">•</div>
                <p>
                  Comprehensive environmental stewardship, including adherence to safety standards across logistics,
                  handling, and warehousing.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
