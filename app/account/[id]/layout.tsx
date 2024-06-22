import { Navbar } from "@/components/navbar";
import Sidebar from "@/components/profile/sidebar";

type Props = {
    children: React.ReactNode;

}


const accountLayout = ({children}: Props) => {
  return (
    <div className="layout">
      <Navbar />
      
      <div className="content">
         <Sidebar />
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default accountLayout
