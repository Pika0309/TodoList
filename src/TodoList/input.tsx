// @flow
import React, {ChangeEvent, InputHTMLAttributes} from 'react';

type InputType = InputHTMLAttributes<HTMLInputElement> & {
    className?: string
}

export const Input = ({onChange, checked, type, value, className, placeholder, onKeyUp}: InputType) => {
    return (
            <input onKeyUp={onKeyUp} placeholder={placeholder} className={className} value={value} type={type} onChange={onChange} checked={checked}/>
    );
};