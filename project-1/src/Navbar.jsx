import React from "react";
import css from "./Navbar.module.css";

function Navbar() {

  const btnClick = () => {

    const ResponsivDiv = document.getElementById("responNav");
    ResponsivDiv.style.display = "block";

  }

  return (
    <div>
      <div className={css.navbar}>
        <div className={css.bar} onClick={btnClick}>
          <span class="material-symbols-outlined" style={{ fontSize: 35 }}>
            menu
          </span>
        </div>
        <h1 className={css.hide}>Nike</h1>
        <ul className={css.hide}>
          <li>
            <a href="#">MANU</a>
          </li>
          <li>
            <a href="#">LOCATION</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
        <div>
          <button className={css.loginBtn}>Login</button>
        </div>
      </div>

      {/* Responsive Navbar */}
      <div className={css.responNav} id="responNav">
        <div className={css.navContent}>
          <div>
            <h1>Nike</h1>
            <ul>
              <li>
                <a href="#">MANU</a>
              </li>
              <li>
                <a href="#">LOCATION</a>
              </li>
              <li>
                <a href="#">ABOUT</a>
              </li>
              <li>
                <a href="#">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Navbar;
