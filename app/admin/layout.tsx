import { Header } from "@/components/header";
import { SheetProvider } from "@/components/sheet-provider";

type Props = {
    children: React.ReactNode;

}

const DashboardLayout = ({children}: Props) => {
    return (
        <>
        <Header/>
        <main className="px-3 lg:px-14">
            <SheetProvider/>
            {children}
        </main>
        </>
    )
}

export default DashboardLayout;