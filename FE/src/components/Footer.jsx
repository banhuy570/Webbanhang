import React from "react";
import { Link } from "react-router-dom";
import Grid from "./Grid";
import logo from "../assets/images/Logo-2.png";

const footerAboutLink = [
  {
    display: "Giới thiệu",
    path: "/about",
  },
  {
    display: "Liên hệ",
    path: "/about",
  },
  {
    display: "Tin tức",
    path: "/about",
  },
  {
    display: "Hệ thống cửa hàng",
    path: "/about",
  },
];
const footerCustomeLink = [
  {
    display: "Chính sách đổi trả",
    path: "/about",
  },
  {
    display: "Chính sách bảo hành",
    path: "/about",
  },
  {
    display: "Chính sách hoàn tiền",
    path: "/about",
  },
];

function Footer() {
  return (
    <footer>
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer__title">Tổng đài</div>
            <div className="footer__content">
              Liên Hệ:<strong>0123456789</strong>
            </div>
            <div className="footer__content">
              Thắc mắc đơn hàng :<strong>0123456789</strong>
            </div>
            <div className="footer__content">
              Hotline<strong>0123456789</strong>
            </div>
          </div>
          <div>
            <div className="footer__title">Về Yody</div>
            <div className="footer__content">
              {footerAboutLink.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="footer__about"> 
          <p>
            <Link to="/">
              <img src={logo} alt="logo" className="footer__logo" />
            </Link>
          </p>
          <p>Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy nghĩ hành động của mình” là sứ mệnh, là triết lý, chiến lược.. luôn cùng YODY tiến bước</p></div>
        </Grid>
      </div>
    </footer>
  );
}

export default Footer;
