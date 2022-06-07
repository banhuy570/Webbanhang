import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import PropTypes from "prop-types";
// import Home from "../pages/Home";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { removeAllItem } from "../redux/shopping-cart/cartItemsSlide";
const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "black",
      fontWeight: 500,
      height: "60px",
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "1.1em",

      fontSmoothing: "antialiased",
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

export default function PaymentForm(props) {
  //   const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:5000/payment", {
          amount: Number(props.totalprice) * 1000,
          id,
        });

        if (response.data.success) {
          console.log("Successful payment");
          //   setSuccess(true);
          navigate("/");
          alert("Thanh toán thành công");
          dispatch(removeAllItem());
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="payment">
        <div className="form-container">
          <h2 className="form-title">Thanh toán bằng thẻ tín dụng</h2>
          {/* <h1 style={{ textAlign: "center" }}>
            Thành tiền {props.totalprice}$
          </h1> */}
          <form action="" className="checkout-form" onSubmit={handleSubmit}>
            <div
              className="form-control"
              style={{ marginTop: "40px", marginBottom: "40px" }}
            >
              <CardElement options={CARD_OPTIONS} />
            </div>
            <button type="submit" style={{ width: "100%" }}>
              Thanh toán 
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
PaymentForm.propTypes = {
  totalprice: PropTypes.string.isRequired,
};
