import React from "react";
import { StyledWrapper } from "./SignInStyles";
import { BlackButton } from "@shared/ui/black-button";
import { Input } from "@shared/ui/input";

export const SignIn = () => {
    return (
        <StyledWrapper>
            <Input placeholder="Телефон"/>
            <Input placeholder="Пароль"/>
            <BlackButton>Войти</BlackButton>
        </StyledWrapper>
    );
};

