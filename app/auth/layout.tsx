const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[linear-gradient(to_right,_#4568dc,_#2A2A5A)] flex justify-center items-center w-full h-auto min-h-screen px-4 py-10 overflow-hidden relative">
      <div className="bg-primary flex w-full max-w-[500px] p-[40px] flex-col items-start gap-[40px] flex-shrink-0 text-secondary rounded-lg z-20">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
