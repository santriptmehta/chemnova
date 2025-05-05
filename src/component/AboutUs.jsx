import "./style/navbar.css";

const links = [
  { name: "Our values", href: "#" },
];
const stats = [
  { name: "Served Clients", value: "-+" },
  { name: "Total Products", value: "400+" },
  { name: "Served Region", value: "+-" },
  { name: "Availablity", value: "+-" },
];

export default function AboutUs() {
  return (

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
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            About us
          </h2>
          <div className="mx-auto max-w-7xl text-center">
            <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl">
              We are a young, dynamic, and full-service exporter and distributor
              of chemicals based in India. Specializing in the Benzoic Acid &
              Derivatives Series, we are committed to providing our customers
              with high-quality products and exceptional service. We have
              established our own factory to professionally produce Dibenzoate
              plasticizers (DEGDB/DPGDB and their blends) under our brand names:
              SGCFLEX314, SGCFLEX342, SGCFLEX80, and SGCFLEX50. This has
              positioned us as a leading manufacturer of Dibenzoate Plasticizers
              in India. Our reliability and strong performance have earned us
              the trust of several manufacturers who have chosen us as their
              official export distributor. We also assist our overseas partners
              in identifying, organizing, and managing reliable Indian
              manufacturers to ensure strict adherence to quality standards,
              payment terms, delivery schedules, and other key requirements.
              Additionally, we support them in auditing their Indian suppliers.
              Looking ahead, we are committed to open, trust-based, and
              long-term partnerships with all our business associates. Growing
              Together With You!
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-4xl text-center">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold text-white sm:grid-cols-2 md:flex md:justify-center lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>

          <dl className="mt-16 grid grid-cols-1 gap-8 text-center sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col gap-1">
                <dt className="text-base text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    
    
  );
}
