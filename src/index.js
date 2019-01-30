import React from "react";
import ReactDOM from "react-dom";
import ProfilePage from "./ProfilePage";

import "./styles.css";

function App() {
  return <ProfilePage />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
