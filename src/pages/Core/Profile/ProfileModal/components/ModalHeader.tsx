import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

type ModalHeaderProps = {
    onClose: () => void;
}

const ModalHeader = ({onClose}:ModalHeaderProps) => {
    return (
        <>
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">Добавить ссылку</h2>
                <button onClick={onClose}>
                    <FontAwesomeIcon icon={faXmark} className="text-xl text-gray-400" />
                </button>
            </div>
        </>
    )
}

export default ModalHeader;