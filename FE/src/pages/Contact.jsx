import React from "react";
import Helmet from "../components/Helmet"
export default function Contact() {
  return (
    <Helmet title={"Liên hệ"}>
    <div className="contact">
      <div className="contact__contact-box">
        <div className="contact__contact-box__left" />
        <div className="contact__contact-box__right">
          <h2 className="contact__contact-box__h2">Liên hệ</h2>
          <input type="text" className="contact__contact-box__field" placeholder="Nhập Họ và tên" />
          <input type="text" className="contact__contact-box__field" placeholder="Nhập email" />
          <input type="text" className="contact__contact-box__field" placeholder="Nhập số điện thoại" />
          <textarea placeholder="Nội dung" className="contact__contact-box__field__textarea" defaultValue={""} />
          <button className="contact__contact-box__btn">Gửi</button>
        </div>
      </div>
    </div>
    </Helmet>
  );
}
