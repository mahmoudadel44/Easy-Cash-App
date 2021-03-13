import React, { useState } from "react";
import "../styles/NavBarArNadeem.css";
import logo from "../images/navbar/Group.png";
import linkedin from "../images/navbar/004-linkedin.png";
import instagram from "../images/navbar/005-instagram.png";
import facebook from "../images/navbar/001-facebook.png";
import Line from "../images/navbar/Line 4.png";

const Navigation = (props) => {
  return (
    <>
      <nav
        class="navbar navbar-expand-sm"
        style={{
          height: "80px",
          width: "90%",
          paddingLeft: "0%",
          paddingRight: "0%",
          marginLeft: "5%",
        }}
      >
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          {props.width > 1100 && (
            <div
              style={{
                display: "flex",
                width: "120px",
                justifyContent: "space-between",
                marginRight: "20px",
              }}
            >
              <a href="/easycash">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="/easycash">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="/easycash">
                <img src={instagram} alt="instagram" />
              </a>
            </div>
          )}
          <div
            style={{
              width: "90px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <a class="nav-link a2" href="/easycash">
              English
            </a>
            <img src={Line} alt="line" />
          </div>

          {getPaths(props.currentPage)}

          <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>

          <form class="form-inline my-2 my-lg-0">
            <a href="/easycash">
              <img
                src={logo}
                style={{ width: "213px" }}
                href="homepage-ar"
                alt="logo"
              />
            </a>
          </form>
        </div>
      </nav>
    </>
  );
};

var getPaths = (currPage) => {
  if (currPage == "home")
    return (
      <div
        style={{
          width: "500px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a class="nav-link a1" href="/easycash/contact-ar">
          تواصل معنا
        </a>
        <a class="nav-link a1" href="/easycash/merchants-ar">
          تجار إيزي كاش
        </a>
        <a class="nav-link a1" href="/easycash/consumer-ar">
          محفظة إيزي كاش
        </a>
        <a class="nav-link a1" href="/easycash/about-ar">
          عن إيزي كاش
        </a>
        <a class="nav-link a3" href="/easycash/homepage-ar">
          الصفحة الرئيسية
        </a>
      </div>
    );
  if (currPage == "about")
    return (
      <div
        style={{
          width: "500px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a class="nav-link a1" href="/easycash/contact-ar">
          تواصل معنا
        </a>
        <a class="nav-link a1" href="/easycash/merchants-ar">
          تجار إيزي كاش
        </a>
        <a class="nav-link a1" href="/easycash/consumer-ar">
          محفظة إيزي كاش
        </a>
        <a class="nav-link a3" href="/easycash/about-ar">
          عن إيزي كاش
        </a>
        <a class="nav-link a1" href="/easycash/homepage-ar">
          الصفحة الرئيسية
        </a>
      </div>
    );
  if (currPage == "consumer")
    return (
      <div
        style={{
          width: "500px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a class="nav-link a1" href="/easycash/contact-ar">
          تواصل معنا
        </a>
        <a class="nav-link a1" href="/easycash/merchants-ar">
          تجار إيزي كاش
        </a>
        <a class="nav-link a3" href="/easycash/consumer-ar">
          محفظة إيزي كاش
        </a>
        <a class="nav-link a1" href="/easycash/about-ar">
          عن إيزي كاش
        </a>
        <a class="nav-link a1" href="/easycash/homepage-ar">
          الصفحة الرئيسية
        </a>
      </div>
    );
  if (currPage == "merchants")
    return (
      <div
        style={{
          width: "500px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a class="nav-link a1" href="/easycash/contact-ar">
          تواصل معنا
        </a>
        <a class="nav-link a3" href="/easycash/merchants-ar">
          تجار إيزي كاش
        </a>
        <a class="nav-link a1" href="/easycash/consumer-ar">
          محفظة إيزي كاش
        </a>
        <a class="nav-link a1" href="/easycash/about-ar">
          عن إيزي كاش
        </a>
        <a class="nav-link a1" href="/easycash/homepage-ar">
          الصفحة الرئيسية
        </a>
      </div>
    );
  return (
    <div
      style={{
        width: "500px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <a class="nav-link a3" href="/easycash/contact-ar">
        تواصل معنا
      </a>
      <a class="nav-link a1" href="/easycash/merchants-ar">
        تجار إيزي كاش
      </a>
      <a class="nav-link a1" href="/easycash/consumer-ar">
        محفظة إيزي كاش
      </a>
      <a class="nav-link a1" href="/easycash/about-ar">
        عن إيزي كاش
      </a>
      <a class="nav-link a1" href="/easycash/homepage-ar">
        الصفحة الرئيسية
      </a>
    </div>
  );
};
export default Navigation;
