import React from "react";
import investment from "../img/investment.png";

import AllProjects from "./AllProjects";
import aphelios from "../img/aphelios.png";
import tictactoe from "../img/tictactoe.png";
import reactessentials from "../img/reactessentials.png";
import todo from "../img/todo.png";
import valorant from "../img/valorant.png";

function Projects() {
  return (
    <div style={{ flexDirection: "column" }}>
      <header style={{ textAlign: "left", marginLeft: "20px" }}>
        <h1 style={{ color: "rgb(136 150 171)", marginBottom: -10 }}>
          Projects
        </h1>
      </header>
      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
        <AllProjects
          title="Investment Calculator"
          description="Investment calculation web app developed with React.js"
          url="https://mryunt02.github.io/investment-calculator/"
          sourceCode="https://github.com/mryunt02/investment-calculator"
          image={investment}
        />
        <AllProjects
          title="Portfolio web site."
          description="I created a web page about the game I played and my favorite character with react.js"
          url="https://mryunt02.github.io/sample-react-v2/"
          sourceCode="https://github.com/mryunt02/sample-react-v2?tab=readme-ov-file"
          image={aphelios}
        />
        <AllProjects
          title="Tic Tac Toe Game"
          description="Tic Tac Toe game developed with React.js"
          url="https://mryunt02.github.io/tic-tac-toe/"
          sourceCode="https://github.com/mryunt02/tic-tac-toe?tab=readme-ov-file"
          image={tictactoe}
        />
        <AllProjects
          title="React Essentials"
          description="web page about react essentials with react.js"
          url="https://mryunt02.github.io/react-essentials/"
          sourceCode="https://github.com/mryunt02/react-essentials?tab=readme-ov-file"
          image={reactessentials}
        />
        <AllProjects
          title="Todo App"
          description="Todo app developed with TypeScript and React.js"
          url="https://mryunt02.github.io/todo-typescript/"
          sourceCode="https://github.com/mryunt02/todo-typescript?tab=readme-ov-file"
          image={todo}
        />
        <AllProjects
          title="Valorant Web Site"
          description="I created a web page about valorant with react.js"
          url="https://mryunt02.github.io/valorant-info/"
          sourceCode="https://github.com/mryunt02/valorant-info"
          image={valorant}
        />
      </div>
    </div>
  );
}

export default Projects;
