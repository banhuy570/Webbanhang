import React from "react";
// import "./App.css";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import Helmet from "../components/Helmet";
import Button from "../components/Button";
import productData from "../assets/fake-data/products";
import numberWithCommas from "../utills/numberWithCommas";
import PaymentForm from "../components/PaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Navigate, useNavigate } from "react-router-dom";

function Payment() {
  const PUBLIC_KEY =
    "pk_test_51Kt7xOJcK2M06qtxb7JzH7cPJGs9X4M61DkvjZwk4Lu36e9pBVv6WXG3ZspMJi7mY1YU7rHoxRx21U8rkoXdxW7R00DixKGFgj";

  const stripeTestPromise = loadStripe(PUBLIC_KEY);

  const cartItems = useSelector((state) => state.cartItems.value);

  const [cartProducts, setCartProducts] = useState(
    productData.getCartItemsInfo(cartItems)
  );
  const [success, setSuccess] = useState(false);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [address, setAddress] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setCartProducts(productData.getCartItemsInfo(cartItems));
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
  }, [cartItems]);

  // const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate("/payment/credit");
    setSuccess(true);
  };

  return (
    <Helmet title={"Đặt hàng"}>
      <div className="maincontainer">       
          <div className="container">
            <div className="py-5 text-center">
              <h2>Hóa đơn</h2>
            </div>

            <div className="row">
              {cartProducts.map((item, index) => (
                <CartItem item={item} key={index} />
              ))}
              <div className="cart__info__txt">
                <p>Bạn đang có {totalProducts} sản phẩm trong giỏ hàng</p>
                <div className="cart__info__txt__price">
                  <span>Thành tiền:</span>{" "}
                  <span>{numberWithCommas(Number(totalPrice))}</span>
                </div>
              </div>
              {!success ? (
              <div className="col-md-8 order-md-1">
                <h2 className="mb-3 text-center">Thông tin cá nhân</h2>
                <form className="needs-validation" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="firstName">Họ</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="Nhập họ khách hàng"
                        value={fname}
                        onChange={(e) => setFName(e.target.value)}
                        required
                      />
                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="lastName">Tên</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="Nhập tên khách hàng"
                        value={lname}
                        onChange={(e) => setLName(e.target.value)}
                        required
                      />
                      <div className="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="address">Địa chỉ giao hàng</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="1234 Main St"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>

                  <hr className="mb-4" />

                  <h4 className="mb-3">Thanh toán</h4>

                  <div className="d-block my-3">
                    <div className="custom-control custom-radio">
                      <input
                        id="credit"
                        type="radio"
                        name="paymentMethod"
                        className="custom-control-input"
                        // checked
                        required
                      />
                      <label className="custom-control-label" htmlFor="credit">
                        Credit card
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        id="money"
                        name="paymentMethod"
                        type="radio"
                        className="custom-control-input"
                        required
                        disabled
                      />
                      <label className="custom-control-label" htmlFor="debit">
                        Thanh toán trực tiếp
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        id="debit"
                        name="paymentMethod"
                        type="radio"
                        className="custom-control-input"
                        required
                        disabled
                      />
                      <label className="custom-control-label" htmlFor="debit">
                        MoMo,Zalopay,...(Đang phát triển)
                      </label>
                    </div>
                  </div>
                  <hr className="mb-4" />
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    // type="submit"
                  >
                    Thanh toán
                  </button>
                </form>
              </div>
        ) : (
          <Elements stripe={stripeTestPromise}>
            <PaymentForm
              totalprice={Number(totalPrice / 23600).toFixed(2)}
            ></PaymentForm>
          </Elements>
        )
        }
            </div>
          </div>
      </div>
    </Helmet>
  );
}

export default Payment;
