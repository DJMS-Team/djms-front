import { Navigation } from "@/components/navigation";

const LayoutProduct = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <Navigation /> */}
      <div className="min-h-screen bg-gray-100 pt-24 w-full pb-24">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default LayoutProduct;
