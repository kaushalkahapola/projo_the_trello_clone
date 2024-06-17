import Link from "next/link"
import Image from "next/image"
import {cn} from "@/lib/utils"
import localfont from "next/font/local"

const headingFont = localfont({
    src: "../public/fonts/FontsFree-Net-Poppins-Black.ttf"
})

export const Logo = () => {
  return (
        <Link href="/">
            <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
            <Image 
                src="/logo.svg"
                alt="logo"
                width={30}
                height={30}
            />
            <p className={cn("text-lg text-neutral-700 py-1",
            headingFont.className,
            )}>ProJo</p>
            </div>
        </Link>
  )
}
