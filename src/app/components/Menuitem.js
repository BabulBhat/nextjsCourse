"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
const Menuitem = () => {
    const pathname = usePathname();
    const menuItem = [
        { name: 'Home', href: '/' },
        { name: 'Product', href: '/pages/product' },
        { name: 'User', href: '/pages/user' || '/pages/user/adduser' },
    ];
    return (
        <>
            {
                menuItem.map((item, index) => {                    
                    return (
                        <li key={index} className={pathname === item.href ? 'active' : ''}>
                            <Link href={item.href}>{item.name}</Link>
                        </li>
                    )
                })
            }
        </>
    )
}

export default Menuitem