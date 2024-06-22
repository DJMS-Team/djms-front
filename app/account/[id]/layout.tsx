import { Navbar } from "@/components/navbar";
import Sidebar from "@/components/profile/sidebar";

type Props = {
    children: React.ReactNode;

}


const accountLayout = ({children}: Props) => {
    return (
        <div>
        {/* <Navbar /> */}
        <div className="">
          <Sidebar />
          <main className="ml-60 mt-20 p-4 flex-1">
            {children}
          </main>
        </div>
      </div>
    
  );
}

export default accountLayout
