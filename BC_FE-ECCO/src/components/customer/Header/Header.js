import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../../assets/customer/images/logo-ecco2.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authLogin, logout } from "../../../redux/silce/customer/authSilce";
import { toast } from "react-toastify";
import { getTotal } from "../../../redux/silce/customer/cartSlice";
import { fetchAllCategory } from "../../../redux/silce/customer/categorySlice";
import SearchInput from "../SearchInput";
import { IoBagHandle } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.customer.auth.isAuthSucess);
  const userLogin = useSelector((state) => state.customer.auth.dataUser);
  const { categoriesList } = useSelector((state) => state.customer.category);
  const { cartTotalQuantity, cartItem } = useSelector(
    (state) => state.customer.cart
  );
  const navigatePage = (page) => {
    navigate(page);
  };
  useEffect(() => {
    dispatch(getTotal());
    dispatch(fetchAllCategory());
    dispatch(authLogin());
  }, [cartItem]);
  const logoutClick = () => {
    dispatch(logout()).then((result) => {
      if (result.payload.success && result.payload.success === true) {
        toast.success(`${result.payload.message}`);
        navigate("/login");
      }
    });
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>
          <img
            style={{ cursor: "pointer" }}
            width={"150px"}
            src={logo}
            alt=""
            onClick={() => navigate("/")}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "150px", marginLeft: "150px" }}
            navbarScroll
          >
            <Nav.Link onClick={() => navigate("/")} active={true}>
              Trang Chủ
            </Nav.Link>
            {categoriesList &&
              categoriesList.length > 0 &&
              categoriesList.map((item, index) => (
                <Nav.Link
                  onClick={() => navigate(`/category/${item.id}`)}
                  key={index}
                  active={true}
                >
                  {item.name}
                </Nav.Link>
              ))}
            {isAuth && isAuth.success === true ? (
              <>
                <NavDropdown title="Tài Khoản" id="collapsible-nav-dropdown">
                  {userLogin && userLogin.name && (
                    <NavDropdown.Item>
                      Hello ! {userLogin.name}
                    </NavDropdown.Item>
                  )}
                  <NavDropdown.Item
                    onClick={() => navigatePage(`/order_wait/${userLogin.id}`)}
                  >
                    Đơn Hàng
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => logoutClick()}>
                    Đăng Xuất
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <NavDropdown
                  title="Tài Khoản"
                  id="collapsible-nav-dropdown"
                  active={true}
                  style={{ color: "#464646" }}
                >
                  <NavDropdown.Item onClick={() => navigatePage("/login")}>
                    Đăng Nhập
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigatePage("/register")}>
                    Đăng Ký
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
          <Nav.Link style={{ marginRight: "10px" }}>
            <IoBagHandle
              onClick={() => navigatePage("/cart")}
              style={{ fontSize: "35px", color: "#000000" }}
            />
            <span
              style={{
                display: "inline-block",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "	#FF0000",
                textAlign: "center",
                lineHeight: "19px",
                color: "#000000",
                border:"0.5px solid		#FF0000"
              }}
            >
              {cartTotalQuantity}
            </span>
          </Nav.Link>
          <SearchInput />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
