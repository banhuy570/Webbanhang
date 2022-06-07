import React, { useState } from "react";
import Home from "./Home";
import Helmet from "../components/Helmet";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axiox from "axios";

const Login = ({ setLogoutUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    axiox
      .post("http://localhost:5000/api/auth/login", {
        email,
        password,
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
        setPassword("");
        setLogoutUser(false);
        navigate("/");
        alert("Login successful");
        window.location.reload();

      })
      .catch((error) => setError(error.response.data.message));
  };
  return (
    <Helmet title="Đăng nhập">
   
        <div className="contact">
          <div className="contact__contact-box">
            <div className="contact__contact-box__left" />
            <div className="contact__contact-box__right">
              <h2 className="contact__contact-box__h2">Đăng nhập</h2>
              <form
                className={{}}
                noValidate
                autoComplete="off"
                onSubmit={login}
              >
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
                placeholder="Nhập Họ và tên"
              />
              <button style={{ width: "100px" }}
                  variant="contained"
                  color="primary"
                  type="submit" className="contact__contact-box__btn">Đăng nhập</button>
          
              </form>
              <br></br>
              <p>
                Nếu bạn chưa có tài khoản?  {" "}
                <Link to="/registeration"><strong style={{ color: "blue"}}>Đăng ký</strong></Link> 
              </p>
              
              {error && <p style={{ color: "red" }}>{error}</p>}  
            </div>
          </div>
        </div>

    </Helmet>
  );
};

export default Login;
