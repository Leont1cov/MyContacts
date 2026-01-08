import "../../styles/App.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type CardProps = {
    text: string;
    icon: IconDefinition;
    iconColor?: string;
}

const Card = ({ text, icon, iconColor }:CardProps) => {
    if (!icon) return null;

    return (
        <>
            {/*Тут будет ссылка на нужную соц.сеть*/}
            <a href="#" className="flex justify-center items-center gap-3 max-w-90
            text-xl text-center p-5 border border-solid border-gray-300 rounded-lg
            hover:bg-gray-200 transition duration-200 ease-in-out active:bg-gray-300 cursor-pointer">
                <div className="text-center">
                    <FontAwesomeIcon
                        icon={icon}
                        className="text-2xl"
                        style={{ color: iconColor }}
                    />
                </div>

                {text ?? "Здесь будет ваш текст!"}
            </a>
        </>
    )
}

export default Card;