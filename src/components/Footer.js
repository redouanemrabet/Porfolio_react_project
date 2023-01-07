import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";

import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <a href="https://fr-fr.facebook.com/">    <FacebookIcon /></a>

        <a href="https://www.linkedin.com/in/redouane-mrabet-0912871b1/"> <LinkedInIcon /></a>
      </div>
      <p> &copy; 2023 redouane.com</p>
    </div>
  );
}

export default Footer;
