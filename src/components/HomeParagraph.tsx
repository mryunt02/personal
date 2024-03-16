import React from "react";

function HomeParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        color: "rgb(136 150 171)",
        textAlign: "left",
        marginRight: "auto",
        marginBottom: "5px", // Reduce margin bottom here
        fontSize: "22px",
      }}
    >
      {children}
    </p>
  );
}

export default HomeParagraph;
