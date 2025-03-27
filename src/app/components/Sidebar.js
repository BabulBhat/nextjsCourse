import Image from "next/image"
import Link from 'next/link'
import Menuitem from "./Menuitem"
export default function Sidebar() {
    return (
        <div className="sidebar">
            <Link href={'/'}>
                <div className="logoSidebar">
                    <Image src="/next.svg"
                        alt="Logo"
                        width={100}
                        height={100}
                        quality={75} />
                </div>
            </Link>
            <hr className="m-0" />
            <ul className="mainSidebar">
                <Menuitem />
            </ul>
        </div>
    )
}