import Input from "../components/Input";
import { useCallback, useState } from "react";

interface InputProps {
  id: string;
  value: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === "login" ? "register" : "login");
  },[])

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
               {variant === "login" ? "Sign In" : "Register"}
                </h2>
            <div className="flex flex-col gap-4">
                {variant === "register" && ( 

                    <Input
                      label="Username"
                      onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                        setName(ev.target.value)
                      }
                      id="name"
                      value={name}
                      type="text"
                    />

                )}

              <Input
                label="Email"
                onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(ev.target.value)
                }
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(ev.target.value)
                }
                id="password"
                type="password"
                value={password}
              />
            </div>

            {variant === "register" && (
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              Sign Up
            </button>
            )}
            {variant === "login" && (
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              Login
            </button>
            )}

            {variant === "login" && (
            <p className="text-neutral-500 mt-12">
         First time using Netflix? <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">Create an account.</span>
            </p>

            )}
            {variant === "register" && (
            <p className="text-neutral-500 mt-12">
         Already have an account? <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer"> Sign In.</span>
            </p>

            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
