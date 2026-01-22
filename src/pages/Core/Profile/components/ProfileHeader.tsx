import Avatar from "../../../../components/Avatar/Avatar.tsx";

const ProfileHeader = () => {
    return (
        <>
            <div className="flex flex-col items-center gap-4">
                <Avatar src="/public/Logo/MyContactsLogo_rounded.png"/>
                <h2 className="text-lg font-medium">@username</h2>
            </div>
        </>
    )
}

export default ProfileHeader;