import Button from "../../../components/Button/Button.tsx";
import ShinyText from './ReactBits/ShinyText';

const Hero = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center text-center mt-15 px-5 sm:px-10 lg:px-30 gap-8 bg-white">
                {/* Заголовок */}
                <ShinyText
                    text="MyContacts"
                    speed={2}
                    delay={0}
                    color="#2A2A2A"
                    shineColor="#FFD8A8"
                    spread={120}
                    direction="left"
                    yoyo={false}
                    pauseOnHover={false}
                    className={"text-2xl sm:text-7xl lg:text-8xl font-medium leading-tight"}
                />

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