import React from "react";
import NoPage from "./NoPage";
import Layout from "../../../components/Frontend/Layout";

function index() {
  return (
    <>
      <Layout
        title="Page Not Found -AL-haq BookShop"
        description="Oops! The page you are looking for does not exist. Please check the URL or navigate back to our homepage. Explore our extensive collection of books and study materials for competitive exams like CSS, PMS, PPSC, FPSC, and NTS at Al Haq Book Store."
        keyword="E-commerce web app, page not found, 404 error, books, accessories, home decor"
        author="Asad Ali"
      >
        <NoPage />
      </Layout>
    </>
  );
}

export default index;
