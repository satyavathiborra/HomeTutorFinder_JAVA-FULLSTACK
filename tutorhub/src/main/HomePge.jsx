import React from "react";

function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1>Welcome to TutorHub!</h1>
      <p>Your trusted place to find and book tutors.</p>
    </div>
  );
}

export default HomePage;
