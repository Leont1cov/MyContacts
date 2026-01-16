import { useState, useMemo } from "react";
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

const detectSocial = (url: string) => {
    if (url.includes("facebook.com")) return "Facebook";
    if (url.includes("github.com")) return "GitHub";
    if (url.includes("linkedin.com")) return "LinkedIn";
    if (url.includes("t.me")) return "Telegram";
    if (url.includes("vk.com")) return "VK";
    if (url.includes("youtube.com") || url.includes("youtu.be")) return "YouTube";
    return null;
};

const ProfileModal = ({ isOpen, onClose }: Props) => {
    const [url, setUrl] = useState("");
    const [label, setLabel] = useState("");
    const MAX_LABEL_LENGTH = 100;

    const detected = useMemo(() => {
        const name = detectSocial(url);
        return socials.find(s => s.name === name) || null;
    }, [url]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[1000]">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/40"
                onClick={() => {
                    setUrl("");
                    setLabel("");
                    onClose();
                }}/>

            {/* Modal */}
            <div
                className="
                  fixed bottom-0 left-0 right-0
                  sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2
                  w-full sm:w-[420px]
                  h-[85vh] sm:h-auto
                  bg-white
                  rounded-t-2xl sm:rounded-2xl
                  p-5 sm:p-6
                  flex flex-col gap-5
                  animate-[fadeUp_0.3s_ease-out_forwards]
                ">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium">Добавить ссылку</h2>
                    <button onClick={onClose}>
                        <FontAwesomeIcon icon={faXmark} className="text-xl text-gray-400" />
                    </button>
                </div>

                {/* URL input */}
                <input
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Вставьте ссылку"
                    className="
                        w-full
                        border
                        border-gray-300
                        rounded-xl
                        px-4 py-3
                        outline-none
                        focus:border-orange-500"/>

                {/* Label input */}
                <input
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    placeholder="Название для отображения"
                    maxLength={MAX_LABEL_LENGTH}
                    className="
                        w-full
                        border
                        border-gray-300
                        rounded-xl
                        px-4 py-3
                        outline-none
                        focus:border-orange-500"/>
                <div className="text-right text-xs text-gray-400">
                    {label.length} / {MAX_LABEL_LENGTH}
                </div>

                {/* Preview */}
                {detected && (
                    <div
                        className="
                            flex items-center gap-3
                            border border-gray-200
                            rounded-xl
                            px-4 py-3">
                        <FontAwesomeIcon
                            icon={detected.icon}
                            style={{ color: detected.color }}
                            className="text-xl"/>
                        <span className="font-medium">
                            {label || detected.name}
                        </span>
                    </div>
                )}

                {/* Action */}
                <Button
                    className="w-full mt-auto"
                    disabled={!url || !label || !detected}
                    onClick={() => {
                        console.log({
                            url,
                            label,
                            social: detected?.name,
                        });
                        setUrl("");
                        setLabel("");
                        onClose();
                    }}
                >
                    Добавить
                </Button>
            </div>
        </div>
    );
};

export default ProfileModal;
