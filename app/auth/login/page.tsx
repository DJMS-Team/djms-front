import FormLogin from "@/components/form-login";

const Register = () => {
  return (
    <>
      <h1 className="text-4xl text-center w-full">Iniciar sesión</h1>
      <FormLogin />
      <a href="/auth/register">
        ¿Aun no tienes cuenta?{" "}
        <span className="text-success hover:underline">Registrarse</span>
      </a>
    </>
  );
};

export default Register;