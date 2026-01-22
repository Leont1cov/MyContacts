const About = () => {
    return (
        <section className={"flex flex-col lg:flex-row items-center justify-center mt-32 lg:mt-40 px-5 sm:px-10 lg:px-30 gap-10 bg-white"}>

            <div className="relative w-full max-w-md mx-auto">
                <div className="
                    relative
                    aspect-[9/16]
                    rounded-2xl
                    overflow-hidden
                    bg-black
                    shadow-xl
                    ring-1 ring-black/10
                ">
                    {/*TODO: Вставить место для видео*/}
                    <video
                        src="/path/to/demo.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
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
