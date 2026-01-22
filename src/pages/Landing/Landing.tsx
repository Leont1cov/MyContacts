import Header from "./Header/Header.tsx";
import Hero from "./Hero/Hero.tsx";
import About from "./About/About.tsx";
import Creator from "./Creator/Creator.tsx";
import Footer from "./Footer/Footer.tsx";

const Landing = () => {
    return (
        <>
            <Header />
            <main className="pt-25">
                <Hero/>
                <About/>
                <Creator/>
            </main>
            <Footer />
        </>
    )
}

export default Landing;