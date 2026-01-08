import "../../styles/App.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faVk} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faTiktok} from "@fortawesome/free-brands-svg-icons";

type CardProps = {
    text: string;
    icon?: typeof faTelegram | typeof faVk | typeof faGithub | typeof faYoutube | typeof faTwitter | typeof faFacebook | typeof faLinkedin | typeof faTiktok;
}

const Card = ({ text, icon }:CardProps) => {
    if (!icon) return null;

    return (
        <>
            {/*Тут будет ссылка на нужную соц.сеть*/}
            <a href="#" className="flex justify-center items-center gap-3 max-w-90
            text-xl text-center p-5 border border-solid border-gray-300 rounded-lg
            hover:bg-gray-200 transition duration-200 ease-in-out active:bg-gray-300 cursor-pointer">
                <div className="text-center">
                    <FontAwesomeIcon icon={icon} className="text-blue-600 text-2xl" />
                </div>

                {text ?? "Здесь будет ваш текст!"}
            </a>
        </>
    )
}

export default Card;