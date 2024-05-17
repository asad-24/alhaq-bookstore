import React from "react";
import Category from "./Category";
import Layout from "../../../components/Frontend/Layout";

function index() {
  return (
    <>
      <Layout
        title="Category Page -  AL-haq BookShop"
        description="Explore a wide range of categories at Al Haq Book Store. Find the latest books, study guides, and educational resources for various competitive exams such as CSS, PMS, PPSC, FPSC, and NTS. Discover the perfect materials to enhance your preparation and achieve academic success.        ."
        keyword="E-commerce web app, category page, "
        author="Asad Ali"
      >
        <Category />
      </Layout>
    </>
  );
}

export default index;
