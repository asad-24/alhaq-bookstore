import React from "react";
import policyImage from "../../../assets/images/privacypolicy.png";
import HeroSection from "../../../components/Frontend/HeroSection";
import Whatsapp from "../../../components/Frontend/Whatsapp";

function Policy() {
  return (
    <>
     <Whatsapp/>
      <HeroSection
        heading={"Policy - Al-Haq BookStore"}
        paragraph={
          "Read our policy to understand our terms and conditions, privacy practices, and returns and refunds policy."
        }
        page={"Policy"}
        style={"home"}
      />
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-12  ">
            <img
              src={policyImage}
              alt="Privacy Policy"
              className="img-fluid object-fit-cover rounded-2"
            />
          </div>
          <div className="col-lg-6 col-12 ">
            <div className="text-center">
              <h2 className="text-center bg-dark py-3 text-white ">
                Privacy Policy
              </h2>
              <div className="py-4">
                <p>
                At Al Haq Book Store, we are committed to protecting your privacy and ensuring the security of your personal information. We collect and use your data in accordance with our privacy policy to provide you with a seamless shopping experience.
                </p>
                <p>
                Our website employs industry-standard security measures to safeguard your information. We do not share your personal data with third parties without your consent. By using our website, you agree to the terms outlined in our privacy policy.
                </p>
                <p>
                If you have any questions or concerns regarding our privacy practices, please don't hesitate to contact our customer support team. Thank you for choosing Al Haq Book Store.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Policy;
