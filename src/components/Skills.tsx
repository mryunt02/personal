import React from "react";
import mySkills from "./my-skills";
import ListItems from "./ListItems";

function Skills() {
  return (
    <div style={{ flexDirection: "column" }}>
      <header style={{ textAlign: "left", marginLeft: "20px" }}>
        <h1 style={{ color: "rgb(136 150 171)", marginBottom: -10 }}>Skills</h1>
        <h3
          style={{ color: "rgb(136 150 171)", marginTop: 0, marginBottom: -20 }}
        >
          The tools I use.
        </h3>
      </header>

      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          paddingLeft: "0", // Remove default padding of <ul> element
          flex: 1,
        }}
      >
        {mySkills.map((skill) => (
          <ListItems key={skill.id}>
            <img src={skill.image} alt={skill.name} />
            <h3
              style={{
                color: "#F8FAFC",
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              {skill.name}
            </h3>
          </ListItems>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
