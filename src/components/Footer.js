import React from "react";
import ListItems from "./ListItems";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <a href="https://github.com/mryunt02">
          <ListItems>
            <img
              src="https://img.icons8.com/material-outlined/24/000000/github.png"
              alt="github"
              style={{ width: 30 }}
            />
          </ListItems>
        </a>
        <a href="https://linkedin.com/in/byunt">
          <ListItems>
            <img
              src="https://img.icons8.com/material-outlined/24/000000/linkedin.png"
              alt="linkedin"
              style={{ width: 30 }}
            />
          </ListItems>
        </a>
        <a href="mailto:yuntbugrahan@gmail.com">
          <ListItems>
            <img
              src="https://img.icons8.com/material-outlined/24/000000/email.png"
              alt="email"
              style={{ width: 30 }}
            />
          </ListItems>
        </a>
      </div>

      <p
        style={{
          fontSize: "14px",
          color: "rgb(136 150 171)",
          margin: "0",
          fontFamily: "Arial, sans-serif",
          display: "flex",
          justifyContent: "center",
        }}
      >
        © {year} All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
