// == Import npm
// == Import
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Message } from "semantic-ui-react";
import Header from "./components/Header";
import Repos from "./components/Repos";
import data from "./data/repos.js";
import "./styles/App.scss";

const App = () => (
    <div className="app">
        <Header
            inputValue="Coucou"
            onInputChange={(textSaisi) => {
                console.log("change with ", textSaisi);
            }}
            onFormSubmit={() => {
                console.log("submit");
            }}
        />
        <Message content="je suis un message" />
        <Repos list={data.items} />
    </div>
);

// == Export
export default App;
