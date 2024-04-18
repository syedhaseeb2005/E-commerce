import React from "react";
import Navbar from "../Component/Navbar";
import Announcement from "../Component/Announcement";
import Slider from "../Component/Slider";
import Categories from "../Component/Categories";
import Products from "../Component/Products";
import Newsletter from "../Component/NewsLetter";
import Footer from "../Component/Footer";

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </>
  );
};

export default Home;
