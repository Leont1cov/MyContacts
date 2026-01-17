import "../../styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

type CardProps = {
    label: string;
    url: string;
    icon: IconDefinition;
    iconColor?: string;

    onEdit?: () => void;
    onDelete?: () => void;
    className?: string;
};

const Card = ({
                  label,
                  url,
                  icon,
                  iconColor,
                  onEdit,
                  onDelete,
                    className,
              }: CardProps) => {
    return (
        <div
            className={`${className}
                group
                flex items-center justify-between
                gap-3
                max-w-90
                p-4
                border border-gray-300
                rounded-lg
                bg-white
                hover:bg-gray-50
                transition
            `}
        >
            {/* LINK */}
            <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 flex-1"
            >
                <FontAwesomeIcon
                    icon={icon}
                    className="text-2xl"
                    style={{ color: iconColor }}
                />
                <span className="text-lg font-medium">
                    {label || "Ваша ссылка"}
                </span>
            </a>

            {/* ACTIONS */}
            {(onEdit || onDelete) && (
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition">
                    {onEdit && (
                        <button
                            onClick={onEdit}
                            className="text-gray-400 hover:text-gray-700"
                        >
                            <FontAwesomeIcon icon={faPen} />
                        </button>
                    )}

                    {onDelete && (
                        <button
                            onClick={onDelete}
                            className="text-gray-400 hover:text-red-500"
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Card;
