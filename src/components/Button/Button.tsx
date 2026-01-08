import "../../styles/App.css";
import * as React from "react";

type ButtonProps = {
    children?: string | React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit";
    className?: string;
}

const Button = ({ children, onClick, type, className }:ButtonProps) => {
    return (
        <>
            <button className={`${className} border border-solid border-gray-300 rounded-lg max-w-90 p-2 hover:bg-gray-200
            transition duration-200 ease-in-out active:bg-gray-300 cursor-pointer`} onClick={onClick} type={type}>
                {children}
            </button>
        </>
    )
}

export default Button;