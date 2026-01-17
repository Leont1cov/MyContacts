import { useState, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../../../../components/Button/Button";
import ModalOverlay from "./components/ModalOverlay.tsx";
import ModalHeader from "./components/ModalHeader.tsx";
import ModalInputFields from "./components/ModalInputFields.tsx";

import {socials} from "./constants/socials.ts";
import {modalContainerClass} from "./constants/ProfileModal.style.ts";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (link: {
        url: string;
        label: string;
        social: string;
    }) => void;
}

const detectSocial = (url: string) => {
    if (url.includes("facebook.com")) return "Facebook";
    if (url.includes("github.com")) return "GitHub";
    if (url.includes("linkedin.com")) return "LinkedIn";
    if (url.includes("t.me")) return "Telegram";
    if (url.includes("vk.com")) return "VK";
    if (url.includes("youtube.com") || url.includes("youtu.be")) return "YouTube";
    return null;
};

const ProfileModal = ({ isOpen, onClose, onAdd }: Props) => {
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
            <ModalOverlay setUrl={setUrl} setLabel={setLabel} onClose={onClose}/>

            {/* Modal */}
            <div className={modalContainerClass}>
                <ModalHeader onClose={onClose}/>

                <ModalInputFields setLabel={setLabel} setUrl={setUrl} label={label}
                                  url={url} MAX_LABEL_LENGTH={MAX_LABEL_LENGTH} />

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
                        if (!detected) return;

                        onAdd({
                            url,
                            label,
                            social: detected.name,
                        });
                        setUrl("");
                        setLabel("");
                        onClose();
                    }}>
                    Добавить
                </Button>
            </div>
        </div>
    );
};

export default ProfileModal;
