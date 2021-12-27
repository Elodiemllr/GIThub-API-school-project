import React from "react";
import "../../styles/header.scss";

const Header = ({ inputValue, onInputChange, onFormSubmit }) => (
    <header className="header">
        <img className="header__logo" src="./img/GitHub-logo.png" alt="logo" />
        <div>
            <form
                class="d-flex"
                onSubmit={(evt) => {
                    evt.preventDefault();
                    onFormSubmit();
                }}
            >
                <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Chercher un repo"
                    aria-label="Search"
                    value={inputValue}
                    onChange={(evt) => {
                        const text = evt.target.value;
                        onInputChange(text);
                    }}
                ></input>
            </form>
        </div>
    </header>
);

export default Header;
