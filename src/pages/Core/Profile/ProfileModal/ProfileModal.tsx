import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faGithub,
    faLinkedin,
    faTelegram,
    faVk,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import Button from "../../../../components/Button/Button";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const socials = [
    { name: "Facebook", icon: faFacebook, color: "#1877F2" },
    { name: "GitHub", icon: faGithub, color: "#181717" },
    { name: "LinkedIn", icon: faLinkedin, color: "#0A66C2" },
    { name: "Telegram", icon: faTelegram, color: "#229ED9" },
    { name: "VK", icon: faVk, color: "#0077FF" },
    { name: "YouTube", icon: faYoutube, color: "#FF0000" },
];

const ProfileModal = ({ isOpen, onClose }: Props) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[1000]">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/40"
                onClick={onClose}
            />

            {/* Modal */}
            <div
                className="
                  fixed bottom-0 left-0 right-0
                  sm:top-1/2 sm:left-1/2 sm:bottom-auto sm:right-auto
                  sm:-translate-x-1/2 sm:-translate-y-1/2

                  w-full sm:w-[420px]
                  h-[85vh] sm:h-auto
                  bg-white
                  rounded-t-2xl sm:rounded-2xl
                  p-5 sm:p-6

                  flex flex-col
                  animate-[fadeUp_0.25s_ease-out]
                ">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium">
                        Добавить ссылку
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-700 transition"
                    >
                        <FontAwesomeIcon icon={faXmark} className="text-xl" />
                    </button>
                </div>

                {/* Content */}
                <div className="mt-6 flex flex-col gap-3 overflow-y-auto">
                    {socials.map(({ name, icon, color }) => (
                        <Button
                            key={name}
                            icon={icon}
                            iconColor={color}
                            className="
                                flex
                                justify-start
                                items-center

                                gap-2
                                py-3
                                text-xl
                              "
                            onClick={() => {
                                onClose();
                            }}
                        >
                            {name}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfileModal;
