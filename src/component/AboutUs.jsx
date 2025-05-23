"use client"

import React, { useState, useEffect } from "react"
import {
  TrendingUp,
  Shield,
  Lightbulb,
  Layers,
  Users,
  Zap,
  Leaf,
  FlaskRoundIcon as Flask,
  Award,
  Headphones,
  Truck,
  HandshakeIcon,
} from "lucide-react"
import { motion } from "framer-motion"

const links = [{ name: "Our values", href: "#" }]
const stats = [
  { name: "Served Clients", value: "500+" },
  { name: "Total Products", value: "400+" },
  { name: "Served Region", value: "20+" },
  { name: "Availability", value: "24/7" },
]

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("market")
  const [isVisible, setIsVisible] = useState({
    hero: false,
    partner: false,
    features: false,
    benefits: false,
    manufacturing: false,
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = ["hero", "partner", "features", "benefits", "manufacturing"]
    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) observer.unobserve(element)
      })
    }
  }, [])

  const benefits = [
    {
      id: "market",
      title: "Strong Market Position",
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      description:
        "Strategically positioned to tap into the $300 billion Indian chemical market (projected by 2025), focusing on high-growth sectors and emerging opportunities.",
    },
    {
      id: "reliable",
      title: "Reliable Partner",
      icon: <Shield className="w-6 h-6 text-primary" />,
      description:
        "Extensive global sourcing network ensures consistent supply with a robust nationwide distribution network for efficient delivery, backed by ongoing pursuit of ISO 9001 certification.",
    },
    {
      id: "innovation",
      title: "Innovative Solutions",
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
      description:
        "In-house R&D team focused on sustainable and tailored chemical innovations with adoption of advanced manufacturing technologies to enhance efficiency and quality.",
    },
    {
      id: "business",
      title: "Integrated Business Model",
      icon: <Layers className="w-6 h-6 text-primary" />,
      description:
        "Synergy of trading and manufacturing operations enhances control, scalability, and efficiency across the entire supply chain.",
    },
    {
      id: "expertise",
      title: "Technical Expertise",
      icon: <Users className="w-6 h-6 text-primary" />,
      description:
        "Deep industry knowledge and technical capabilities to develop customized client solutions tailored to your specific needs.",
    },
    {
      id: "agile",
      title: "Agile Operations",
      icon: <Zap className="w-6 h-6 text-primary" />,
      description:
        "Flexible and responsive approach to meet evolving market demands swiftly, ensuring you stay ahead of the competition.",
    },
    {
      id: "sustainability",
      title: "Sustainability & Responsibility",
      icon: <Leaf className="w-6 h-6 text-primary" />,
      description:
        "Emphasis on eco-friendly processes and ethical business practices, committed to reducing environmental impact and increasing social accountability.",
    },
  ]

  const featureCards = [
    {
      id: "experience",
      title: "30 Years Experiences In Chemicals",
      subtitle: "Resourcing From China",
      icon: <Flask className="w-12 h-12 text-white" />,
    },
    {
      id: "quality",
      title: "Serious Quality Management",
      subtitle: "",
      icon: <Shield className="w-12 h-12 text-white" />,
    },
    {
      id: "products",
      title: "High Quality Products",
      subtitle: "",
      icon: <Award className="w-12 h-12 text-white" />,
    },
    {
      id: "support",
      title: "Fast Reaction To Questions",
      subtitle: "",
      icon: <Headphones className="w-12 h-12 text-white" />,
    },
    {
      id: "responsibility",
      title: "Full Responsibility For Deliveries",
      subtitle: "",
      icon: <HandshakeIcon className="w-12 h-12 text-white" />,
    },
    {
      id: "logistics",
      title: "Comprehensive Logistics Controlling",
      subtitle: "",
      icon: <Truck className="w-12 h-12 text-white" />,
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <>
      {/* Hero Section */}
      <div
        id="hero"
        className="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 py-24 sm:py-32"
      >
        <img
          alt="Team collaboration"
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center opacity-40"
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
            className="aspect-1097/845 w-[68.5625rem] bg-gradient-to-tr from-purple-500 to-cyan-500 opacity-20"
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
            className="aspect-1097/845 w-[68.5625rem] bg-gradient-to-tr from-purple-500 to-cyan-500 opacity-20"
          />
        </div>

        <motion.div
          className="mx-auto max-w-7xl px-6 lg:px-8"
          initial="hidden"
          animate={isVisible.hero ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <div className="mx-auto max-w-7xl text-center">
            <motion.h2
              className="text-5xl font-bold tracking-tight text-white sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
              variants={fadeIn}
            >
              About us
            </motion.h2>
            <div className="mx-auto max-w-7xl text-center">
              <motion.p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl leading-relaxed" variants={fadeIn}>
                Chemnovaa Solution is a dynamic and forward-thinking chemical company, driven by a passion for innovation, quality, and customer success. With a strong foothold in trading, distribution, and manufacturing, we specialize in delivering versatile, high-performance chemical solutions tailored to diverse industrial needs. Backed by a team of experienced professionals, cutting-edge R&D, and a commitment to sustainability, we prioritize excellence at every stage — from sourcing and formulation to logistics and compliance. At Chemnovaa, we don't just meet expectations; we exceed them by building trusted partnerships, embracing continuous improvement, and striving to be a catalyst for progress in every market we serve. Our growing portfolio reflects our adaptability and responsiveness to industry demands, while our client-first approach ensures personalized support and reliable delivery. As we continue to evolve, we remain grounded in our core values — integrity, innovation, and impact — to help shape a safer, more efficient, and sustainable future in chemicals.
              </motion.p>
            </div>
          </div>

          <motion.div
            className="mx-auto mt-16 max-w-4xl text-center"
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible.hero ? "visible" : "hidden"}
          >
            <dl className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.name}
                  className="flex flex-col gap-1 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
                  variants={fadeIn}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <dt className="text-base text-gray-300">{stat.name}</dt>
                  <dd className="text-4xl font-bold tracking-tight text-white">{stat.value}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </motion.div>
      </div>

      {/* Why Partner With Chemnovaa Section */}
      <div id="partner" className="mt-24 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isVisible.partner ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-600">
            Why Partner With Chemnovaa?
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Chemnovaa Solution Private Limited delivers a strong value proposition for partners seeking reliable,
            innovative, and sustainable chemical solutions.
          </p>
        </motion.div>
      </div>

      {/* Feature Cards Section  from-purple-600 to-cyan-600 */}
      <section
        id="features"
        className="mt-24 py-16 rounded-xl overflow-hidden relative"
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible.features ? "visible" : "hidden"}
          >
            {featureCards.map((feature, index) => {

              return (
                <motion.div
                  key={feature.id}
                  className={`bg-indigo-100 border-indigo-200 rounded-lg p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all duration-300 border`}
                  variants={fadeIn}
                  whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <div className={`mb-4 bg-purple-600 p-4 rounded-full`}>
                    {feature.icon}
                  </div>
                  <h3 className={`text-lg font-bold text-indigo-800 mb-1`}>
                    {feature.title}
                  </h3>
                  {feature.subtitle && (
                    <p className={`text-indigo-800 opacity-80`}>
                      {feature.subtitle}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="mt-24 py-16 rounded-xl overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-600"
            initial="hidden"
            animate={isVisible.benefits ? "visible" : "hidden"}
            variants={fadeIn}
          >
            Why Choose Us
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible.benefits ? "visible" : "hidden"}
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.id}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full border border-gray-100"
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-purple-100 to-cyan-100 rounded-full mr-3">
                    {React.cloneElement(benefit.icon, { className: "w-6 h-6 text-purple-600" })}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{benefit.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Manufacturing Capabilities Section */}
      <div id="manufacturing" className="mt-24 mx-auto max-w-7xl px-6 lg:px-8 mb-24">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isVisible.manufacturing ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-600">
            Our Manufacturing Capabilities
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Delivering excellence through advanced infrastructure, innovative R&D, and uncompromised quality standards.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible.manufacturing ? "visible" : "hidden"}
        >
          {/* Manufacturing Strength */}
          <motion.div
            className="bg-gradient-to-br from-purple-50 to-cyan-50 rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
            variants={fadeIn}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-100 to-purple-200 mr-4">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Manufacturing Strength</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-purple-600 mr-2">•</div>
                <p className="leading-relaxed">
                  Collaborations with leading industry experts to accelerate innovation and formulation development.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-purple-600 mr-2">•</div>
                <p className="leading-relaxed">
                  Emphasis on process optimization and tailor-made solutions to meet specific client requirements.
                </p>
              </li>
            </ul>
          </motion.div>

          {/* R&D Excellence */}
          <motion.div
            className="bg-gradient-to-br from-cyan-50 to-purple-50 rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
            variants={fadeIn}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-cyan-100 to-cyan-200 mr-4">
                <Lightbulb className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">R&D Excellence</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-cyan-600 mr-2">•</div>
                <p className="leading-relaxed">
                  State-of-the-art facilities equipped to scale up complex chemical processes with precision.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-cyan-600 mr-2">•</div>
                <p className="leading-relaxed">
                  Expertise in a broad range of chemistries, enabling versatile solutions for diverse applications.
                </p>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Advanced Infrastructure */}
        <motion.div
          className="mt-12 bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
          variants={fadeIn}
          initial="hidden"
          animate={isVisible.manufacturing ? "visible" : "hidden"}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-gradient-to-r from-purple-100 to-cyan-100 mr-4">
              <Layers className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Scalable & Advanced Infrastructure</h3>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            State-of-the-art facilities equipped to scale up complex chemical processes with precision.
          </p>

          <h4 className="text-xl font-bold text-gray-900 mb-4">
            Expertise in a broad range of chemistries, including:
          </h4>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible.manufacturing ? "visible" : "hidden"}
          >
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
              <motion.div
                key={index}
                className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-center hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 transition-colors duration-300"
                variants={fadeIn}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <p className="font-medium text-gray-900">{chemistry}</p>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-gray-500 italic mt-6 text-center">
            Need a specialized reaction or niche chemistry showcased? Let us know — we can highlight it.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible.manufacturing ? "visible" : "hidden"}
        >
          {/* Quality Assurance */}
          <motion.div
            className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
            variants={fadeIn}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-100 to-purple-200 mr-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Uncompromised Quality Assurance</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-purple-600 mr-2">•</div>
                <p className="leading-relaxed">
                  Robust quality systems backed by partnerships with independent third-party labs.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-purple-600 mr-2">•</div>
                <p className="leading-relaxed">
                  Rigorous sample testing and regulatory validation protocols to ensure product integrity.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-purple-600 mr-2">•</div>
                <p className="leading-relaxed">
                  Focused on delivering consistent quality and reliability in every batch.
                </p>
              </li>
            </ul>
          </motion.div>

          {/* Environmental Compliance */}
          <motion.div
            className="bg-gradient-to-br from-cyan-50 to-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
            variants={fadeIn}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-cyan-100 to-cyan-200 mr-4">
                <Leaf className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Environmental & Regulatory Compliance</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-cyan-600 mr-2">•</div>
                <p className="leading-relaxed">
                  Operations aligned with SCOMET and BIS regulations for controlled materials.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-cyan-600 mr-2">•</div>
                <p className="leading-relaxed">
                  Comprehensive environmental stewardship, including adherence to safety standards across logistics,
                  handling, and warehousing.
                </p>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
