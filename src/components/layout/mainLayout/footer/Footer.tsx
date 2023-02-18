import { EMAIL_PATTERN } from "@/components/constants/constants";
import { ErrorMessage } from "@hookform/error-message";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaPaperPlane, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="theme__switch__wrapper">
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <footer className="footer__area">
      <div className="footer__top">
        <div className="container footer-line"></div>
        <img src="imgs/thumb/footer.jpg" alt="Footer Image" data-speed="0.75" />
      </div>

      <div className="footer__btm">
        <div className="container">
          <div className="row footer__row">
            <div className="col-xxl-12">
              <div className="footer__inner">
                <div className="footer__widget">
                  <img
                    className="footer__logo"
                    width={220}
                    src="imgs/pointsyncc/logo/desktop/transparent.png"
                    alt="Footer Logo"
                  />
                  <p>
                    When do they work well, and when do they on us and finally,
                    when do we actually need how can we avoid them.
                  </p>
                  <ul className="footer__social">
                    <li>
                      <a href="#">
                        <span>
                          <FaFacebookF />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <FaTwitter />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <FaInstagram />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <FaLinkedinIn />
                        </span>
                      </a>
                    </li>
                  </ul>
                  <ThemeSwitch />
                </div>

                <div className="footer__widget-2">
                  <h2 className="footer__widget-title">Information</h2>
                  <ul className="footer__link">
                    <li>
                      <Link href="/about">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="footer__widget-3">
                  <h2 className="footer__widget-title">Contact Us</h2>
                  <ul className="footer__contact">
                    <li>Ulica Mokrice 12, 10382 Donja Zelina, Croatia</li>
                    <li>
                      <a href="tel:+385992144802" className="phone">
                        +385 99 2144 802{" "}
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@pointsyncc.com">
                        info@pointsyncc.com
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="footer__widget-4">
                  <h2 className="project-title">
                    Have a project in your mind?
                  </h2>
                  <div className="btn_wrapper">
                    <Link href="/contact"  className="wc-btn-primary btn-hover btn-item">
                      <span></span> contact us{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                  <h3 className="contact-time">09 : 00 AM - 17 : 00 PM</h3>
                  <h4 className="contact-day">Monday - Friday</h4>
                </div>

                <div className="footer__copyright">
                  <p>
                    © 2023 - {currentYear} | All Rights Reserved |{" "}
                    <a href="https://wealcoder.com/" target="_blank">
                      POINTSYNCC d.o.o
                    </a>
                  </p>
                </div>

                <div className="footer__subscribe">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: EMAIL_PATTERN,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="email"
                      render={({ message }) => (
                        <p className="form__error__message">{message}</p>
                      )}
                    />
                    <button type="submit" className="subs-btn">
                      <FaPaperPlane />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
