import React from "react";
import logo from "../../assets/customer/images/logo-ecco2.png";
import { RiDashboard3Fill } from "react-icons/ri";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { GiAbacus, GiBeachBag, GiHistogram, GiStable, GiStalactites, GiStatic } from "react-icons/gi";
import { FaProductHunt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAdmin } from "../../redux/silce/admin/authSlice";
import { toast } from "react-toastify";
const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutClick = () => {
    dispatch(logoutAdmin()).then((res) => {
      if (res.payload && res.payload.success === true) {
        toast.success(`${res.payload.message}`);
        navigate("/admin");
      }
    });
  };
  return (
    <div className="bg-white sidebar p-2">
      <div className="m-2">
        <img src={logo} alt="" width={"200px"} />
      </div>
      <hr className="text-dark" />
      <div>
        <div
          onClick={() => navigate("/admin/dashboard")}
          style={{ cursor: "pointer" }}
          className="list-group-item py-2"
        >
          <RiDashboard3Fill
            style={{ fontSize: "30px", color: "#352e28", marginRight: "5px" }}
          />
          <span>Dashboard</span>
        </div>
        <br />
        <div
          onClick={() => navigate("/admin/statistical")}
          style={{ cursor: "pointer" }}
          className="list-group-item py-2 "
        >
          <GiHistogram
            style={{ fontSize: "30px", color: "#352e28", marginRight: "5px" }}
          />
          <span>Thống kê</span>
        </div>
        <br />
        <div
          onClick={() => navigate("/admin/orders")}
          style={{ cursor: "pointer" }}
          className="list-group-item py-2 "
        >
          <GiBeachBag
            style={{ fontSize: "30px", color: "#352e28", marginRight: "5px" }}
          />
          <span>Đơn Hàng</span>
        </div>
        <br />
        <div
          onClick={() => navigate("/admin/products")}
          style={{ cursor: "pointer" }}
          className="list-group-item py-2 "
        >
          <FaProductHunt
            style={{ fontSize: "30px", color: "#352e28", marginRight: "5px" }}
          />
          <span>Sản Phẩm</span>
        </div>
        <br />
        <div
          onClick={() => logoutClick()}
          style={{ cursor: "pointer" }}
          className="list-group-item py-2 "
        >
          <RiLogoutCircleRFill
            style={{ fontSize: "30px", color: "#352e28", marginRight: "5px" }}
          />
          <span>Đăng Xuất</span>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
