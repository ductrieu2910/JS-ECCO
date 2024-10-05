import React, { useEffect, useState } from "react";
import Header from "../../components/customer/Header/Header";
import Footer from "../../components/customer/Footer/Footer";
import { FaHome } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getOrderShip,
  orderConfirmAction,
} from "../../redux/silce/customer/orderSlice";
import { UrlImage } from "../../url";
import OrderStatus from "../../components/customer/OrderStatus";
import ReactPaginate from "react-paginate";

const OrderShip = () => {
  const navigate = useNavigate();
  const URL_IMAGE = UrlImage();
  const dispatch = useDispatch();
  let { user_id } = useParams();
  const isAuth = useSelector((state) => state.customer.auth.isAuthError);
  const orders = useSelector((state) => state.customer.order.orderShip);
  const orderConfirm = useSelector(
    (state) => state.customer.order.handleOrderConfirm
  );

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  useEffect(() => {
    if (isAuth && isAuth.detail) {
      navigate("/login");
    }
    dispatch(getOrderShip(user_id));
  }, [isAuth, orderConfirm]);

  const orderConfirmClick = (order_id) => {
    dispatch(orderConfirmAction(order_id));
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageOrders = orders.slice(offset, offset + itemsPerPage);
  return (
    <>
      <Header />
      <div
        style={{ height: "1000px", marginTop: "100px" }}
        className="container"
      >
        <h4 style={{ marginBottom: "40px" }}>ĐƠN HÀNG ĐANG GIAO</h4>
        <div
          className="container"
          style={{ height: "50px", marginTop: "20px" }}
        >
          <OrderStatus />
          <div className="container" style={{ marginTop: "50px" }}>
            {orders && orders.length > 0 ? (
              <>
                {currentPageOrders.map((order, index) => {
                  return (
                    <React.Fragment key={order.id}>
                      {order.Order_Products.map((item, indexItem) => {
                        return (
                          <div
                            style={{ marginBottom: "20px" }}
                            className="row"
                            key={`order-${indexItem}`}
                          >
                            <div className="col-2">
                              <div>
                                <img
                                  width={"120px"}
                                  src={URL_IMAGE + item.Product.image}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="col-10">
                              <p style={{ fontSize: "17px" }}>
                                {item.Product.name}
                              </p>
                              <p style={{ fontSize: "17px" }}>
                                x {item.quantity}
                              </p>
                              <p
                                style={{
                                  fontWeight: "bold",
                                  fontSize: "18px",
                                }}
                              >
                                {item.Product.price.toLocaleString("vi-VN")} đ
                              </p>
                            </div>
                          </div>
                        );
                      })}
                      <div className="row">
                        <div className="col-4">
                          <i
                            style={{
                              color: "gray",
                              fontSize: "14px",
                            }}
                          >
                            Đơn hàng đang được giao nếu không gặp vấn đề gì vui
                            lòng bấm đã nhận hàng
                          </i>
                        </div>
                        <div className="col-4">
                          <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                            Thành tiền:{" "}
                            <span>{order.total.toLocaleString("vi-VN")} đ</span>
                          </p>
                        </div>
                        <div className="col-4">
                          <button
                            style={{
                              width: "200px",
                              height: "45px",
                              border: "none",
                              borderRadius: "10px",
                              backgroundColor: "#0d0e09",
                              color: "white",
                              fontWeight: "bold",
                            }}
                            onClick={() => orderConfirmClick(order.id)}
                          >
                            Xác nhận
                          </button>
                        </div>
                      </div>
                      <hr />
                    </React.Fragment>
                  );
                })}
                <ReactPaginate
                nextLabel=" >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={Math.ceil(orders.length / itemsPerPage)}
                previousLabel="< "
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
              </>
            ) : (
              <div style={{ textAlign: "center" }}>
                <h5>Chưa có đơn hàng nào đang giao!</h5>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default OrderShip;
