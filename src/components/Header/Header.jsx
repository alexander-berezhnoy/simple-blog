import React from "react";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import {
    HeaderContainer,
    LogoContainer
} from "./HeaderStyles";

const Header = () => (
    <>
        <HeaderContainer>
            <h2>Simple Blog App</h2>
        </HeaderContainer>
    </>
);

export default Header;