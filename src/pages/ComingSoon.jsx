import React, { useEffect, useState } from "react";
import "./ComingSoon.css";
import Logo from "../../public/logo.svg";
import MobLogo from "../../public/MobLogo.svg";
import TabLogo from "../../public/TabLogo.svg";
const ComingSoon = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // empty dependency array to run only once on mount

  return (
    <div className="container">
      <div className="Card-Comp">
        <img
          src={
            windowWidth < 600 ? MobLogo : windowWidth < 1024 ? TabLogo : Logo
          }
          alt="Logo"
        />

        <button>Coming Soon</button>
        <h5>Meanwhile, feel free to interact with us</h5>
      </div>
      <div className="contact-comp">
        <h2>
          Contact | <a href="tel:9876543210">9876543210</a>
        </h2>

        <h2>
          Email |{" "}
          <a href="mailto:admin@genovabiotech.com">admin@genovabiotech.com</a>
        </h2>
      </div>
    </div>
  );
};

export default ComingSoon;
