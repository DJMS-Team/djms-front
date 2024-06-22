interface BillboardProps {
    title: string
    subtitle: string
    btnText: string
    photoUrl: string
}

export const Billboard = ({title, photoUrl, subtitle, btnText}:BillboardProps) => {
    return (
        <div className="overflow-hidden">
           <div className='relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-fixed bg-right-bottom bg-blend-darken'
                style={{backgroundImage: `url(${photoUrl})`}}>
                <div className="h-full w-full flex flex-col justify-center items-start px-36 text-center gap-y-8">
                    <div className="text-left text-white flex flex-col gap-5">
                        <h2 className="text-4xl font-bold">{title}</h2>
                        <p className="w-96">{subtitle}</p>
                        <button className="px-6 py-2 bg-black text-white rounded-lg w-40">
                            {btnText}
                        </button>
                    </div>
                </div>
           </div>
        </div>
    )
}