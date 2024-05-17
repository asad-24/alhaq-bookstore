import React from "react";
import Layout from "../../../components/Frontend/Layout";
import About from "./About";

function index() {
  return (
    <>
      <Layout
        title="About AL-haq BookShop - AL-haq BookShop"
        description="Welcome to Al Haq Book Store, your premier destination for top-quality educational resources. At Al Haq Book Store, we offer a curated selection of books and study materials specifically designed to help you excel in competitive exams such as CSS, PMS, PPSC, FPSC, and NTS. Each book is carefully chosen to ensure it meets the highest standards of quality and relevance."
        keyword="E-commerce web app, Buy products, Online store, Study materials, Competitive exams, CSS, PMS, PPSC, FPSC, NTS, Educational resources, Comprehensive guides, Specialized subject books, design"
        author="Asad Ali"
      >
        <About />
      </Layout>
    </>
  );
}

export default index;
