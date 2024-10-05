import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductHome } from "../../redux/silce/customer/productSilce";
import { UrlImage } from "../../url";
import { Link, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./ProductHome.css";
import productnew from "../../assets/customer/images/prdnew.webp";
import salesproduct from "../../assets/customer/images/sales.png";

const URL_IMAGE = UrlImage();

const ProductHome = () => {
  const navigate = useNavigate();
  const listProduct = useSelector(
    (state) => state.customer.product.listProduct
  );
  const displayProducts = listProduct?.slice(0, 8) || [];
  const dispatch = useDispatch();
  useEffect(() => {
    AOS.init();
    dispatch(fetchProductHome());
  }, []);
  

  return (
    <div
      style={{ marginTop: "100px", marginBottom: "40px" }}
      className="container"
    >
      <h3 style={{ marginBottom: "20px", textAlign: "center" }}>
      New Shoes Arrival
      </h3>
      <p style={{ textAlign: "justify", width: "600px", margin: "auto" }}>
        
      </p>
      <div style={{ marginTop: "50px"}} className="row"  data-aos="fade-up">
        {listProduct && listProduct.length > 0 ? (
          displayProducts.map((item, index) => {
            return (
              <div
                key={`product-${index}`}
                style={{  marginBottom: "35px"}}
                className="Producthome col-3"
              >
                <div className="badge-tagx">
                  
                    <img src={productnew}/>
                </div>
                <div>
                  <Link to={`/detail/${item.id}`}>
                    <img width={"100%"} style={{borderRadius: "15px",}} src={URL_IMAGE + item.image} alt="" />
                  </Link>
                
                </div>
                <div>
                  <p
                    style={{
                      overflow: "hidden",
                      maxHeight: "2.8em",
                      lineHeight: "1.4em",
                      cursor: "pointer",
                      display:"flex",
                      justifyContent:"center",
                    }}
                    onClick={() => navigate(`/detail/${item.id}`)}
                  >
                    {item.name}
                  </p>
                </div>
                <div>
                  <p style={{ fontWeight: "bold", textAlign: "center" }}>
                    {item.price.toLocaleString("vi-VN")} đ
                  </p>
                </div>
                <div className="btn-hover">
                    <a href={`/detail/${item.id}`}>
                      Chi tiết sản phẩm
                    </a>
                </div>
              </div>
            );
          })
        ) : (
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <h4>LOADING...</h4>
          </div>
        )}
      </div>
      <h3 style={{ marginBottom: "20px", textAlign: "center" }}>
      Sale Shoes Arrival
      </h3>
      <div style={{ marginTop: "50px"}} className="row"  data-aos="fade-up">
        {listProduct && listProduct.length > 0 ? (
          displayProducts.map((item, index) => {
            return (
              <div
                key={`product-${index}`}
                style={{  marginBottom: "35px"}}
                className="Producthome col-3"
              >
                <div className="badge-tagx">
                  
                    <img src={productnew}/>
                </div>
                <div>
                  <Link to={`/detail/${item.id}`}>
                    <img width={"100%"} style={{borderRadius: "15px",}} src={URL_IMAGE + item.image} alt="" />
                  </Link>
                
                </div>
                <div>
                  <p
                    style={{
                      overflow: "hidden",
                      maxHeight: "2.8em",
                      lineHeight: "1.4em",
                      cursor: "pointer",
                      display:"flex",
                      justifyContent:"center",
                    }}
                    onClick={() => navigate(`/detail/${item.id}`)}
                  >
                    {item.name}
                  </p>
                </div>
                <div>
                  <p style={{ fontWeight: "bold", textAlign: "center" }}>
                    {item.price.toLocaleString("vi-VN")} đ
                  </p>
                </div>
                <div className="btn-hover">
                    <a href={`/detail/${item.id}`}>
                      Chi tiết sản phẩm
                    </a>
                </div>
              </div>
            );
          })
        ) : (
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <h4>LOADING...</h4>
          </div>
        )}
      </div>
    </div>
    
  );
};


export default ProductHome;
