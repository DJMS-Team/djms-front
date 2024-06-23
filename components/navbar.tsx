"use client";
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { IconMenu, IconSearch, IconShoppingCart } from "@tabler/icons-react";
import { useCart } from "@/hooks/cart/use-cart";
import { Button } from "./ui/button";
import { LogOut, Menu, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { UserButton } from "./profile/user-button-page";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ProductCategory } from "@/interfaces/product-category.interface";
import { getCategories } from "@/actions/get-categories";
import { AiOutlineCaretDown } from "react-icons/ai";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMedia } from "react-use";
import Link from "next/link";
import { LogoutButton } from "./dashboard/logout-button";
import Cookies from "js-cookie";

export const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY <= 600) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const cart = useCart();
  const router = useRouter();

  const toggleNavbar = (event: React.MouseEvent) => {
    setIsClick(!isClick);
  };

  const isMobile = useMedia("(max-width: 1023px)", false);

  if (isMobile) {
    return (
      <nav
        className={`${styles.navbar} ${
          showNavbar ? styles.show : styles.hide
        } px-4 flex justify-between items-center h-20`}
      >
        <div className="flex-shrink-0">
          <a href="/" className="text-white text-2xl font-bold">
            DMajorStore
          </a>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <button
            onClick={() => router.push("/cart")}
            className="text-white flex items-center relative px-5 py-2"
          >
            <IconShoppingCart size={28} className="z-10" />
            <span className="absolute bg-purple-dark text-white  z-[-10] rounded-full px-2 top-0 right-0">
              {cart.items.length}
            </span>
          </button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
              <Button
                variant="outline"
                size="sm"
                className="font-normal bg-white/10 hover:bg-white/202 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
              >
                <Menu className="h-8 w-8 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="px-4 bg-[#1c1c3c] text-white border-none"
            >
              <nav className="flex flex-col gap-y-8 pt-6 text-xl">
                <form className={`flex ${styles.formContainer}`}>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`w-full flex-grow ${styles.searchInput}`}
                  />
                  <button type="submit" className={styles.searchButton}>
                    <IconSearch />
                  </button>
                </form>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex gap-2 items-center">
                    <p>Categorias</p>
                    <AiOutlineCaretDown size={12} className="mt-[1px]" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {categories.map((category) => (
                      <DropdownMenuItem
                        onClick={() => router.push("/category/${category.id}")}
                        key={category.id}
                      >
                        {category.category}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                  <Link href={`/account/${id}`} className="flex items-center">
                    Perfil
                  </Link>
                  <LogoutButton>
                    Logout
                  </LogoutButton>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={`${styles.navbar} ${showNavbar ? styles.show : styles.hide}`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 text-white">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-white text-2xl font-bold">
                DMajorStore
              </a>
            </div>
            <form className={`flex ml-20 ${styles.formContainer}`}>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
              <button type="submit" className={styles.searchButton}>
                <IconSearch />
              </button>
            </form>
          </div>
          <div className="flex items-center justify-center flex-grow space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex gap-2 justify-center items-center">
                <p>Categorias</p>
                <AiOutlineCaretDown size={12} className="mt-[1px]" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {categories.map((category) => (
                  <DropdownMenuItem
                    onClick={() => router.push("/category/${category.id}")}
                    key={category.id}
                  >
                    {category.category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="/" className={`${styles.navLink} text-white`}>
              Vender
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.push("/cart")}
              className="flex items-center relative px-5 py-2"
            >
              <IconShoppingCart size={28} className="z-10" />
              <span className="absolute bg-purple-dark text-white  z-[-10] rounded-full px-2 top-0 right-0">
                {cart.items.length}
              </span>
            </button>
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
};
