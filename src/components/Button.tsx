// @flow 
import * as React from 'react';
import {ButtonHTMLAttributes} from "react";

type ButtonTypeProps = ButtonHTMLAttributes<HTMLButtonElement>
export const Button = (props: ButtonTypeProps) => {

    const {onClick, title}=props

    return (
        <button onClick={onClick}>{title}</button>
    );
};