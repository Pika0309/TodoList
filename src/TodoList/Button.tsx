// @flow
import React, {ButtonHTMLAttributes} from 'react';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string
}
export const Button = ({onClick, title, className}: ButtonType) => {
    return (
        <button className={className} onClick={onClick}>{title}</button>
    );
};