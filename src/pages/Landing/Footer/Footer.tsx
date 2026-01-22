import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import ShinyText from "../Hero/ReactBits/ShinyText.tsx";

const Footer = () => {
    return (
        <footer className="mt-20 border-t border-gray-200 bg-white">
            <div className="max-w-5xl mx-auto px-5 py-8 flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center justify-center sm:justify-start gap-3 w-full sm:w-auto">
                        <a
                            href="/"
                            className="
                                flex flex-col items-center
                                sm:flex-row sm:items-center
                                gap-2 sm:gap-3
                            "
                        >
                            <img
                                className="w-16 h-16 sm:w-20 sm:h-20"
                                src="/Logo/MyContactsLogo_tranparent.png"
                                alt="MyContacts Logo"
                            />

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
                                className="
                                    font-normal
                                    text-lg sm:text-2xl
                                    text-center sm:text-left
                                "
                            />
                        </a>
                    </div>


                    <div className="flex items-center gap-5 text-xl text-gray-600">
                        <a
                            href="https://github.com/Leont1cov?tab=repositories"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-black transition"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>

                        <a
                            href="https://t.me/LeonardChuchunov"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-black transition"
                        >
                            <FontAwesomeIcon icon={faTelegram} />
                        </a>

                        <span className="text-sm text-gray-500">
                            chuchunovleo@mail.ru
                        </span>
                    </div>
                </div>

                <div className="flex justify-center text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                        by Leonard Chuchunov
                    </span>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
