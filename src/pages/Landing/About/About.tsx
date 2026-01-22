import { useInView } from 'react-intersection-observer';

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: false, // сработает один раз
        threshold: 0.3,    // появляется, когда 30% блока видно
    });

    return (
        <section
            ref={ref}
            className={`
            flex flex-col lg:flex-row items-center justify-center mt-32 lg:mt-40
            px-5 sm:px-10 lg:px-30 gap-10 bg-white
            transition-all duration-700 ease-out
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >

            <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-b from-white/40 to-transparent blur-2xl" />

                <div
                    className="
                        relative
                        aspect-[9/16]
                        rounded-[28px]
                        overflow-hidden
                        bg-neutral-900
                        shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)]
                        ring-1 ring-white/10
                    "
                >
                    <img
                        src="/images/screen.png"
                        alt="App preview"
                        className="
                            w-full
                            h-full
                            object-cover
                            select-none
                        "
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent" />
                </div>
            </div>


            <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4">
                <h2 className="text-2xl font-semibold leading-snug max-w-lg">
                    О приложении
                </h2>

                <p className="
                    text-gray-600 text-lg sm:text-xl lg:text-2xl max-w-xl leading-relaxed
                    opacity-0 translate-y-4
                    animate-[fadeUp_0.6s_ease-out_forwards]
                  ">
                    Это приложение собирает все важные ссылки и контакты в одном месте и позволяет делиться ими через одну страницу.
                </p>

                <p className="
                    text-gray-600 text-lg sm:text-xl lg:text-2xl max-w-xl leading-relaxed
                    opacity-0 translate-y-4
                    animate-[fadeUp_0.6s_ease-out_forwards]
                    animation-delay-[0.2s]
                  ">
                    Вместо отправки множества ссылок по отдельности вы создаёте персональный профиль, где всё аккуратно собрано и оформлено.
                </p>
            </div>
        </section>
    )
}

export default About;
