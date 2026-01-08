import "../../styles/App.css";

type ButtonProps = {
    children?: string;
    onClick?: () => void;
    type?: "button" | "submit";
}

const Button = ({ children, onClick, type }:ButtonProps) => {
    return (
        <>
            <button className="border border-solid border-gray-300 rounded-lg max-w-90 p-2" onClick={onClick} type={type}>
                {children}
            </button>
        </>
    )
}

export default Button;