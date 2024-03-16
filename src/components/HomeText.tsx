import React from "react";
import HomeParagraph from "./HomeParagraph";
import "./HomeText.css";

function HomeText({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
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
        {title}
      </h3>
      <HomeParagraph>{children}</HomeParagraph>
    </>
  );
}

export default HomeText;
