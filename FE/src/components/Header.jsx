import React, { useRef, useState, useEffect } from "react";
import logo from "../assets/images/Logo-2.png";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import productData from "../assets/fake-data/products";

const mainNav = [
  {
    display: "Trang chủ",
    path: "/",
  },
  {
    display: "Sản phẩm",
    path: "/catalog",
  },

  {
    display: "Liên Hệ",
    path: "/contact",
  },
];
const Header = ({ logoutUser, setLogoutUser }) => {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);
  const menuLeft = useRef(null);
  const menuToggle = () => menuLeft.current.classList.toggle("active");

  const [login, setLogin] = useState("");
  useEffect(() => {
    hydrateStateWithLocalStorage();
  }, [logoutUser]);

  const logout = () => {
    localStorage.removeItem("login");
    setLogoutUser(true);
  };

  const hydrateStateWithLocalStorage = () => {
    if (localStorage.hasOwnProperty("login")) {
      let value = localStorage.getItem("login");
      try {
        value = JSON.parse(value);
        setLogin(value);
      } catch (e) {
        setLogin("");
      }
    }
  };
  const cartItems = useSelector((state) => state.cartItems.value);
  const [cartProducts, setCartProducts] = useState(
    productData.getCartItemsInfo(cartItems)
  );
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    setCartProducts(productData.getCartItemsInfo(cartItems));
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
  }, [cartItems]);

  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <i className="bx bx-menu-alt-left" />
          </div>
          <div className="header__menu__left" ref={menuLeft}>
            <div className="header__menu__left-close" onClick={menuToggle}>
              <i className="bx bx-chevron-left" />
            </div>
            {mainNav.map((item, index) => (
              <div
                key={index}
                className={`header__menu__item 
              header__menu__left__item ${index === activeNav ? "active" : ""}`}
                onClick={menuToggle}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="header__menu__right">
            <div className="header__menu__right header__menu__right__item">
              <Link to="/catalog">
                <i className="bx bx-search"></i>
              </Link>
            </div>
            <div className="header__menu__right header__menu__right__item">
              <Link to="/cart" className="header__menu__right__item__cart">
                <span className="bx bx-shopping-bag"></span>
                <span className="header__menu__right__item__icon">
                  {totalProducts}
                </span>
              </Link>
            </div>

            <div className="header__menu__right header__menu__right__item">
              {!logoutUser && login && login.userLogin ? (
                <div>
                  <span
                  //  style={{paddingRight:"10px"}}
                  >
                    Hello
                  </span>
                  <Link to="">
                    <i
                      variant="contained"
                      color="secondary"
                      onClick={logout}
                      className="bx bx-log-out"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </Link>
                </div>
              ) : (
                <Link to="/login">
                  <i className="bx bx-user"></i>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
