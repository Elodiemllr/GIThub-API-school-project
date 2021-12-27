import { Icon } from "@iconify/react";
import React from "react";
import "../../styles/header.scss";

const Header = ({ inputValue, onInputChange, onFormSubmit, loading }) => {
    return (
        <header className="header">
            <img
                className="header__logo"
                src="./img/GitHub-logo.png"
                alt="logo"
            />
            <div class="input-group w-100">
                <form
                    class="d-flex w-100"
                    onSubmit={(evt) => {
                        evt.preventDefault();
                        onFormSubmit();
                    }}
                >
                    <span class="input-group-text" id="basic-addon1">
                        {loading ? (
                            <Icon icon="eos-icons:loading" />
                        ) : (
                            <Icon icon="ant-design:search-outlined" />
                        )}
                    </span>
                    <input
                        class="form-control "
                        type="text"
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
};

export default Header;
