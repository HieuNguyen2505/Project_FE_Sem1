import { Outlet, Link  } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <header>
        <h3>Trang Bán Điện Thoại</h3>
      </header>

      <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <Link class="navbar-brand" href="/">WebSiteName</Link>
    </div>
    <ul class="nav navbar-nav">
      <li ><Link to="/">Home</Link></li>
      <li><Link to="/ve-chung-toi">About</Link></li>
      <li><Link to="/san-pham">Product</Link></li>
      <li><Link to="/lien-he">Contact</Link></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><Link to="/dang-ky"><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
      <li><Link to="#"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
    </ul>
  </div>
</nav>
  
<div class="container">
  <Outlet />
</div>
    </>
  );
};

export default Layout;
