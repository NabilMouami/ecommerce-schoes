"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toprateslaes } from "@/data/data.js";
import Navbar from "@/components/Navbar/Navbar";
import Cart from "@/components/cart/Cart";
import Hero from "@/components/Hero/Hero";
import Products from "@/components/Products/Products";
import Sales from "@/components/Sales";

import TopProducts from "@/components/TopProducts/TopProducts";
import Banner from "@/components/Banner/Banner";
import Subscribe from "@/components/Subscribe/Subscribe";
import Testimonials from "@/components/Testimonials/Testimonials";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  const [orderPopup, setOrderPopup] = useState<boolean>(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Cart />

      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Sales endpoint={toprateslaes} />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}
