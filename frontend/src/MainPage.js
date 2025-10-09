import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <button onClick={() => navigate("/home")}>Ir para Home</button>
    </div>
  );
}

export default MainPage;