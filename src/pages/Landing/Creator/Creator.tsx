import {useInView} from "react-intersection-observer";
import TextType from "../About/ReactBits/TextType.tsx";

const Creator = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    return (
        <>
            <section ref={ref} id="contacts"  className={`
                w-full flex justify-center py-20 px-5 sm:px-10
                transition-all duration-700 ease-out
                ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-16">

                    {/* Фото */}
                    <div className="flex-shrink-0 relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-md -mt-14 lg:mt-0">
                        <img
                            src="/images/photo.jpg"
                            alt="Creator"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Текст */}
                    <div className="flex flex-col justify-center w-full lg:w-2/3 gap-4">
                        <TextType
                            className="text-3xl sm:text-4xl font-semibold text-orange-700"
                            text={["Создатель проекта — Леонард Чучунов"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor
                            cursorCharacter="_"
                            deletingSpeed={50}
                            variableSpeed={{ min: 60, max: 120 }}
                            cursorBlinkDuration={0.5}
                        />

                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl">
                            Frontend-разработчик с опытом работы над коммерческими и учебными проектами.
                            Участвовал в разработке веб-приложений, включая Telegram Mini App, занимался версткой интерфейсов,
                            реализацией клиентской логики и координацией работы команды.
                        </p>

                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
                            Интересуется современными веб-технологиями и активно развивает навыки фронтенд-разработки.
                        </p>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Creator;