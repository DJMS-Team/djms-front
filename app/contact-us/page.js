import Image from "next/image";
import bg from "../../public/background/contact-us-bg.png";
import { Form } from "react-hook-form";
import { Navbar } from "@/components/navbar";
import RenderModel from "../../components/RenderModel";
import Jinx from "../../components/models/jinx"

export default function ContactUs() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between relative">
        <Image src={bg} alt="bg" fill className="-z-50 w-full h-full object-cover object-center opacity-25"/>

        <div className="w-full h-screen">
            <RenderModel>
                <Jinx/>
            </RenderModel>
        </div>
      </main>
    );
}