import FormLogin from "@/components/form-login";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Image from "next/image";
import Link from "next/link";
const Register = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center w-full">
          <Link href="/" passHref>
            <Image
              src="/images/logo-no-slogan.png"
              alt="DMajorStore Logo"
              width={96}
              height={96}
              className="w-20 h-24"
            />
            </Link>
          </div>

      <h1 className="text-4xl text-center w-full font-bold">Iniciar sesión</h1>
      <FormLogin />
      <a href="/auth/register">
        ¿Aun no tienes cuenta?{" "}
        <span className="text-success hover:underline">Registrarse</span>
      </a>
      <Link href={"/auth/checkEmail"}>
          ¿Olvidaste tu contraseña?{" "}
          <span className="text-success hover:underline">Recuperar contraseña</span>
      </Link>
    </>
  );
};

export default Register;