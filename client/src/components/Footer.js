import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            Crop<span>ify</span>
          </h3>

          <p class="footer-links">
            <a href="/s" class="link-1">
              Home
            </a>

            <a href="/s">Blog</a>

            <a href="/s">Pricing</a>

            <a href="/s">About</a>

            <a href="/s">Faq</a>

            <a href="/s">Contact</a>
          </p>

          <p class="footer-company-name">Cropify © 2022</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>NIT Rourkela</span> Rourkela, India
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+919999999999</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@farmik.com">support@farmik.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div class="footer-icons">
            <a href="/face">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="/face">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="/face">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="/face">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
