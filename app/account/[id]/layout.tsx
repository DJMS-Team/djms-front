"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navbar } from "@/components/navbar";
import Sidebar from "@/components/profile/sidebar";
import { Exo_2 } from "next/font/google";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Person, ShoppingCart, ShoppingBag } from "@mui/icons-material";

const exo_2 = Exo_2({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

const theme = createTheme({
  typography: {
    fontFamily: exo_2.style.fontFamily,
  },
});

const AccountLayout = ({ children }: Props) => {
  const router = useRouter();
  let id = null;
  const currentUser = Cookies.get("currentUser");

  if (currentUser) {
    try {
      const parsedUser = JSON.parse(currentUser);
      id = parsedUser.id;
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={exo_2.className}>
        <Navbar />
        <div>
          <Sidebar />
          <div className="fixed bottom-0 left-0 w-full text-xs bg-[#1C1C3C] text-white md:hidden z-50 px-2">
            <div className="flex justify-evenly items-center gap-5 w-full h-24">
              <div
                onClick={() => router.push("/account/" + id + "/products")}
                className="flex flex-col flex-grow  justify-center gap-2 items-center text-white cursor-pointer"
              >
                <ShoppingBag sx={{ color: "white" }} />
                <span>Productos</span>
              </div>
              <div
                onClick={() => router.push("/account/" + id)}
                className="flex flex-col flex-grow justify-center gap-2 items-center text-white cursor-pointer"
              >
                <Person sx={{ color: "white" }} />
                <span>Perfil</span>
              </div>
              <div
                onClick={() => router.push("/account/" + id + "/record")}
                className="flex flex-col flex-grow  justify-center gap-2 items-center text-white cursor-pointer"
              >
                <ShoppingCart sx={{ color: "white" }} />
                <span>Compras</span>
              </div>
            </div>
          </div>
          <main className="md:ml-60 mt-20 px-2 pt-4 pb-32 md:px-4 flex-1">
            {children}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default AccountLayout;
