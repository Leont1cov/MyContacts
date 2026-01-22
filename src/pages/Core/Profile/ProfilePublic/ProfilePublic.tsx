import {useEffect, useState} from "react";
import type {ProfileLink} from "../constants/ProfileLink.ts";
import Card from "../../../../components/Card/Card.tsx";

const STORAGE_KEY = "profile_links";

const ProfilePublic = () => {
    const [links, setLinks] = useState<ProfileLink[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);

        const handler = () => {
            if (saved) {
                setLinks(JSON.parse(saved));
            }
        }

        window.addEventListener("resize", handler);
    }, [])

    if (!links.length) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-400">
                Профиль пока пуст
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#fafafa] flex flex-col items-center gap-4 p-6">
            {links.map((link, index) => (
                <Card
                    key={index}
                    label={link.label}
                    url={link.url}
                    icon={link.icon}
                    iconColor={link.color}
                    className="w-full max-w-md"
                />
            ))}
        </div>
    );
}

export default ProfilePublic;