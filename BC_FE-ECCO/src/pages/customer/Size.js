import React from "react";
import Header from "../../components/customer/Header/Header";
import Footer from "../../components/customer/Footer/Footer";
import size from "../../assets/customer/images/size.png";

export default function Size() {
  return (
    <>
      <Header />
      <div style={{ marginTop: "100px" }} className="container">
        <h4>BẢNG SIZE</h4>
        <img src={size} width={"100%"} alt="" />
      </div>
      <Footer />
    </>
  );
}
