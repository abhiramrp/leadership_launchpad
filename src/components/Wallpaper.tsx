import Image from "next/image"; 

export default function Wallpaper() {
    return(
        <div className="w-full h-8">
            <Image src="/images/forest.jpg" width={4000} height={900} alt="forest" layout="responsive" />
            

        </div>
    )
}