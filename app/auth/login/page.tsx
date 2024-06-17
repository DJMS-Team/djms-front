import FormLogin from "@/components/form-login";

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