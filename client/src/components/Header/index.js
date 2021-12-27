import React from "react";
import { Input, Segment } from "semantic-ui-react";
import "../../styles/header.scss";

const Header = () => (
    <header className="header">
        <img className="header__logo" src="./img/GitHub-logo.png" alt="logo" />
        <Segment>
            <form>
                <Input
                    fluid
                    icon="search"
                    iconPosition="left"
                    placeholder="Chercher un repo"
                />
            </form>
        </Segment>
    </header>
);

export default Header;
