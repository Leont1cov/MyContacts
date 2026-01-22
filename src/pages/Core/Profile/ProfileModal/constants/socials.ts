import {
    faFacebook,
    faGithub,
    faLinkedin,
    faTelegram,
    faVk,
    faYoutube}
    from "@fortawesome/free-brands-svg-icons";

export const socials = [
    { name: "Facebook", icon: faFacebook, color: "#1877F2" },
    { name: "GitHub", icon: faGithub, color: "#181717" },
    { name: "LinkedIn", icon: faLinkedin, color: "#0A66C2" },
    { name: "Telegram", icon: faTelegram, color: "#229ED9" },
    { name: "VK", icon: faVk, color: "#0077FF" },
    { name: "YouTube", icon: faYoutube, color: "#FF0000" },
] as const;