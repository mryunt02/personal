import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "16px",
          gap: "16px", // Linkler arasındaki mesafe
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 style={{ color: "#F8FAFC" }}>Buğrahan Yünt</h1>
        </Link>

        <Link
          to="skills"
          style={{ textDecoration: "none" }}
          className="link"
          relative="path"
        >
          <h2
            style={
              location.pathname === "/skills"
                ? { color: "#F8FAFC" }
                : { color: "rgb(136 150 171)" }
            }
          >
            Skills
          </h2>
        </Link>

        <Link
          to="projects"
          style={{ textDecoration: "none" }}
          relative="path"
          className="link"
        >
          <h2
            style={
              location.pathname === "/projects"
                ? { color: "#F8FAFC" }
                : { color: "rgb(136 150 171)" }
            }
          >
            Projects
          </h2>
        </Link>
      </div>
    </header>
  );
}

export default Header;
