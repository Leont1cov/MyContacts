import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { superbase } from "../../Base/superbaseClient.ts";
import toast from "react-hot-toast";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const { error } = await superbase.auth.signUp({ email, password });
        if (error) toast.error(error.message);
        else toast.loading("Пожалуйста, подтвердите email в письме 📩");
        setLoading(false);
    }

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const { data, error } = await superbase.auth.signInWithPassword({ email, password });
        if (error) {
            toast.error(error.message);
        }  else if (data?.user) {
            toast.success("Добро пожаловать!");
            navigate("/app");
        }
        setLoading(false);
    }

    return (
        <div className="w-screen min-h-screen flex bg-[#fafafa]">

            {/* LEFT — CONTENT */}
            <div
                className="
                flex flex-col justify-center items-center
                w-full lg:w-1/2
                px-6 sm:px-10
            "
            >
                {/* Logo */}
                <div className="mb-10">
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

                {/* FORM */}
                <form
                    onSubmit={handleLogin}
                    className="w-full max-w-sm flex flex-col gap-4"
                >
                    {/* Email */}
                    <input
                        type="email"
                        placeholder="Почта"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="
                            w-full
                            px-4 py-3
                            border border-gray-200
                            rounded-lg
                            text-sm
                            outline-none
                            focus:border-black
                        "
                    />

                    {/* Password */}
                    <input
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="
                            w-full
                            px-4 py-3
                            border border-gray-200
                            rounded-lg
                            text-sm
                            outline-none
                            focus:border-black
                        "
                    />

                    {/* Login Button */}
                    <button
                        type="submit"
                        // disabled={loading}
                        className="
                          text-sm font-medium text-white
                        bg-black
                        border border-black
                        rounded-md
                        px-4 py-2
                        hover:bg-gray-900
                        transition
                        "
                    >
                        {loading ? "Загрузка..." : "Войти"}
                    </button>

                    {/* Sign up */}
                    <button
                        type="button"
                        onClick={handleSignUp}
                        className="
                            text-sm text-gray-700
                            border border-gray-300
                            rounded-md
                            px-4 py-2
                            hover:border-gray-400 hover:bg-gray-50
                            transition
                          ">
                        Создать аккаунт
                    </button>
                </form>

                {/* Footer */}
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
