import { useState, useEffect } from "react";
import { supabase } from "../../../Base/supabaseClient.ts";
import type { User } from "@supabase/supabase-js";
import Button from "../../../components/Button/Button.tsx";
import ProfileModal from "./ProfileModal/ProfileModal.tsx";
import ProfileHeader from "./components/ProfileHeader.tsx";
import type { ProfileLink } from "./constants/ProfileLink.ts";
import Card from "../../../components/Card/Card.tsx";
import { socials } from "./ProfileModal/constants/socials.ts";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
    const [links, setLinks] = useState<ProfileLink[]>([]);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [editIndex, setEditIndex] = useState<number | null>(null);

    // Функция загрузки ссылок из Supabase
    async function fetchLinks(userId: string) {
        setLoading(true);
        const { data, error } = await supabase
            .from("links")
            .select("*")
            .eq("user_id", userId);

        if (error) {
            console.error("Ошибка при получении ссылок:", error.message);
            setLinks([]);
        } else {
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
                    social: link.social ?? ""
                };
            });

            setLinks(fetchedLinks);
        }

        setLoading(false);
    }

    // Получаем текущего пользователя и его ссылки
    useEffect(() => {
        const init = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();

            if (user) {
                setUser(user);
                await fetchLinks(user.id);
            } else {
                setLoading(false); // Нет пользователя — показываем пустой экран
            }
        };

        init();
    }, []);

    // Сохранение новой ссылки или редактирование
    const handleSaveLink = async (link: ProfileLink) => {
        if (!user) return;

        const linkData = {
            user_id: user.id,
            title: link.label,
            url: link.url,
            icon: link.icon,
            color: link.color,
            social: link.social,
        };

        if (editIndex !== null) {
            // Update существующей ссылки
            const linkId = links[editIndex].id;
            if (!linkId) return; // защита
            await supabase.from("links").update(linkData).eq("id", linkId);
            setEditIndex(null);
        } else {
            // Insert новой ссылки
            await supabase.from("links").insert([linkData]);
        }
        await fetchLinks(user.id); // всегда обновляем список
        setIsOpen(false);
    };

    // Удаление ссылки
    const handleDelete = async (index: number) => {
        if (!user) return;

        const linkId = links[index].id;
        console.log("Deleting id:", linkId);

        const { data, error } = await supabase
            .from("links")
            .delete()
            .eq("id", linkId);

        console.log("delete result:", data, error);

        await fetchLinks(user.id);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-400">
                Загрузка профиля...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#fafafa] flex justify-center">
            <div className="flex flex-col gap-5 w-full max-w-2xl px-5 py-10">
                <ProfileHeader />

                {/* MAIN ACTION */}
                <div className="flex justify-center">
                    <Button
                        onClick={() => setIsOpen(true)}
                        className="w-full max-w-md"
                    >
                        Добавить
                    </Button>
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
                                onDelete={() => handleDelete(index)}
                                className="w-full max-w-md"
                            />
                        ))}
                    </div>
                )}
            </div>

            <ProfileModal
                key={editIndex ?? "create"}
                onAdd={handleSaveLink}
                editLink={editIndex !== null ? links[editIndex] : null}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </div>
    );
};

export default Profile;