import React from "react";
import { Navbar } from "../components/Navbar";
import Hero1 from "../components/Hero1";
import ProductCarousel from "../components/ProductCarousel";
import { features, products } from "../constants";

function Home1() {
  return (
    <div>
      <Navbar />
      <Hero1 />
      <Products />
    </div>
  );
}

export default Home1;

function Products() {
  return (
    <section className="w-full  bg-gradient-to-b from-white to-hero overflow-hidden">
      <div className="relative w-full max-w-[1400px] mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-5xl font-bold font-mon text-center text-head mb-4 ">
            Meet Our Robots
          </h2>
          <p className="text-center text-[#656566] text-lg font-int max-w-md">
            Explore our versatile lineup of robots, each designed to cater to
            unique needs and applications.
          </p>
        </div>
        <div>
          <ProductCarousel products={products} />
        </div>
      </div>
    </section>
  );
}

// const Feature = () => {
//   return (
//     <section className="bg-gradient-to-b from-white to-hero">
//       <div className="max-w-7xl mx-auto py-10 pt-0 px-3 sm:px-5 xl:px-0 pb-20">
//         <div className="flex justify-between overflow-hidden">
//           <h2 className="text-3xl sm:text-4xl md:text-6xl col-span-2 text-head font-mon font-bold sm:my-20 my-10 text-nowrap uppercase">
//             Built to <br />
//             Do More
//           </h2>
//           {/* <img
//             src={robotBase}
//             className="-ml-10 xs:-ml-0 w-72 xs:w-80 sm:w-96 md:w-1/2 brightness-110"
//             alt="robot"
//           /> */}
//         </div>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-5">
//           {features.map((feature, index) => {
//             return <FeatureCard key={index} i={index} {...feature} />;
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };
