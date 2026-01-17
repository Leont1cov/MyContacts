type ModalInputFieldsProps = {
    url?: string;
    setUrl: (url: string) => void;
    label: string;
    setLabel: (label: string) => void;
    MAX_LABEL_LENGTH?: number;
}

const ModalInputFields = ({url, setUrl, label, setLabel,  MAX_LABEL_LENGTH}:ModalInputFieldsProps) => {
    return (
        <>
            <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Вставьте ссылку"
                className="
                        w-full
                        border
                        border-gray-300
                        rounded-xl
                        px-4 py-3
                        outline-none
                        focus:border-orange-500"/>

            {/* Label input */}
            <input
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                placeholder="Название для отображения"
                maxLength={MAX_LABEL_LENGTH}
                className="
                        w-full
                        border
                        border-gray-300
                        rounded-xl
                        px-4 py-3
                        outline-none
                        focus:border-orange-500"/>
            <div className="text-right text-xs text-gray-400">
                {label.length} / {MAX_LABEL_LENGTH}
            </div>
        </>
    )
}
export default ModalInputFields;