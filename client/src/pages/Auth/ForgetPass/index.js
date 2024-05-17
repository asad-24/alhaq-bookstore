import React from "react";
import ForgetPassword from "./ForgetPassword";
import Layout from "../../../components/Frontend/Layout";

function index() {
  return (
    <>
      <Layout
        title="Forgot Password -AL-haq BookShop"
        description="Forgot your password? No worries! Enter your email address and we'll send you instructions on how to reset your password. Regain access to your TrendBlend account and continue enjoying our wide range of fashion apparel, accessories, and home decor items."
        keyword="E-commerce web app, forgot password, reset password, email address, books, bookstore, home decor"
        author="Asad"
      >
        <ForgetPassword />
      </Layout>
    </>
  );
}

export default index;
