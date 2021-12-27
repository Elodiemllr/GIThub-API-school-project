// == Import npm
import React from "react";
import { Message } from "semantic-ui-react";
// == Import
import Header from "./components/Header";
import Repos from "./components/Repos";
import "./styles/App.scss";

// == Composant
const App = () => (
    <div className="app">
        <Header />
        <Message content="je suis un message" />
        <Repos />
    </div>
);

// == Export
export default App;
