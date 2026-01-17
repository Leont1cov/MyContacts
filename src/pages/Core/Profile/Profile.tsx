import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "../../../components/Button/Button.tsx";
import ProfileModal from "./ProfileModal/ProfileModal.tsx";
import ProfileHeader from "./components/ProfileHeader.tsx";
import type {ProfileLink} from "./constants/ProfileLink.ts";

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [links, setLinks] = useState<ProfileLink[]>([]);

    const handleAddLink = (link: ProfileLink) => {
        setLinks(prev => [...prev, link]);
    };

    return (
        <div className="min-h-screen bg-[#fafafa] flex justify-center">
            <div className="flex flex-col gap-5 w-full max-w-2xl px-5 py-10">

                <ProfileHeader/>

                {/* MAIN ACTION */}
                <div className="flex justify-center">
                    <Button onClick={() => setIsOpen(true)} className="w-full max-w-md">Добавить</Button>
                </div>

                {/* EMPTY STATE */}
                {links.length === 0 ? (
                    <div className="mt-20 flex flex-col items-center text-center gap-4 text-gray-400">
                        <div className="text-5xl">✳</div>
                        <p>
                            Покажите миру, кто вы есть <br />
                            Добавьте ссылку, чтобы начать
                        </p>
                    </div>
                ) : (
                    <div className="flex flex-col gap-3 mt-6">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="
                                flex items-center gap-3
                                bg-white
                                border border-gray-200
                                rounded-xl
                                px-4 py-3
                                hover:bg-gray-50
                                transition
                            ">

                                <FontAwesomeIcon
                                    icon={link.icon}
                                    style={{ color: link.color }}
                                    className="text-xl"
                                />
                    <span className="font-medium">
                        {link.label}
                    </span>
                            </a>
                        ))}
                    </div>
                )}
            </div>
            <ProfileModal onAdd={handleAddLink} isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    );
};

export default Profile;
