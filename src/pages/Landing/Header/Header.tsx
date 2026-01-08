import "../../../styles/App.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import Button from "../../../components/Button/Button.tsx";

const Header = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 justify-between items-center
                px-5 sm:px-10 lg:px-30 py-5 border-b border-solid border-gray-200">

                {/* Logo */}
                <a className="flex items-center gap-3" href="#">
                    <img className="w-16 h-16 sm:w-20 sm:h-20" src="/Logo/MyContactsLogo_tranparent.png" alt="MyContacts Logo" />
                    <h1 className="font-normal text-xl sm:text-2xl">MyContacts</h1>
                </a>

                {/* Navigation */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 items-center">
                    <a className="font-medium hover:text-orange-700 transition duration-200 ease-in-out" href="#">О Приложении</a>
                    <a className="font-medium hover:text-orange-700 transition duration-200 ease-in-out" href="#">Контакты</a>
                </div>

                {/* Actions */}
                <div className="flex gap-5 sm:gap-10 items-center">
                    <Button type="button">RU</Button>
                    <a href="#">
                        <FontAwesomeIcon className="text-2xl hover:text-orange-700 transition duration-200 ease-in-out" icon={faGithub} />
                    </a>
                </div>

            </div>


        </>
    )
}

export default Header;