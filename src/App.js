import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { PublicMessagesList } from "./components/PublicMessagesList";
import { PrivateMessagesList } from "./components/PrivateMessageList";
import { PostBox } from "./components/PostBox";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <h1>Le Bon Chat</h1>

        <PostBox />

        <PublicMessagesList />
        <PrivateMessagesList />
      </header>
    </div>
  );
}

export default App;
