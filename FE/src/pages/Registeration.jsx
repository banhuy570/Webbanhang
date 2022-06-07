import React, { useState } from "react";
import Login from "./Login";
import Helmet from "../components/Helmet";
import { Link, useNavigate } from "react-router-dom";
import axiox from "axios";

const Registeration = ({ setLogoutUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName]= useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();

  const registeration = (e) => {
    e.preventDefault();
    axiox
      .post("http://localhost:5000/api/auth/registeration", {
        email,
        password,name,
      })
      .then((response) => {
        console.log("response", response);
        localStorage.setItem(
          "login",
          JSON.stringify({
            userLogin: true,
            token: response.data.access_token,
          })
        );
        setError("");
        setEmail("");
        setName("");
        setPassword("");
        setLogoutUser(false);
        navigate("/");
        window.location.reload();
      })
      .catch((error) => setError(error.response.data.message));
  };

  return (
    <>
      <Helmet title="Đăng ký">
        <div className="contact">
          <div className="contact__contact-box">
            <div className="contact__contact-box__left" />
            <div className="contact__contact-box__right">
              <h2 className="contact__contact-box__h2">Đăng ký</h2>
              <form
                className={{}}
                noValidate
                autoComplete="off"
                onSubmit={registeration}
              >
               <input
                  type="text"
                  className="contact__contact-box__field"
                  placeholder="Nhập Name"
                  id="name"
                  label="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  className="contact__contact-box__field"
                  placeholder="Nhập email"
                  id="username"
                  label="Username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  id="password"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="contact__contact-box__field"
                  placeholder="Nhập mật khẩu"
                />
                <button
                  style={{ width: "100px" }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  className="contact__contact-box__btn"
                >
                  Đăng ký
                </button>
              </form>
              <br></br>
              <p>
                Nếu bạn đã có tài khoản?{" "}
                <Link to="/login" style={{color:"blue"}}><strong>Đăng nhập</strong></Link>
              </p>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          </div>
        </div>
      </Helmet>
    </>
  );
};

export default Registeration;
