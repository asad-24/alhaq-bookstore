import React from "react";
import UserMenu from "../../../components/Dashboard/UserMenu";
import Layout from "../../../components/Frontend/Layout";
import { useAuthContext } from "../../../context/AuthContext";

function DashboardHome() {
  const { auth } = useAuthContext();
  const user = auth.user;

  return (
    <>
      <Layout
        title="Dashboard - AL-haq bookstore"
        description="Welcome to the Al Haq Book Store Dashboard! Here, you can manage your online bookstore with ease. Stay updated on your store's performance, handle orders, manage products, and more. Experience the power and convenience of the Al Haq Book Store Dashboard and take your educational resource business to new heights."
        keyword="E-commerce dashboard, manage store, order management, product management, business performance"
        author="Asad"
      >
        <div className="container-fluid py-5">
          <div className="row">
            <div className="col-md-3 my-2 text-center">
              <UserMenu />
            </div>
            <div className="col-md-9">
              <h2>User Details</h2>
              <div>
                <p>
                  <strong>Name:</strong> {user.name}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Address:</strong> {user.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default DashboardHome;
