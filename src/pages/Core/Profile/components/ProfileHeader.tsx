import { useState, useEffect } from "react";
import { supabase } from "../../../../Base/supabaseClient.ts";
import type { User } from "@supabase/supabase-js";
import Avatar from "../../../../components/Avatar/Avatar.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

type ProfileHeaderProps = {
    editable?: boolean;
};

const ProfileHeader = ({ editable = false }: ProfileHeaderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [username, setUsername] = useState<string | null>(null);
    const [avatar, setAvatar] = useState<string>("/public/Logo/MyContactsLogo_rounded.png");

    useEffect(() => {
        const init = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return;

            setUser(user);

            const { data, error } = await supabase
                .from("profiles")
                .select("username, avatar_url")
                .eq("id", user.id)
                .single();

            if (error) {
                console.log(error);
                return;
            }

            setUsername(data?.username || null);

            setAvatar(
                data?.avatar_url || "/Logo/MyContactsLogo_rounded.png"
            );
        };

        init();
    }, []);

    const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!user || !e.target.files?.length) return;

        const file = e.target.files[0];
        const safeFileName = encodeURIComponent(file.name);
        const filePath = `${user.id}/${safeFileName}`;

        try {
            // Загружаем файл в Supabase
            const { error: uploadError } = await supabase
                .storage
                .from("avatars")
                .upload(filePath, file, { upsert: true });

            if (uploadError) {
                console.error("Ошибка загрузки аватара:", uploadError.message);
                return;
            }

            // Получаем публичный URL уже после загрузки
            const { data: urlData } = supabase.storage
                .from("avatars")
                .getPublicUrl(filePath);


            if (urlData && "publicUrl" in urlData) {
                const publicUrl = urlData.publicUrl;

                setAvatar(publicUrl);

                const { error: profileError } = await supabase
                    .from("profiles")
                    .update({ avatar_url: publicUrl })
                    .eq("id", user.id);

                if (profileError) {
                    console.error("Ошибка обновления профиля:", profileError.message);
                }
            }

        } catch (err) {
            console.error("Ошибка при загрузке аватара:", err);
        }
    };

    return (
        <div className="relative flex flex-col items-center gap-4">
            <div className="relative w-24 h-24">
                <Avatar src={avatar} className="w-full h-full rounded-full" />

                {editable && (
                    <>
                        <label
                            htmlFor="avatarInput"
                            className="absolute bottom-0 right-0 text-sm text-white p-1.5 rounded-full cursor-pointer bg-gray-700 hover:bg-gray-800 transition"
                        >
                            <FontAwesomeIcon icon={faCamera} />
                        </label>

                        <input
                            id="avatarInput"
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleAvatarChange}
                        />
                    </>
                )}
                <input
                    id="avatarInput"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleAvatarChange}
                />
            </div>

            <h2 className="text-lg font-medium">
                {username ? `@${username}` : user?.email?.split("@")[0]}
            </h2>
        </div>
    );
};

export default ProfileHeader;