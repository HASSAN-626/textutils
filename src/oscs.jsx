import React from "react";

export default function Oscs() {
  const centerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh",
    fontSize: "40px",
    fontWeight: "bold",
    padding: "20px",
    margin: "0",
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    color: "#333", 
    animation: "fadeIn 1s ease-out", 
  };

  const styleSheet = `
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `;

  return (
    <>
      <style>
        {styleSheet}
      </style>
      <div style={centerStyle}>
        Coming Soon
      </div>
    </>
  );
}
