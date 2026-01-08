import Card from "./components/Card/Card.tsx";
import {faFacebook, faGithub, faLinkedin, faTelegram, faVk, faYoutube} from "@fortawesome/free-brands-svg-icons";
import Avatar from "./components/Avatar/Avatar.tsx";
import Input from "./components/Input/Input.tsx";
import Button from "./components/Button/Button.tsx";

function App() {
  return (
    <>
        <div className="container p-10 flex flex-col gap-3">
            <Avatar/>
            <Card text={"Это мой телеграмм, пишите, звоните"} icon={faTelegram}/>
            <Card text={"Тут мой ВК подписывайтесь"} icon={faVk}/>
            <Card text={"Мой репозитоий"} icon={faGithub}/>
            <Card text={"Мой ютуб канал"} icon={faYoutube}/>
            <Card text={"Мой Facebook"} icon={faFacebook}/>
            <Card text={"Мой LinkedIn"} icon={faLinkedin}/>
            <Input type="text" placeholder="Создать новый контакт"/>
            <Button type="button" children="Click"/>
        </div>
    </>
  )
}

export default App
