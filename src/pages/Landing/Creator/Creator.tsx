import {useInView} from "react-intersection-observer";

const Creator = () => {
    const { ref, inView } = useInView({
        triggerOnce: false, // сработает один раз
        threshold: 0.3,    // появляется, когда 30% блока видно
    });

    return (
        <>
            <div
                ref={ref}
                className={`
                flex flex-col lg:flex-row items-center justify-center mt-32 lg:mt-40
                px-5 sm:px-10 lg:px-30 gap-10 bg-white
                transition-all duration-700 ease-out
                ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              `}
            >
                Hello
            </div>
        </>
    )
}

export default Creator;