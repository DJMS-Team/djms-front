import Link from "next/link"
import Image from "next/image"

export const HeaderLogo = () => {
    return(
        <Link href="/">
            <div className="items-center hidden lg:flex">
                {/* <Image src="/logo.png" alt="Logo" width={150} height={50} /> */}
                <p className="font-semibold text-white text-2xl ml-2.5">
                    Admin Dashboard
                </p>
            </div>
        </Link>
    )
}