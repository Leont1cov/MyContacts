import "../../styles/App.css";

type AvatarProps = {
    src?: string;
    alt?: string;
    className?: string;
}

const Avatar = ({ src, alt = "avatar", className }:AvatarProps) => {
    return (
        <img
            src={src}
            alt={alt}
            className={`${className} rounded-full border border-gray-300 object-cover w-20 h-20`}
        />
    );
};

export default Avatar;
