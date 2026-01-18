import {useState} from "react";
import Button from "../../../components/Button/Button.tsx";
import ProfileModal from "./ProfileModal/ProfileModal.tsx";
import ProfileHeader from "./components/ProfileHeader.tsx";
import type {ProfileLink} from "./constants/ProfileLink.ts";
import Card from "../../../components/Card/Card";

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [links, setLinks] = useState<ProfileLink[]>([]);
    const [editIndex, setEditIndex] = useState<number | null>(null);

    const handleSaveLink = (link: ProfileLink) => {
        if (editIndex !== null) {
            setLinks(prev =>
                prev.map((item, i) => (i === editIndex ? link : item))
            );
            setEditIndex(null);
        } else {
            setLinks(prev => [...prev, link]);
        }
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
                    <div className="flex flex-col gap-3 mt-6 items-center">
                        {links.map((link, index) => (
                            <Card
                                key={index}
                                label={link.label}
                                url={link.url}
                                icon={link.icon}
                                iconColor={link.color}
                                onEdit={() => {
                                    setEditIndex(index);
                                    setIsOpen(true);
                                }}
                                onDelete={() => {
                                    setLinks(prev => prev.filter((_, i) => i !== index));
                                }}
                                className="w-full max-w-md"
                            />
                        ))}
                    </div>

                )}
            </div>
            <ProfileModal key={editIndex ?? "create"} onAdd={handleSaveLink} editLink={editIndex !== null ? links[editIndex] : null}
                          isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    );
};

export default Profile;
