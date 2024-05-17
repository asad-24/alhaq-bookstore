import React from "react";
import Home from "./Home";
import Layout from "../../../components/Frontend/Layout";
// const LazyLoadHome = React.lazy(import("../"))

function index() {
  return (
    <>
      <Layout
        title="AL-haq BookShop"
        description="Welcome to Al Haq Book Store, your go-to destination for comprehensive study materials and educational resources. Discover the latest and most relevant books carefully curated to help you excel in competitive exams. Shop with us for top-notch quality, exceptional customer service, and an enjoyable shopping experience.."
        keyword="E-commerce web app, book store, home decor, shopping, online store, books, , lifestyle,  Online store, Study materials, Competitive exams, CSS, PMS, PPSC, FPSC, NTS, Educational resources, Comprehensive guides, Specialized subject books, design"
        author="Asad"
      >
        <Home />
      </Layout>
    </>
  );
}

export default index;
