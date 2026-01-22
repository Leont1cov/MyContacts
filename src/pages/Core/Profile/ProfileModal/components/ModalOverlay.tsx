type OverlayProps = {
    setUrl: (url: string) => void;
    setLabel: (label: string) => void;
    onClose: () => void;
}

const ModalOverlay = ({setUrl, setLabel, onClose}:OverlayProps) => {
    return (
        <>
            <div
                className="absolute inset-0 bg-black/40"
                onClick={() => {
                    setUrl("");
                    setLabel("");
                    onClose();
                }}/>
        </>
    )
}

export default ModalOverlay;