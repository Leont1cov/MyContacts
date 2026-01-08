import "../../styles/App.css";

type InputProps = {
    type?: "email" | "password" | "text" | "file";
    id?: string;
    name?: string;
    minlength?: number;
    maxlength?: number;
    placeholder?: string;
}

const Input = ({ type, id, name, minlength, maxlength, placeholder }:InputProps) => {
    return (
        <>
            <input className="border border-solid border-gray-300 rounded-lg p-2 max-w-90"
                   type={type} id={id} name={name} minLength={minlength} maxLength={maxlength} placeholder={placeholder} />
        </>
    )
}

export default Input;