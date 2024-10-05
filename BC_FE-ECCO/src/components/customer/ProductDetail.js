import React, { useEffect, useState } from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import { getProductDetail } from "../../redux/silce/customer/productSilce";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UrlImage } from "../../url";
import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { addTocartDetail } from "../../redux/silce/customer/cartSlice";
import { FaUserCircle } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const navigate = useNavigate();
  const URL_IMAGE = UrlImage();
  let { product_id } = useParams();
  const dispatch = useDispatch();
  const { rate, productDetail, countRate, countStar } = useSelector(
    (state) => state.customer.product
  );
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(null);
  const handleOptionChange = (event) => {
    setSize(event.target.value);
  };
  useEffect(() => {
    dispatch(getProductDetail(product_id));
  }, []);
  const addTocartClick = (product, cartQuantity) => {
    if (!size) {
      toast.error("Vui lòng chọn size giày");
      return;
    }
    let product_cart = { ...product, size: size, cartQuantity: cartQuantity };
    dispatch(addTocartDetail(product_cart));
    setQuantity(1);
  };
  const displayRate = (rate) => {
    let starContent;
    switch (rate) {
      case 1:
        starContent = (
          <div>
            <FaStar style={{ color: "#e3c01c" }} />
          </div>
        );
        break;
      case 2:
        starContent = (
          <div>
            <FaStar style={{ color: "#e3c01c" }} />
            <FaStar style={{ color: "#e3c01c" }} />
            <FaStar style={{ color: "#e3c01c" }} />
            <FaStar style={{ color: "#e3c01c" }} />
            <FaStar style={{ color: "#e3c01c" }} />
          </div>
        );
        break;
      case 3:
        starContent = (
          <div>
            <FaStar style={{ color: "#e3c01c" }} />
            <FaStar style={{ color: "#e3c01c" }} />
            <FaStar style={{ color: "#e3c01c" }} />
          </div>
        );
        break;
      case 4:
        starContent = (
          <div>
            <FaStar style={{ color: "#e3c01c" }} />
            <FaStar style={{ color: "#e3c01c" }} />
            <FaStar style={{ color: "#e3c01c" }} />
            <FaStar style={{ color: "#e3c01c" }} />
          </div>
        );
        break;
      case 5:
        starContent = (
          <div>
            <FaStar style={{ color: "#e3c01c" }} />
            <FaStar style={{ color: "#e3c01c" }} />
            <FaStar style={{ color: "#e3c01c" }} />
            <FaStar style={{ color: "#e3c01c" }} />
            <FaStar style={{ color: "#e3c01c" }} />
          </div>
        );
        break;
      default:
        starContent = <div>Invalid star value</div>;
        break;
    }

    return <div>{starContent}</div>;
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = `0${date.getUTCMonth() + 1}`.slice(-2);
    const day = `0${date.getUTCDate()}`.slice(-2);

    return `${day}/${month}/${year}`;
  };
  return (
    <>
      {productDetail && countStar && (
        <div
          style={{ marginBottom: "50px", marginTop: "100px" }}
          className="container"
        >
          <h3 style={{ marginBottom: "40px" }}>CHI TIẾT SẢN PHẨM</h3>
          <div className="row">
            <div className="col-6">
              <div style={{ width: "60%" }}>
                <MDBCarousel showControls>
                  <MDBCarouselItem itemId={1}>
                    <img
                      src={URL_IMAGE + productDetail.image}
                      width={"100px"}
                      className="d-block w-100"
                      alt="..."
                    />
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId={2}>
                    <img
                      src={URL_IMAGE + productDetail.image}
                      width={"100px"}
                      className="d-block w-100"
                      alt="..."
                    />
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId={3}>
                    <img
                      src={URL_IMAGE + productDetail.image}
                      width={"100px"}
                      className="d-block w-100"
                      alt="..."
                    />
                  </MDBCarouselItem>
                </MDBCarousel>
              </div>
            </div>
            <div className="col-6">
              <div>
                <p style={{ fontSize: "20px" }}>{productDetail.name}</p>
              </div>
              <div>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "24px",
                  }}
                >
                  {productDetail.price.toLocaleString("vi-VN")} đ
                </p>
              </div>
              <div>
                <p
                  style={{
                    marginBottom: "10xp",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  Mô tả:
                </p>
                <p style={{ textAlign: "justify", fontSize: "15px" }}>
                  {productDetail.description}
                </p>
              </div>
              <p
                style={{
                  marginBottom: "10xp",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Chọn size:
                <span
                  onClick={() => navigate("/size")}
                  style={{ cursor: "pointer" }}
                >
                  {" "}
                  (Bảng size)
                </span>
              </p>
              <Form>
                <Form.Check
                  inline
                  name="group"
                  label="36"
                  type="radio"
                  value={"36"}
                  checked={size === "36"}
                  onChange={handleOptionChange}
                />
                <Form.Check
                  inline
                  name="group"
                  label="37"
                  type="radio"
                  value={"37"}
                  checked={size === "37"}
                  onChange={handleOptionChange}
                />
                <Form.Check
                  inline
                  name="group"
                  label="38"
                  type="radio"
                  value={"38"}
                  checked={size === "38"}
                  onChange={handleOptionChange}
                />
                <Form.Check
                  inline
                  name="group"
                  label="39"
                  type="radio"
                  value={"39"}
                  checked={size === "39"}
                  onChange={handleOptionChange}
                />
                <Form.Check
                  inline
                  name="group"
                  label="40"
                  type="radio"
                  value={"40"}
                  checked={size === "40"}
                  onChange={handleOptionChange}
                />
                <Form.Check
                  inline
                  name="group"
                  label="41"
                  type="radio"
                  value={"41"}
                  checked={size === "41"}
                  onChange={handleOptionChange}
                />
                <Form.Check
                  inline
                  name="group"
                  label="42"
                  type="radio"
                  value={"42"}
                  checked={size === "42"}
                  onChange={handleOptionChange}
                />
                <Form.Check
                  inline
                  name="group"
                  label="43"
                  type="radio"
                  value={"43"}
                  checked={size === "43"}
                  onChange={handleOptionChange}
                />
                <Form.Check
                  inline
                  name="group"
                  label="44"
                  type="radio"
                  value={"44"}
                  checked={size === "44"}
                  onChange={handleOptionChange}
                />
              </Form>
              <div style={{ 
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginTop: "10px",
                  color:"#999999" }}>
                  Hàng còn trong kho: {productDetail.quantity}
              </div>
              <div
                style={{
                  marginBottom: "7xp",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                Số lượng:
              </div>
              <div>
                <input
                  style={{ width: "10%" }}
                  className="form-control"
                  type="number"
                  min="1"
                  max="100"
                  step="1"
                  value={quantity}
                  onChange={(event) => setQuantity(event.target.value)}
                />
              </div>
              <div style={{ marginTop: "10px", fontSize: "18px" }}>
                (Đánh giá: {countRate} lượt)
              </div>
              <div>
                <FaStar style={{ marginRight: "10px", color: "#e3c01c" }} />
                <FaStar style={{ marginRight: "10px", color: "#e3c01c" }} />
                <FaStar style={{ marginRight: "10px", color: "#e3c01c" }} />
                <FaStar style={{ marginRight: "10px", color: "#e3c01c" }} />
                <FaStar style={{ marginRight: "10px", color: "#e3c01c" }} />(
                {countStar.fine})
              </div>
              <div>
                <FaStar style={{ marginRight: "10px", color: "#e3c01c" }} />
                <FaStar style={{ marginRight: "10px", color: "#e3c01c" }} />
                <FaStar style={{ marginRight: "10px", color: "#e3c01c" }} />
                <FaStar style={{ marginRight: "10px", color: "#e3c01c" }} />(
                {countStar.four})
              </div>
              <div>
                <FaStar style={{ marginRight: "10px", color: "#e3c01c" }} />
                <FaStar style={{ marginRight: "10px", color: "#e3c01c" }} />
                <FaStar style={{ marginRight: "10px", color: "#e3c01c" }} />(
                {countStar.three})
              </div>
              <div>
                <FaStar style={{ marginRight: "10px", color: "#e3c01c" }} />
                <FaStar style={{ marginRight: "10px", color: "#e3c01c" }} />(
                {countStar.two})
              </div>
              <div>
                <FaStar style={{ marginRight: "10px", color: "#e3c01c" }} />(
                {countStar.one})
              </div>
              <div style={{ marginTop: "20px" }}>
                <button
                  style={{
                    backgroundColor: "#0d0e09",
                    borderColor: "#0d0e09",
                  }}
                  type="button"
                  className="btn btn-primary"
                  onClick={() => addTocartClick(productDetail, quantity)}
                >
                  <FaCartShopping /> Thêm giỏ hàng
                </button>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "80px" }} className="container">
            <h5 style={{ marginBottom: "40px" }}>ĐÁNH GIÁ SẢN PHẨM</h5>
            {rate && rate.length > 0 ? (
              rate.map((item, index) => {
                return (
                  <div key={`rate-${index}`}>
                    <div>
                      <FaUserCircle style={{ fontSize: "40px" }} />{" "}
                      {item.User.name}
                    </div>
                    <div style={{ marginLeft: "40px" }}>
                      <div>{formatDate(item.createdAt)}</div>
                      <div>{displayRate(item.star)}</div>
                      <p style={{ fontSize: "18px" }}>{item.comment}</p>
                    </div>
                    <hr />
                  </div>
                );
              })
            ) : (
              <div style={{ fontSize: "18px", color: "#352e28" }}>
                Sản phẩm chưa có đánh giá !
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default ProductDetail;
