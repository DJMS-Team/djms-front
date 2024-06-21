import FormRegister from "@/components/form-register";

const Register = () => {
  return (
    <>
      <h1 className="text-4xl text-center w-full">Sing in</h1>
      <FormRegister />
      <a href="/auth/login">
        Already have an account?{" "}
        <span className="text-success hover:underline">Login</span>
      </a>
    </>
  );
};

export default Register;
