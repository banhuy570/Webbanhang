import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Helmet from "../components/Helmet";
import CartItem from "../components/CartItem";
import Button from "../components/Button";

import productData from "../assets/fake-data/products";
import numberWithCommas from "../utills/numberWithCommas";
import { removeAllItem } from "../redux/shopping-cart/cartItemsSlide";
import { useDispatch } from "react-redux";
const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.value);
  const [cartProducts, setCartProducts] = useState(
    productData.getCartItemsInfo(cartItems)
  );

  const [totalProducts, setTotalProducts] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

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

  const handlerCleanup = () => {
    console.log("removeAllCartItem");
    dispatch(removeAllItem());
  };
  const handlePaymentCheck = () => {
    console.log("handlePaymentCheck");
    if (totalProducts == 0) alert("bạn vui lòng đặt hàng");
    else navigate("/payment");
  };
  return (
    <Helmet title="Giỏ hàng">
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Bạn đang có {totalProducts} sản phẩm trong giỏ hàng</p>
            <div className="cart__info__txt__price">
              <span>Thành tiền:</span>{" "}
              <span>{numberWithCommas(Number(totalPrice))}</span>
            </div>
          </div>
          <div className="cart__info__btn">
            {/* <Link to="/payment"> */}
            <Button size="block" onClick={handlePaymentCheck}>
              Đặt hàng
            </Button>
            {/* </Link> */}
            <Link to="/catalog">
              <Button size="block">Tiếp tục mua hàng</Button>
            </Link>
            <Button size="block" onClick={handlerCleanup}>
              Xóa giỏ hàng
            </Button>
          </div>
        </div>
        <div className="cart__list">
        {(totalProducts == 0) ? 
        (<h3 className="cart__list__text">Không có sản phẩm nào trong giỏ hàng</h3>) :   
        ( cartProducts.map((item, index) => (
            <CartItem item={item} key={index} />
          )))}
       
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
