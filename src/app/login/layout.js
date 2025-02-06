import Link from 'next/link'
import './login.css';

const Layout = ({children}) => {
  return (
    <div>
        <ul className='loginMain'>
            <li>
                <h4>Login Navbar</h4>
            </li>
            <li>
                <Link href="/login">Login Main</Link>
            </li>
            <li>
                <Link href="/login/loginstudent">Login Student</Link>
            </li>
            <li>
                <Link href="/login/loginteacher">Login Teacher</Link>
            </li>
        </ul>
        {children}
    </div>
  )
}

export default Layout