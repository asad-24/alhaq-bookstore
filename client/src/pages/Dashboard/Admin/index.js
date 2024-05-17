import React from "react";
import Layout from "../../../components/Frontend/Layout";
import Admin from "./Admin";

function Index() {
  return (
    <>
      <Layout
        title="Admin Dashboard - Al-Haq BookStore "
        description="Manage your online bookstore with ease using the Al Haq Book Store Admin Dashboard. Access powerful features to handle products, orders, customers, and more. Stay in control and streamline your bookstore operations. Discover the convenience and efficiency of the Al Haq Book Store Admin Dashboard."
        keyword="E-commerce admin panel, dashboard, manage products, orders, customers, e-commerce operations"
        author="Asad"
      >
        <Admin />
      </Layout>
    </>
  );
}

export default Index;
