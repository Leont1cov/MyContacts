import Button from "../../components/Button/Button";

const Login = () => {
    return (
        <div className="w-screen min-h-screen flex bg-[#fafafa]">

            {/* LEFT — CONTENT */}
            <div className="
                flex flex-col justify-center items-center
                w-full lg:w-1/2
                px-6 sm:px-10
            ">
                {/* Logo */}
                <div className="mb-10">
                    {/* ТУТ ЛОГОТИП */}
                    <img
                        src="/Logo/MyContactsLogo_tranparent.png"
                        alt="MyContacts"
                        className="w-20 h-20 mx-auto"
                    />
                </div>

                {/* Text */}
                <div className="text-center max-w-sm mb-8">
                    <h1 className="text-2xl font-semibold text-gray-900 mb-3">
                        Добро пожаловать в MyContacts
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Войдите, чтобы создать страницу с вашими контактами
                        и делиться ей одной ссылкой
                    </p>
                </div>

                {/* Login Button */}
                <Button
                    className="
                        w-full max-w-sm
                        flex items-center justify-center gap-3
                        bg-black text-white
                        hover:bg-gray-900
                    "
                    onClick={() => {
                        // TODO: Yandex OAuth
                        console.log("Login with Yandex");
                    }}
                >
                    {/* Можно потом заменить на иконку Яндекса */}
                    Войти через Яндекс
                </Button>

                {/* Footer text */}
                <p className="mt-6 text-xs text-gray-400 text-center">
                    Продолжая, вы соглашаетесь с условиями использования
                </p>
            </div>

            {/* RIGHT — IMAGE */}
            <div className="hidden lg:block w-1/2 h-screen">
                <img
                    src="/images/image.png"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default Login;
