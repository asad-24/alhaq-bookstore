import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// react helmet
import { Helmet } from "react-helmet";

function Layout({ children, title, description, keyword, author }) {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keyword} />
        <meta name="author" content={author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: "AL-HAQ  Bookstore",
  description:
    "Welcome to Al Haq Book Store, your premier destination for top-quality educational resources. At Al Haq Book Store, we offer a curated selection of books and study materials specifically designed to help you excel in competitive exams such as CSS, PMS, PPSC, FPSC, and NTS. Each book is carefully chosen to ensure it meets the highest standards of quality and relevance.",
  keyword:
    "E-commerce web app, Buy products, Online store, Study materials, Competitive exams, CSS, PMS, PPSC, FPSC, NTS, Educational resources, Comprehensive guides, Specialized subject books, design",
  author: "Asad Ali",
};

export default Layout;
