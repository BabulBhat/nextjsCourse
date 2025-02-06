import Link from "next/link"
import './about.css';

const Layout = ({ children }) => {
    return (
        <div>
            <div className="about">
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
                <div className="aboutbody">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout