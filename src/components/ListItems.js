import React from "react";

function ListItems({ children }) {
  return (
    <ul
      style={{
        border: "1px solid #e5e7eb",
        borderColor: " #253251",
        borderRadius: "5px",
        padding: "20px",
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: "calc(20%)",
        marginTop: "0",
      }}
    >
      {children}
    </ul>
  );
}

export default ListItems;
