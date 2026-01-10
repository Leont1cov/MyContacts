import Button from "../../../components/Button/Button.tsx";


const Hero = () => {
    return (
        <>
            <div className="flex flex-col px-5 sm:px-10 lg:px-30 gap-8 bg-white">
                {/* Заголовок */}
                <h1 className="text-2xl sm:text-7xl lg:text-8xl font-medium leading-tight">
                    MyContacts
                </h1>

                {/* Подзаголовок */}
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-xl leading-relaxed">
                    Все ваши контакты в одном удобном месте. Управляйте, находите и сохраняйте — без хаоса.
                </p>

                <Button>
                    Попробовать
                </Button>
            </div>
        </>
    )
}

export default Hero;