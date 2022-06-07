import React from "react";
import Helmet from "../components/Helmet"
export default function Contact() {
  return (
    <Helmet title={"404 Not Found"}>
    <div className="notfound">
      {/* <h2 className="notfound__h1">Oops! Page not found.</h2> */}
      <h1  className="notfound__h1">404</h1>
      <p>We can't find the page you're looking for.</p>
      <a href="/">Go back home</a>
    </div>

    </Helmet>
  );
}
