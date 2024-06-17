import FormLogin from "@/components/formLogin";

const Register = () => {
  return (
    <>
      <h1 className="text-4xl text-center w-full">Log in</h1>
      <FormLogin />
      <a href="#">
        Do not have an account?{" "}
        <span className="text-success hover:underline">Sing in</span>
      </a>
    </>
  );
};

export default Register;