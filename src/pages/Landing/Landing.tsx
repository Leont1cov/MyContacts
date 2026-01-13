import Header from "./Header/Header.tsx";
import Hero from "./Hero/Hero.tsx";

const Landing = () => {
    return (
        <>
            <Header />
            <main className="pt-25">
                <Hero/>
            </main>
        </>
    )
}

export default Landing;