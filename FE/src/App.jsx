import React ,{useState }from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./routes/Router";
import ProductViewModal from "./components/ProductViewModal"
// import Cart from "./pages/Cart";
function Layout() {
  const [logoutUser, setLogoutUser] = useState(false);

  return (
    <BrowserRouter>
      <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
      <div className="container">
        <div className="main">
          <Router />
        </div>
      </div>
      <ProductViewModal />

      <Footer />
    </BrowserRouter>
  );
}

export default Layout;
