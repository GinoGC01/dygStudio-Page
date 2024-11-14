import { useState } from "react";
import "./header.css";

export function Header() {
  const [navStatus, setNavStatus] = useState(false);

  const handlerStatusNav = () => {
    setNavStatus(!navStatus);
  };

  return (
    <header className="header-react">
      <figure>
        {/* <img src="" alt="" /> */}
        <span></span>
      </figure>
      <span className="menu-hamburguesa" onClick={handlerStatusNav}>
        <span
          className={navStatus ? "content1 content1-on" : "content1"}
        ></span>
        <span
          className={navStatus ? "content2 content2-on" : "content2"}
        ></span>
        <span
          className={navStatus ? "content3 content3-on" : "content3"}
        ></span>
      </span>
      <span
        onClick={handlerStatusNav}
        className={
          navStatus ? "background-nav background-nav-on" : "background-nav"
        }
      ></span>
      <nav className={navStatus ? "nav-off nav-on" : "nav-off "}>
        <ul>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">sobre nosotros</a>
          </li>
          <li>
            <a href="#">areas laborales</a>
          </li>
          <li>
            <a href="#">blog</a>
          </li>
          <li>
            <a href="#">contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
