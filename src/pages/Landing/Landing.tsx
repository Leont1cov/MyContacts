import Header from "./Header/Header.tsx";
import Hero from "./Hero/Hero.tsx";
import About from "./About/About.tsx";

const Landing = () => {
    return (
        <>
            <Header />
            <main className="pt-25">
                <Hero/>
                <About/>
            </main>
        </>
    )
}

export default Landing;