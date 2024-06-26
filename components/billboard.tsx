import styles from "./navbar.module.css";

interface BillboardProps {
    title: string
    subtitle: string
    btnText: string
    photoUrl: string
}

export const Billboard = ({title, photoUrl, subtitle, btnText}:BillboardProps) => {
    return (
        <div className="overflow-hidden">
           <div className='min-h-screen relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-fixed bg-center lg:bg-right-bottom object-scale-down [mask-image:linear-gradient(_white_99%,_transparent_)]'
                style={{backgroundImage: `url(${photoUrl})`}}>
                <div className="h-full w-full flex flex-col justify-end pb-20 lg:pb-0 lg:justify-center items-start px-2 sm:px-4 md:px-8 lg:px-36 text-center gap-y-8">
                    <div className="text-left text-white flex flex-col gap-5">
                        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
                        <p className="w-96">{subtitle}</p>
                        <button className= {`${styles.seeProducts} px-6 py-2 bg-black text-white rounded-lg w-40`}>
                            {btnText}
                        </button>
                    </div>
                </div>
           </div>
        </div>
    )
}