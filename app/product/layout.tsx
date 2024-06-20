import { Navigation } from "@/components/navigation";
import { Navbar } from "@/components/navbar";

const LayoutProduct = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 pt-24 w-full pb-24">{children}</div>
    </div>
  );
};

export default LayoutProduct;
