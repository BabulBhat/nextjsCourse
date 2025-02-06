"use client"
import Link from "next/link"
import './about.css';
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <div>
            <div className="about">
                {/* Conditional Layout Show */}
                {
                    pathname !== "/about/aboutteacher" ?
                        <ul className="aboutmenu">
                            <li>
                                <h4 className="aboutPageHeading">About Page</h4>
                            </li>
                            <li>
                                <Link href="/about">About Main Page</Link>
                            </li>
                            <li>
                                <Link href="/about/aboutstudent">About Student Page</Link>
                            </li>
                            <li>
                                <Link href="/about/aboutteacher">About Teacher Page</Link>
                            </li>
                        </ul>
                        :
                        <ul className="aboutmenu">
                            <li>
                                <h4 className="aboutPageHeading">About Page</h4>
                            </li>
                            <li>
                                <Link href='/about'>Go To About Main Page</Link>
                            </li>
                        </ul>
                }

                <div className="aboutbody">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout