import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { ProfileLink } from "../constants/ProfileLink.ts";
import { supabase } from "../../../../Base/supabaseClient.ts";
import Card from "../../../../components/Card/Card.tsx";
import ProfileHeader from "../components/ProfileHeader.tsx";
import { socials } from "../ProfileModal/constants/socials.ts";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const ProfilePublic = () => {
    const { userId } = useParams(); // ID пользователя из URL
    const [links, setLinks] = useState<ProfileLink[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchLinks = async () => {
            if (!userId) return; // Если нет userId, ничего не делаем

            setLoading(true);
            const { data, error } = await supabase
                .from("links")
                .select("*")
                .eq("user_id", userId);

            if (error) {
                console.error("Ошибка при получении ссылок:", error.message);
            } else {
                // Преобразуем данные Supabase в формат ProfileLink
                const fetchedLinks: ProfileLink[] = (data ?? []).map(link => {
                    const socialItem = socials.find(
                        s => s.name.toLowerCase() === (link.social ?? "").toLowerCase()
                    );

                    return {
                        id: link.id,
                        label: link.title,
                        url: link.url,
                        icon: socialItem?.icon ?? faLink,
                        color: socialItem?.color ?? "#000",
                        social: link.social ?? "",
                    };
                });

                setLinks(fetchedLinks);
            }

            setLoading(false);
        };

        fetchLinks();
    }, [userId]);


    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-400">
                Загрузка...
            </div>
        );
    }

    if (!links.length) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-400">
                Профиль пока пуст
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#fafafa] flex flex-col items-center gap-4 p-6">
            <ProfileHeader />

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
};

export default ProfilePublic;