// == Import npm
// == Import
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Message } from "semantic-ui-react";
import Header from "./components/Header";
import Repos from "./components/Repos";
import "./styles/App.scss";

const BASE_URL = "https://api.github.com/search/repositories?q=";

const App = () => {
    const [message, setMessage] = useState(
        "Aucun résultat pour le moment, faites une recherche "
    );

    const [loading, setLoading] = useState(false);

    // state for stock up my list
    const [repos, setRepos] = useState([]);

    // i want to have in sotkc my input, and i want the "method" to change him.
    const [inputText, setInputText] = useState("");

    // i want to change this input text
    const handleInputChange = (textSaisi) => {
        setInputText(textSaisi);
    };

    // when i Submit
    const handleFormSubmit = () => {
        setLoading(true);
        // made my request
        axios({
            method: "get",
            url: `${BASE_URL}${inputText}`,
        })
            // if it's working, had repos on state
            .then((res) => {
                // axios send me the server response in res.data
                // console.log(res.data)
                // i put the repos in the state
                setRepos(res.data.items);
                const newMessage = `La recherche a donné ${res.data.total_count} repos`;
                setMessage(newMessage);
            })
            // if not, send a error message
            .catch((err) => {
                console.trace(err);
            })

            .finally(() => {
                setLoading(false);
            });
    };
    return (
        <div className="app">
            <Header
                loading={loading}
                inputValue={inputText}
                onInputChange={handleInputChange}
                onFormSubmit={handleFormSubmit}
            />
            <Message content={message} />
            <Repos list={repos} />
        </div>
    );
};

// == Export
export default App;
