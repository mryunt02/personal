import React from "react";
import ListItems from "./ListItems";
import HomeText from "./HomeText";

function AllProjects({ title, description, url, sourceCode, image }) {
  return (
    <ul
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        paddingLeft: "0", // Remove default padding of <ul> element
        flex: 1,
      }}
    >
      <ListItems style={{ marginTop: "10px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <div style={{ marginRight: "auto" }}>
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
            <img
              src={image}
              alt="investment"
              style={{ width: "300px", marginRight: "auto", height: "400px" }}
            />
          </div>
          <div
            style={{
              marginLeft: "20px",
              maxWidth: "600px",
              marginRight: "auto",
            }}
          >
            <HomeText title="About">
              <p>{description}</p>
            </HomeText>
            <HomeText title="URL">
              <a
                target="blank"
                href={url}
                style={{ color: "rgb(136 150 171)" }}
              >
                <p>{url}</p>
              </a>
            </HomeText>
            <HomeText title="Source Code">
              <a
                target="blank"
                href={sourceCode}
                style={{ color: "rgb(136 150 171)" }}
              >
                <p>{sourceCode}</p>
              </a>
            </HomeText>
          </div>
        </div>
      </ListItems>
    </ul>
  );
}

export default AllProjects;
