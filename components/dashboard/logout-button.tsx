'use client'

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface LogoutButtonProps {
    children?: React.ReactNode;
}


export const LogoutButton = ({
    children
}: LogoutButtonProps) => {
    const router = useRouter()
    const onClick = () => {

        Cookies.remove("currentUser");
        router.push("/");
    }
    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    )
}