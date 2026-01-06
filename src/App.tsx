import Card from "./components/Card/Card.tsx";
import {faFacebook, faGithub, faLinkedin, faTelegram, faVk, faYoutube} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <>
        <div className="container p-10 flex flex-col gap-3">
            <Card text={"Это мой телеграмм, пишите, звоните"} icon={faTelegram}/>
            <Card text={"Тут мой ВК подписывайтесь"} icon={faVk}/>
            <Card text={"Мой репозитоий"} icon={faGithub}/>
            <Card text={"Мой ютуб канал"} icon={faYoutube}/>
            <Card text={"Мой Facebook"} icon={faFacebook}/>
            <Card text={"Мой LinkedIn"} icon={faLinkedin}/>

        </div>
    </>
  )
}

export default App
