import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button/Button.tsx";
import ProfileModal from "./ProfileModal/ProfileModal.tsx";

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#fafafa] flex justify-center">
            <div className="flex flex-col gap-5 w-full max-w-2xl px-5 py-10">

                {/* PROFILE HEADER */}
                <div className="flex flex-col items-center gap-4">
                    {/* Avatar */}
                    <FontAwesomeIcon icon={faUserCircle} className="text-6xl" />

                    {/* Username */}
                    <h2 className="text-lg font-medium">@username</h2>
                </div>

                {/* MAIN ACTION */}
                <div className="flex justify-center">
                    <Button onClick={() => setIsOpen(true)} className="w-full max-w-md">Добавить</Button>
                </div>

                {/* EMPTY STATE */}
                <div className="mt-20 flex flex-col items-center text-center gap-4 text-gray-400">
                    <div className="text-5xl">✳</div>
                    <p>
                        Покажите миру, кто вы есть  <br />
                        Добавьте ссылку, чтобы начать
                    </p>
                </div>

            </div>
            <ProfileModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    );
};

export default Profile;
