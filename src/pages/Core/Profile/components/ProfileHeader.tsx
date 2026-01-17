import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";

const ProfileHeader = () => {
    return (
        <>
            <div className="flex flex-col items-center gap-4">
                {/* Avatar */}
                <FontAwesomeIcon icon={faUserCircle} className="text-6xl" />

                {/* Username */}
                <h2 className="text-lg font-medium">@username</h2>
            </div>
        </>
    )
}

export default ProfileHeader;