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
          <div className='min-h-screen relative text-white justify-end flex text-center gap-5 py-10 flex-col items-center flex overflow-hidden bg-cover bg-fixed bg-top'
                 style={{backgroundImage: `url(${photoUrl})`}}>
                        <h2 className="text-3xl md:text-6xl font-bold">{title}</h2>
                        <p className="text-xl font-medium">{subtitle}</p>
                        <button className= {`${styles.primaryBtn} px-6 py-2 bg-black text-white rounded-lg `}>
                            {btnText}
                        </button>
           </div>
        </div>
    )
}
