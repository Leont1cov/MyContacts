import { useState, useEffect } from "react";
import { supabase } from "../../../../Base/supabaseClient.ts";
import type { User } from "@supabase/supabase-js";
import Avatar from "../../../../components/Avatar/Avatar.tsx";


const ProfileHeader = () => {
    const [user, setUser] = useState<User | null>(null);
    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        const init = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return;

            setUser(user);

            // Получаем username из таблицы profiles
            const { data, error } = await supabase
                .from("profiles")
                .select("username")
                .eq("id", user.id)
                .maybeSingle();

            if (error) {
                console.log(error);
            } else {
                setUsername(data?.username || null);
            }
        };

        init();
    }, []);

    return (
        <>
            <div className="flex flex-col items-center gap-4">
                <Avatar src="/public/Logo/MyContactsLogo_rounded.png"/>
                <h2 className="text-lg font-medium">{username ? `@${username}` : user?.email?.split("@")[0]}</h2>
            </div>
        </>
    )
}

export default ProfileHeader;