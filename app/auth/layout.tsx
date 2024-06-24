const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black flex justify-center items-center w-full h-auto min-h-screen px-4 py-10 overflow-hidden relative">
      <div className="z-0 fixed w-[700px] h-[700px] left-[-300px] bottom-[-300px] rounded-full bg-[linear-gradient(232deg,_#135CFE_4.53%,_#88529C_49.75%,_#FE483B_94.97%)] filter blur-[150px]"></div>
      <div className="z-0 fixed w-[700px] h-[700px] right-[-300px] top-[-300px] rounded-full bg-[linear-gradient(232deg,_#135CFE_4.53%,_#88529C_49.75%,_#FE483B_94.97%)] filter blur-[150px]"></div>
      <div className="bg-primary flex w-full max-w-[500px] p-[40px] flex-col items-start gap-[40px] flex-shrink-0 text-secondary rounded-lg z-20">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
