import React from "react";
import about from "../../../assets/images/AboutUs.png";
import HeroSection from "../../../components/Frontend/HeroSection";
import Whatsapp from "../../../components/Frontend/Whatsapp";

function About() {
  return (
    <>
     <Whatsapp/>
      <HeroSection
        heading={"About - AL-HAQ BOOKSTORE"}
        paragraph={
          "Let us help you pave the way to a brighter future."
        }
        page={"About"}
        style={"home"}
      />
      <div className="container-fluid py-5  ">
        <div className="row px-3 ">
          <div className="col-12 col-lg-6 px-2">
            <img
              src={about}
              alt="about us"
              className="img-fluid rounded-2"
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div className="col-12 col-lg-6 px-3">
            <h2 className="text-center py-3 bg-dark text-white">About Us</h2>
            <div className="text-center py-4 ">
              <p className="text-start fs-5">
              Welcome to Al Haq Book Store, your one-stop destination for all your exam preparation needs in Pakistan. At Al Haq Book Store, we are dedicated to providing comprehensive and reliable resources to help you succeed in various competitive exams, including CSS, PMS, PPSC, FPSC, NTS, and more
              </p>
              <h2 className="text-center py-3 fw-bold  ">Our Mission</h2>
             <p className="text-start fs-5">
             Our mission is to empower students and professionals by offering high-quality books and study materials that are crucial for excelling in competitive exams. We understand the challenges and pressures that come with preparing for these exams, and we strive to make your journey smoother by providing the best resources at your fingertips.
             </p>
             
            </div>
          </div>
        </div>
        <div  className="row  bg-body-secondary px-5">
        <div className="col-12 px-2 ">
        <h1 className="text-center py-3  fw-bold">
        Our Story </h1>
        <p className="text-start fs-5">
        Al Haq Book Store is an extension of the Al Haq Education System, a trusted name in online education in Pakistan. With years of experience in preparing students for various tests, we recognized the need for a dedicated platform where learners can easily access the books they need. Our book store is designed to cater to the unique requirements of aspirants, ensuring that they have access to the latest and most relevant study materials.
        </p>

        <h1 className=" py-3 fw-bold ">
        What We Offer
        </h1>
        <div className=" py-3  ">
          <ul className="text-start fs-5">
            <li className="py-2" >
            <strong>Wide Range of Books:</strong> We offer an extensive collection of books covering all major competitive exams in Pakistan. From comprehensive guides to specialized subject materials, we have everything you need to prepare effectively.
            </li>
            <li className="py-2">
            <strong>Quality Assurance: </strong>Our books are sourced from reputable publishers and authors known for their expertise and reliability. We ensure that every book we offer meets the highest standards of quality.
            </li>
            <li className="py-2">
            <strong>Convenience and Accessibility: </strong> With our user-friendly e-commerce platform, you can browse, select, and order your required books from the comfort of your home. Our efficient delivery system ensures that your books reach you promptly, no matter where you are in Pakistan.
            </li>
            <li className="py-2">
            <strong>Customer Support: </strong> Our dedicated customer support team is always here to assist you. Whether you have questions about a specific book or need guidance on choosing the right materials, we are just a call or click away.
            </li>
          </ul>
        </div>
        <h1 className=" py-3 fw-bold ">
        Why Choose Al Haq Book Store?
        </h1>
        <div className=" py-3  ">
          <ul className="text-start fs-5">
            <li className="py-2" >
            <strong>Expertise and Experience:</strong> Leveraging our background in the Al Haq Education System, we bring a deep understanding of what students need to succeed.
            </li>
            <li className="py-2">
            <strong>Comprehensive Selection:</strong> We offer books for all major competitive exams, making us a one-stop shop for your preparation needs.
            </li>
            <li className="py-2">
            <strong>Commitment to Excellence:</strong>  We are committed to providing the best resources and services to help you achieve your goals.
            </li>
          </ul>
        </div>

        </div>
        </div>
      </div>
    </>
  );
}

export default About;
