import FormRegister from "@/components/form-register";

const Register = () => {
  return (
    <>
      <h1 className="text-4xl text-center w-full">Registrarse</h1>
      <FormRegister />
      <a href="/auth/login">
        ¿Ya tienes una cuenta?{" "}
        <span className="text-success hover:underline">Ingresa</span>
      </a>
    </>
  );
};

export default Register;
