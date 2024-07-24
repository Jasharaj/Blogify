import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="footer footer-center bg-gray-500 dark:bg-base-300 p-4 ">
      <aside>
        <p>
          Copyright © ${new Date().getFullYear()} - All rights reserved by Blogify
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
