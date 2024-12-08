import React from "react";
import "./navbar.css";
import logo from "./images/logono.png";

import { showSidebar } from "./nav";
import { hideSidebar } from "./nav";
function Navbar() {
  return (
    <div>
      <nav>
        <ul class="sidebar">
          <li onClick={hideSidebar}>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26"
                viewBox="0 96 960 960"
                width="26"
              >
                <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
        <ul>
          <li>
            <img src={logo} alt="" />
          </li>
          <li class="hideOnMobile">
            <a href="#">Blog</a>
          </li>
          <li class="hideOnMobile">
            <a href="#">Products</a>
          </li>
          <li class="hideOnMobile">
            <a href="#">About</a>
          </li>
          <li class="hideOnMobile">
            <a href="#">Contact us</a>
          </li>

          <li class="menu-button" onClick={showSidebar}>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26"
                viewBox="0 96 960 960"
                width="26"
              >
                <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
