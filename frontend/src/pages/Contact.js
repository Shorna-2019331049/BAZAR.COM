import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1>CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and info about product feel free to call anytime 
            we are avaialible 24x7
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.shorna412@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 01761429552
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;