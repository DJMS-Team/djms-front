import { HeaderLogo } from "@/components/header-logo"
import { Navigation } from "@/components/navigation"
import { WelcomeMsg } from "@/components/welcome-msg"
import { UserButton } from "./dashboard/user-button"
export const Header = () => {
    return (
        <header className="bg-[#2A2A5A] px-4 py-8 lg:px-14 pb-36">
            <div className="max-w-screen-2xl mx-auto">
                <div className="w-full flex items-center justify-between mb-14">
                    <div className="flex items-center lg:gap-x-16">
                        <HeaderLogo />
                        <Navigation />
                    </div>
                    <div className="flex items-center ml-auto">
                        <UserButton />
                    </div>
                </div>
                <WelcomeMsg />
            </div>
        </header>
    )
}