import React from "react";
import myimage from "../img/WhatsApp_Image_2024-03-13_at_16.26.32-removebg.png";
import ListItems from "./ListItems";
import HomeText from "./HomeText";
import HomeParagraph from "./HomeParagraph";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start", // Align items to the top
        marginTop: "20px", // Adjust this value as needed
        flexWrap: "wrap", // Allow items to wrap to the next line
      }}
    >
      <div
        style={{
          marginRight: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {" "}
        {/* Container for images */}
        <img
          src="https://media.tenor.com/MA3dDJl_9VYAAAAj/the-sims-plumbob.gif"
          alt="gif"
          style={{ height: "120px", marginBottom: "-80px", marginTop: "30px" }} // Adjust height and margin bottom here
        />
        <img
          src={myimage}
          alt="myimage"
          style={{ width: "450px", height: "600px" }}
        />
      </div>
      <div style={{ flex: "1", maxWidth: "600px" }}>
        {" "}
        {/* Container for text */}
        <ListItems style={{ marginTop: "10px" }}>
          <h3
            style={{
              color: "rgb(136 150 171)",
              textAlign: "left",
              marginRight: "auto",
              marginBottom: "5px", // Reduce margin bottom here
              fontSize: "25px",
              marginTop: 0,
            }}
          >
            About
          </h3>
          <h3
            style={{
              color: "rgb(136 150 171)",
              textAlign: "center",
              fontSize: "30px",
            }}
          >
            -Hi, 👋 I'm <span style={{ color: "#F8FAFC" }}>Buğrahan</span>, a
            passionate software engineer from Turkey.
          </h3>

          <HomeText title="Education">
            -Sivas Cumhuriyet Üniversitesi <b>Computer Engineering</b> <br />
            <i style={{ fontSize: "15px" }}>(Sep 2021-)</i>
          </HomeText>
          <HomeText title="Courses and Certificates">
            -React-The Complete Guide <b>by Academind</b>
            <br />
            <i style={{ fontSize: "15px" }}>(Jan 2024)</i>
            <br />
            -Algorithms and Data Structures <b>by Freecodecamp</b>
            <i style={{ fontSize: "15px" }}> (Feb 2024)</i>
            <br />
            -Intermediate React <b>by Frontend Masters</b>
            <br />
            <i style={{ fontSize: "15px" }}>(March 2024)</i>
          </HomeText>

          <HomeParagraph>
            You can also check my{" "}
            <Link
              className="link"
              to={"skills"}
              style={{ textDecoration: "none", color: "#F8FAFC" }}
            >
              Skills
            </Link>{" "}
            and{" "}
            <Link
              className="link"
              to={"projects"}
              style={{ textDecoration: "none", color: "#F8FAFC" }}
            >
              Projects
            </Link>
          </HomeParagraph>
        </ListItems>
      </div>
    </div>
  );
}

export default Home;
