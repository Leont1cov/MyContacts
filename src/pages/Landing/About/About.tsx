const About = () => {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-center mt-20 px-5 sm:px-10 lg:px-30 gap-10 bg-white">

            {/* Левая колонка: айфон с видео */}
            <div className="relative w-64 h-128">
                {/* Видео */}
                <video
                    src="/path/to/demo.mp4"
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                />

                {/* Айфон поверх */}
                <img
                    src="/path/to/iphone.png"
                    alt="iPhone frame"
                    className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
                />
            </div>


            {/* Правая колонка: текст */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4">
                <h2 className="text-3xl font-bold">What is MyApp?</h2>
                <p className="text-gray-700 text-lg">
                    MyApp is a powerful tool that helps you manage your tasks efficiently.
                    You can create projects, track progress, and collaborate with your team
                    in real-time. Everything you need is in one place.
                </p>
                <p className="text-gray-700 text-lg">
                    It's simple to use and designed to save your time. Watch the video on
                    the left to see how it works in action.
                </p>
            </div>
        </section>
    )
}

export default About;
