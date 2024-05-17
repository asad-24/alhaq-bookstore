import React from "react";
import Contact from "./Contact";
import Layout from "../../../components/Frontend/Layout";

function index() {
  return (
    <>
      <Layout
        title="Contact Us - AL-haq BookShop"
        description="Feel free to tweak the message further to better align with your specific needs or tone."
        keyword="E-commerce web app, contact us, customer support, feedback"
        author="Asad Ali"
      >
        <Contact />
      </Layout>
    </>
  );
}

export default index;
