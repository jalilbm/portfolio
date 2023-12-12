import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Thank you for checking my portfolio ❤️")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Email me at{" "}
          <a href="mailto:abdeldjalil.benharkat@gmail.com">
            abdeldjalil.benharkat
          </a>
        </p>
      </div>
    </Fade>
  );
}
