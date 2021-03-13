import React from "react";
import "../styles/FooterArNadeem.css";
import { Link } from "react-router-dom";
import LogoFooter from "../images/home/GroupLogoFooter.svg";
import InstagramIxon from "../images/home/instagramIcon.svg";
import LinkedInIcon from "../images/home/LinkedInIcon.svg";
import FacebookIcon from "../images/home/facebookIcon.svg";

class FooterAr extends React.Component {
  render() {
    return (
      <div class="WholeFooter">
        <div class="Div1">
          <div class="Div2 a14">الخدمات</div>
          <div style={{ clear: "both" }} />
          <div class="Div2">
            <a class="nav-link a12" href="/easycash/consumer-ar">
              محفظه ايزي كاش
            </a>
          </div>
          <div style={{ clear: "both" }} />
          <div class="Div2">
            <a class="nav-link a12" href="/easycash/merchants-ar">
              تجار ايزي كاش
            </a>
          </div>
          <div style={{ clear: "both" }} />
        </div>

        <div class="Div1">
          <div class="Div2 a14">ايزي كاش</div>
          <div style={{ clear: "both" }} />
          <div class="Div2">
            <a class="nav-link a12" href="/easycash/about-ar">
              عن ايزي كاش
            </a>
          </div>
          <div style={{ clear: "both" }} />
          <div class="Div2">
            <Link className="nav-link a12" to="#">
              وظائف
            </Link>
          </div>
          <div style={{ clear: "both" }} />
          <div class="Div2">
            <a class="nav-link a12" href="/easycash/contact-ar">
              اتصل بنا
            </a>
          </div>
          <div style={{ clear: "both" }} />
        </div>

        <div class="Div1">
          <div class="Div2 a14">المزيد</div>
          <div style={{ clear: "both" }} />
          <div class="Div2">
            <Link class="nav-link a12" to="#">
              مقالات
            </Link>
          </div>
          <div style={{ clear: "both" }} />
          <div class="Div2">
            <Link class="nav-link a12" to="#">
              سياسة الخصوصية
            </Link>
          </div>
          <div style={{ clear: "both" }} />
          <div class="Div2">
            <Link class="nav-link a12" to="#">
              شروط الإستخدام
            </Link>
          </div>
          <div style={{ clear: "both" }} />
        </div>

        <div class="Div1 flex-column">
          <img
            src={LogoFooter}
            style={{ width: "125px", height: "103px" }}
            alt="logo"
          />
        </div>

        <div class="Div3 a13" style={{ marginTop: "0px" }}>
          <div
            style={{
              display: "flex",
              width: "200px",
              justifyContent: "space-between",
            }}
          >
            <a href="/easycash">
              <img src={LinkedInIcon} alt="inkedin" />
            </a>
            <a href="/easycash">
              <img src={FacebookIcon} alt="facebook" />
            </a>
            <a href="/easycash">
              <img src={InstagramIxon} alt="instagram" />
            </a>
            <span className="followus">
              <Link>:اتبعنا علي</Link>
            </span>
          </div>
        </div>
        <div class="Div3 a13" style={{ marginTop: "0px" }}>
          جميع الحقوق محفوظة © 2021
        </div>
      </div>
    );
  }
}
export default FooterAr;
