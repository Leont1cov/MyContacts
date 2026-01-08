import "../../../styles/App.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faBurger} from "@fortawesome/free-solid-svg-icons";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button/Button.tsx";
import {useState} from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="flex flex-row smd:flex-row gap-5 lg:gap-20 justify-between items-center
                px-5 sm:px-10 lg:px-30 py-5 border-b border-solid border-gray-200 relative">

                {/* Logo */}
                <a className="flex items-center gap-3" href="/">
                    <img className="w-16 h-16 sm:w-20 sm:h-20" src="/Logo/MyContactsLogo_tranparent.png" alt="MyContacts Logo" />
                    <h1 className="font-normal text-xl sm:text-2xl">MyContacts</h1>
                </a>

                {/* Navigation */}
                <div className="hidden lg:flex gap-10 items-center">
                    <a className="font-medium hover:text-orange-700 transition duration-200 ease-in-out" href="#">
                        О Приложении
                    </a>
                    <a className="font-medium hover:text-orange-700 transition duration-200 ease-in-out" href="#">
                        Контакты
                    </a>
                </div>


                {/* Actions */}
                <div className="flex gap-10 items-center">
                    {/* Burger - mobile only */}
                    <Button onClick={() => setIsOpen(prev => !prev)} className="block lg:hidden" type="button">
                        <FontAwesomeIcon icon={faBurger} />
                    </Button>

                    <Button className="hidden lg:block" type="button">
                        RU
                    </Button>

                    <a className="hidden lg:block" href="#">
                        <FontAwesomeIcon
                            className="text-2xl hover:text-orange-700 transition duration-200 ease-in-out"
                            icon={faGithub}
                        />
                    </a>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="fixed inset-0 bg-white z-50 flex flex-col gap-5 p-5 lg:hidden">
                        <Button
                            onClick={() => setIsOpen(false)}
                            className="self-end mb-5"
                            type="button"
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </Button>

                        <a className="font-medium hover:text-orange-700 transition duration-200 ease-in-out" href="#">
                            О Приложении
                        </a>
                        <a className="font-medium hover:text-orange-700 transition duration-200 ease-in-out" href="#">
                            Контакты
                        </a>
                        <a className="font-medium hover:text-orange-700 transition duration-200 ease-in-out" href="#">
                            GitHub
                        </a>
                    </div>
                )}
            </header>
        </>
    )
}

export default Header;