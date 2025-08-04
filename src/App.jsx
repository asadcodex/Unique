import React, { useState, useRef, useEffect } from "react";

// --- Icon Components (using SVG for flexibility) ---

const DesignIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-red-500 mb-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

const WarrantyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-red-500 mb-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const PricingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-red-500 mb-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 9V7a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h1a2 2 0 002-2v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2a2 2 0 002 2h2m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10-2l2 2m-2-2l-2 2"
    />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 text-white"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.687-1.475L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-16 w-16 text-white opacity-80"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
      clipRule="evenodd"
    />
  </svg>
);

const HomeEstimatorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 text-red-500 mb-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

const KitchenEstimatorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 text-red-500 mb-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10h6c2-1 2.343-2.657 2.343-2.657zM12 22a10 10 0 110-20 10 10 0 010 20z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M12 18v-2"
    />
  </svg>
);

const WardrobeEstimatorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 text-red-500 mb-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m0 0v10l8 4m0-14L4 7"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M4 7v10l8 4 8-4V7L12 3 4 7z"
    />
  </svg>
);

const ServicesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-red-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    />
  </svg>
);
const OfferWarrantyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-red-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
const TechnologyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-red-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);
const PriceBenefitsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-red-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 9V7a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h1a2 2 0 002-2v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2a2 2 0 002 2h2m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V9"
    />
  </svg>
);
const MeetDesignerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-red-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);
const BookRenovationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-red-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);
const ExecutionIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-red-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);
const FinalInstallIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-red-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);
const MoveInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-red-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);
const CallIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);
const ConnectWhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 mr-2"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.687-1.475L.057 24zM6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);
const FooterSocialIcon = ({ path }) => (
  <svg
    className="w-6 h-6 text-gray-400 hover:text-white transition-colors"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d={path} />
  </svg>
);

// --- Components ---

const Header = () => {
  const phoneNumber = "+917065438903";
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <svg
              className="h-8 w-auto text-red-500"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
                fill="#F44336"
              />
              <path
                d="M20 28C24.4183 28 28 24.4183 28 20C28 15.5817 24.4183 12 20 12C15.5817 12 12 15.5817 12 20C12 24.4183 15.5817 28 20 28Z"
                fill="white"
              />
            </svg>
            <span className="ml-2 text-xl font-bold text-gray-800">
              UniqueDesign
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href={`tel:${phoneNumber}`}
              className="bg-red-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-red-600 transition duration-300"
            >
              Contact Us
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <a
              href={`tel:${phoneNumber}`}
              className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 text-sm"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  const whatsappLink = "https://wa.me/917065438903";
  return (
    <section className="relative bg-gray-800 text-white">
      <img
        src="https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg"
        alt="Modern Living Room"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/1200x800/334155/FFFFFF?text=Image+Error";
        }}
      />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Transform Your Home with Stunning Interiors{" "}
          <span className="text-yellow-400">Customized for You</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
          Smart design, elegant finishes, and tech-powered execution — all
          tailored to your style & budget
        </p>
        <div className="mt-8">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-500 text-white font-bold py-4 px-10 rounded-md text-lg hover:bg-red-600 transition duration-300 transform hover:scale-105"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: <DesignIcon />, text: "Personalised designs" },
    { icon: <WarrantyIcon />, text: "Flat 10-year warranty" },
    { icon: <PricingIcon />, text: "Transparent pricing" },
  ];
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around items-center text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center max-w-[100px] sm:max-w-none"
            >
              {feature.icon}
              <p className="text-sm sm:text-base font-medium text-gray-700">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomeDesignCraze = () => {
  const whatsappLink = "https://wa.me/917065438903";
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Designs that Define Your Lifestyle
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
          At Uniquedesign, we blend smart tech, modern aesthetics, and practical
          layouts to give your space a total transformation — one that feels as
          good as it looks, and lasts for years to come.
        </p>
        <div className="mt-8">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-500 text-white font-bold py-4 px-10 rounded-md text-lg hover:bg-red-600 transition duration-300 transform hover:scale-105"
          >
            BOOK YOUR FREE DESIGN CALL
          </a>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { value: "5000+", label: "Dream Homes Delivered" },
    { value: "1200+", label: "Kitchens & Bathrooms Transformed" },
    { value: "50+", label: "Cities Covered Across India" },
    { value: "100%", label: "Customized Design Experience" },
  ];
  return (
    <section className="bg-green-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
          Let our numbers do the talking!
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-bold text-green-900">{stat.value}</p>
              <p className="text-md text-green-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomesForEveryStyle = () => {
  const phoneNumber = "+917065438903";
  const styles = [
    {
      img: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
      title: "Minimal Luxe 2 BHK",
      desc: "Sleek neutrals with subtle gold accents for a timeless, modern vibe.",
    },
    {
      img: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg",
      title: "Vintage Bold 3 BHK",
      desc: "A rich fusion of wood textures and royal tones for a classy yet cozy feel.",
    },
    {
      img: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
      title: "Zen Fusion 4 BHK",
      desc: "Open layouts, earthy shades, and soft geometry for the modern minimalist.",
    },
    {
      img: "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg",
      title: "Royal Heritage Bedroom",
      desc: "Traditional Indian elegance reimagined with premium craftsmanship.",
    },
    {
      img: "https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg",
      title: "Tropical Modern Living",
      desc: "Bright colors, natural textures, and tons of character for any room.",
    },
    {
      img: "https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg",
      title: "Smart Modular Kitchen",
      desc: "Optimized storage and sleek finishes built for today’s tech-enabled lifestyle.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Spaces That Reflect Your Personality
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Modern layouts, bold palettes, and tailor-made finishes — explore
            designs built around you.
          </p>
        </div>
        <div className="flex overflow-x-auto space-x-6 pb-4 -mx-4 px-4">
          {styles.map((style, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={style.img}
                alt={style.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/CCCCCC/FFFFFF?text=Error";
                }}
              />
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg">{style.title}</h3>
                <p className="text-gray-600 text-sm my-2">{style.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={`tel:${phoneNumber}`}
            className="inline-block bg-red-500 text-white font-bold py-4 px-10 rounded-md text-lg hover:bg-red-600 transition duration-300 transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

const VideoReview = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/9346141/pexels-photo-9346141.jpeg"
              alt="Customer review"
              className="w-full"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/800x450/CCCCCC/FFFFFF?text=Image+Error";
              }}
            />
          </div>
          <div className="p-8 text-center">
            <p className="text-lg italic text-gray-700">
              "Our experience with UniqueDesign was pleasurable because of
              project managers. The work got done before 45 days just the way we
              wanted it to be."
            </p>
            <p className="mt-4 font-semibold text-gray-800">Swati and Gaurav</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const PriceEstimator = () => {
  const phoneNumber = "+917065438903";
  const estimatorItems = [
    {
      icon: <HomeEstimatorIcon />,
      title: "Full Home",
      description:
        "Curious about your total home makeover budget? Get a quick estimate in just a few clicks.",
    },
    {
      icon: <KitchenEstimatorIcon />,
      title: "Kitchen",
      description:
        "From modular cabinets to smart storage — find out what your dream kitchen might cost.",
    },
    {
      icon: <WardrobeEstimatorIcon />,
      title: "Wardrobe",
      description:
        "Need a custom wardrobe with perfect storage? Let’s give you a price range to plan with.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Estimate Your Interior Costs in Seconds
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Know what to expect before you start. Get instant, tailored cost
            estimates for your space — no guesswork{" "}
          </p>
        </div>
        <div className="flex overflow-x-auto space-x-6 pb-4 -mx-4 px-4 justify-center">
          {estimatorItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 max-w-sm bg-gray-50 rounded-lg shadow-md p-8 flex flex-col items-center text-center border"
            >
              {item.icon}
              <h3 className="font-bold text-2xl mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.description}</p>
              <a
                href={`tel:${phoneNumber}`}
                className="mt-auto bg-red-500 text-white font-semibold py-3 px-8 rounded-md hover:bg-red-600 transition duration-300 flex items-center"
              >
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b mb-2">
      <button
        onClick={onClick}
        className="w-full text-left py-4 px-6 flex justify-between items-center focus:outline-none bg-white rounded-lg shadow"
      >
        <div className="flex items-center">
          <span className="mr-4">{item.icon}</span>
          <span className="font-semibold text-lg">{item.title}</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-6 bg-white border-t">{item.content}</div>
      </div>
    </div>
  );
};

const WhatWeOffer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const offerItems = [
    {
      icon: <ServicesIcon />,
      title: "Our services",
      content: (
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Modular kitchens</li>
          <li>Modular wardrobes</li>
          <li>Lighting</li>
          <li>Flooring</li>
          <li>Electrical work</li>
          <li>Civil work</li>
          <li>False ceiling</li>
          <li>Wall design & painting</li>
        </ul>
      ),
    },
    {
      icon: <OfferWarrantyIcon />,
      title: "Warranty",
      content: (
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>
            FLAT 10-year warranty - Stay worry-free with our warranty policy on
            modular products.
          </li>
          <li>
            Up to 1-year on-site service warranty - Warranty on on-site services
            such as painting, electrical, plumbing and more.
          </li>
        </ul>
      ),
    },
    {
      icon: <TechnologyIcon />,
      title: "Technology & science",
      content: (
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>
            AquaBloc® Technology - Hermetically sealed edges that ensure no
            moisture enters the panels of your modular cabinets.
          </li>
          <li>
            AntiBubble® Technology - Super seamless panels without air bubbles
            for your modular cabinets.
          </li>
          <li>
            DuraBuild™ Technology - Robust structure for modular cabinets,
            making them strong and long-lasting.
          </li>
          <li>
            Design Science - Modular kitchens with improved accessibility that
            makes daily tasks more efficient and reduces stress on the body.
          </li>
        </ul>
      ),
    },
    {
      icon: <PriceBenefitsIcon />,
      title: "Price benefits",
      content: (
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>
            Price-match guarantee - Price match to a valid quote in comparison
            with a branded player and for exact scope.
          </li>
          <li>
            Flexible payment options - EMI solutions and payment schemes from
            leading financial partners.
          </li>
          <li>
            No hidden costs - Transparent costing without last-minute additions.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What we offer
          </h2>
        </div>
        <div className="space-y-2">
          {offerItems.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustedPartners = () => {
  const partners = [
    "SAINT-GOBAIN",
    "CENTURYPLY",
    "BOSCH",
    "SIEMENS",
    "Hettich",
    "Greenlam",
    "SAMSUNG",
    "Jaquar",
  ];
  const extendedPartners = [...partners, ...partners]; // Duplicate for seamless scroll

  return (
    <section className="py-16 md:py-24 bg-white">
      <style>
        {`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll-fast {
                    animation: scroll 15s linear infinite;
                }
                `}
      </style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our trusted partners
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Winning collaborations that produce winning designs.
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-fast">
            {extendedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-4"
              >
                <span className="text-gray-500 font-semibold text-xl tracking-wider">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestedBest = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "Drawer Motion Test",
      text: "Tested for thousands of open-close cycles so your drawers work smoothly for years — without jamming or noise.",
      image:
        "https://images.pexels.com/photos/4140925/pexels-photo-4140925.jpeg",
    },
    {
      name: "Shutter Cyclic Test",
      text: "Ensures long life for your shutters.",
      image:
        "https://images.pexels.com/photos/5467461/pexels-photo-5467461.jpeg",
    },
    {
      name: "Vertical Force Test",
      text: "Ensures superior hinge quality and avoids accidents.",
      image:
        "https://images.pexels.com/photos/8004094/pexels-photo-8004094.jpeg",
    },
    {
      name: "Shelf Load Test",
      text: "Ensures shelves don't break under considerable load.",
      image:
        "https://images.pexels.com/photos/6550462/pexels-photo-6550462.jpeg",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Engineered for Everyday Life
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We rigorously test every unit — drawers, cabinets, hinges, and
            shelves — to ensure durability, safety, and long-lasting
            performance.
          </p>
        </div>
        <div className="flex justify-center border-b mb-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`py-2 px-4 text-sm sm:text-base font-medium transition-colors duration-300 ${
                activeTab === index
                  ? "border-b-2 border-red-500 text-red-500"
                  : "text-gray-500 hover:text-red-500"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">{tabs[activeTab].name}</h3>
          <p className="text-gray-600 mb-6">{tabs[activeTab].text}</p>
          <img
            src={tabs[activeTab].image}
            alt={tabs[activeTab].name}
            className="mx-auto rounded-lg shadow-lg"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/600x400/CCCCCC/FFFFFF?text=Error";
            }}
          />
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { icon: <MeetDesignerIcon />, text: "Meet a designer" },
    { icon: <BookRenovationIcon />, text: "(5% payment) Book a renovation" },
    { icon: <ExecutionIcon />, text: "(60% payment) Execution begins" },
    { icon: <FinalInstallIcon />, text: "(100% payment) Final installations" },
    { icon: <MoveInIcon />, text: "Move in and enjoy!" },
  ];
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            How it works
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 h-full w-0.5 bg-gray-200 -translate-x-1/2"></div>
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center justify-center mb-12 relative"
            >
              <div className="bg-white p-2 rounded-full border-2 border-gray-200 z-10">
                {step.icon}
              </div>
              <p className="ml-8 text-lg font-medium text-gray-700">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ConnectWithUs = () => {
  const phoneNumber = "+917065438903";
  const whatsappLink = "https://wa.me/917065438903";
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Connect with us</h2>
        <p className="mt-2 text-lg text-gray-600">
          Reach out on WhatsApp or give us a call for the best home design
          experience.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center justify-center bg-blue-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300"
          >
            <CallIcon />
            Call Now
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-green-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-600 transition duration-300"
          >
            <ConnectWhatsAppIcon />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

const ImageScratcher = ({ beforeImage, afterImage }) => {
  const canvasRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = beforeImage;
    img.onload = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = 40;
      ctx.lineCap = "round";
    };
  }, [beforeImage]);

  const getMousePos = (canvas, evt) => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    };
  };

  const getTouchPos = (canvas, touch) => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    };
  };

  const startDragging = (e) => {
    setIsDragging(true);
    setShowText(false);
    scratch(e);
  };

  const stopDragging = () => {
    setIsDragging(false);
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
  };

  const scratch = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const pos = e.type.includes("touch")
      ? getTouchPos(canvas, e.touches[0])
      : getMousePos(canvas, e);

    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  };

  return (
    <div className="relative w-full aspect-video">
      <img
        src={afterImage}
        alt="After"
        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
      />
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg cursor-grab"
        onMouseDown={startDragging}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onMouseMove={scratch}
        onTouchStart={startDragging}
        onTouchEnd={stopDragging}
        onTouchMove={scratch}
      />
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-lg pointer-events-none transition-opacity duration-300 ${
          showText ? "opacity-100" : "opacity-0"
        }`}
      >
        <p>Scratch to see the transformation</p>
      </div>
    </div>
  );
};

const TransformingHomes = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "Modern Home",
      before:
        "https://images.pexels.com/photos/29593334/pexels-photo-29593334.jpeg",
      after:
        "https://images.pexels.com/photos/4389916/pexels-photo-4389916.jpeg",
    },
    {
      name: "Contemporary Home",
      before:
        "https://images.pexels.com/photos/9963289/pexels-photo-9963289.jpeg",
      after:
        "https://images.pexels.com/photos/17527767/pexels-photo-17527767.jpeg",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Transforming homes with love
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Get a glimpse of our exceptional home designs.
          </p>
        </div>
        <div className="flex justify-center border-b mb-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`py-2 px-4 text-sm sm:text-base font-medium transition-colors duration-300 ${
                activeTab === index
                  ? "border-b-2 border-red-500 text-red-500"
                  : "text-gray-500 hover:text-red-500"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div>
          <ImageScratcher
            key={activeTab}
            beforeImage={tabs[activeTab].before}
            afterImage={tabs[activeTab].after}
          />
        </div>
      </div>
    </section>
  );
};

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      text: "We wanted our new home to look contemporary and modern since we picked up tastes from across travelling the world.",
      author: "Priyanka and Tarun",
      image:
        "https://images.pexels.com/photos/20051624/pexels-photo-20051624.jpeg",
    },
    {
      text: "The team at UniqueDesign was incredibly professional and brought our vision to life. We couldn't be happier!",
      author: "Anjali and Rohan",
      image:
        "https://images.pexels.com/photos/23489332/pexels-photo-23489332.jpeg",
    },
    {
      text: "From start to finish, the process was seamless. The quality of work is outstanding. Highly recommended!",
      author: "Meera and Sameer",
      image:
        "https://images.pexels.com/photos/12415621/pexels-photo-12415621.jpeg",
    },
    {
      text: "A fantastic experience. They understood our needs perfectly and delivered a beautiful and functional home.",
      author: "Kavita and Vikram",
      image:
        "https://images.pexels.com/photos/20021554/pexels-photo-20021554.jpeg",
    },
    {
      text: "The attention to detail and commitment to quality is what sets UniqueDesign apart. Thank you for our dream home!",
      author: "Sunita and Raj",
      image:
        "https://images.pexels.com/photos/32315696/pexels-photo-32315696.jpeg",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            We'll let our clients do the talking
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Here's what they have to say
          </p>
        </div>
        <div className="relative max-w-2xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="mx-auto mb-4"
                    />
                    <p className="italic text-gray-700">"{testimonial.text}"</p>
                    <p className="font-semibold mt-4">{testimonial.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md -ml-6"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md -mr-6"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

const DreamHomeCTA = () => {
  const whatsappLink = "https://wa.me/917065438903";
  return (
    <section className="bg-purple-800 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold">
          Your dream home is just a click away
        </h2>
        <p className="mt-2 text-lg text-purple-200">
          Book a free consultation with our expert interior designers.
        </p>
        <div className="mt-8">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-500 text-white font-bold py-4 px-10 rounded-md text-lg hover:bg-red-600 transition duration-300"
          >
            START YOUR DESIGN JOURNEY
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      path: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3h-2.5v6.95C18.05 21.45 22 17.19 22 12z",
    },
    {
      name: "Twitter",
      path: "M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.54-.18-6.69-1.87-8.8-4.46-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.81 1.91 3.58-.71 0-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.94.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.35 0-.69-.02-1.03-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.38-.01-.57.84-.6 1.56-1.36 2.14-2.22z",
    },
    {
      name: "Instagram",
      path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8c1.99 0 3.6-1.61 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">UniqueDesign</h3>
            <p className="text-gray-400">
              Crafting beautiful and functional spaces that last a lifetime.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              {socialLinks.map((link) => (
                <a key={link.name} href="#" aria-label={link.name}>
                  <FooterSocialIcon path={link.path} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} UniqueDesign. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/917065438903";
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 z-50"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
};

// --- Main App Component ---

export default function App() {
  return (
    <div className="bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <HomeDesignCraze />
        <StatsSection />
        <HomesForEveryStyle />
        <VideoReview />
        <PriceEstimator />
        <WhatWeOffer />
        <TrustedPartners />
        <TestedBest />
        <HowItWorks />
        <ConnectWithUs />
        <TransformingHomes />
        <TestimonialCarousel />
        <DreamHomeCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
