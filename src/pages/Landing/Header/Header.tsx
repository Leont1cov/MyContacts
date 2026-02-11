import "../../../styles/App.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faBurger} from "@fortawesome/free-solid-svg-icons";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button/Button.tsx";
import {useState} from "react";
import ShinyText from "../Hero/ReactBits/ShinyText.tsx";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header
                className="
                    flex flex-row gap-5 lg:gap-20 justify-between items-center
                    px-5 sm:px-10 lg:px-30 py-5
                    fixed w-full z-40
                    bg-white/70 backdrop-blur-md
                    border-b border-gray-200
                  ">

                {/* Logo */}
                <a className="flex items-center relative" href="/">
                    <img className="w-16 h-16 sm:w-20 sm:h-20" src="/Logo/MyContactsLogo_tranparent.png" alt="MyContacts Logo" />
                    <ShinyText
                        text="MyContacts"
                        speed={2}
                        delay={0}
                        color="#2A2A2A"
                        shineColor="#FFD8A8"
                        spread={120}
                        direction="left"
                        yoyo={false}
                        pauseOnHover={false}
                        className={"font-normal text-xl sm:text-2xl absolute left-full"}
                    />
                </a>

                {/* Navigation */}
                <div className="hidden lg:flex gap-10 items-center">
                    <a className="font-medium hover:text-orange-700 transition duration-200 ease-in-out" href="#about">
                        О Приложении
                    </a>
                    <a className="font-medium hover:text-orange-700 transition duration-200 ease-in-out" href="#contacts">
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
            </header>

            {/* MOBILE MENU */}
            {isOpen && (
                <div className="fixed inset-0 z-[999] lg:hidden transition duration-200 ease-in-out">
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black/40"
                        onClick={() => setIsOpen(false)}
                    />

                    <div
                        className="
                          absolute top-0 right-0 h-full
                          w-4/5 max-w-sm
                          bg-white
                          p-6
                          flex flex-col gap-6
                        ">
                        <Button
                            onClick={() => setIsOpen(false)}
                            className="self-end"
                            type="button"
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </Button>

                        <nav className="flex flex-col gap-4 text-lg">
                            <a className="hover:text-orange-700 transition" href="#">
                                О Приложении
                            </a>
                            <a className="hover:text-orange-700 transition" href="#">
                                Контакты
                            </a>
                            <a className="hover:text-orange-700 transition" href="#">
                                GitHub
                            </a>
                        </nav>
                    </div>
                </div>
            )}
        </>
    )
}

export default Header;