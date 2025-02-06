"use client"
import React from 'react'
import Link from "next/link";
import { useRouter } from 'next/navigation';
const Login = () => {
    const router = useRouter();
    return (
        <>
            <div>Login page</div>
            <h2>Link </h2>
            <hr />
            <Link href="/login/loginstudent">Go to Login Student page</Link>
            <br />
            <Link href="/login/loginteacher">Go to Login Teacher page</Link>

            <br />
            <br />

            <h2>Navigation </h2>
            <hr />
            <button className="btn btn-primary btn-sm my-1" onClick={() => { router.push('/login/loginstudent') }}>Go to Login Student page</button>
            <br />
            <button className="btn btn-primary btn-sm my-1" onClick={() => { router.push('/login/loginteacher') }}>Go to Login Teacher page</button>

            <br />
            <Link href="/">Go to Home page</Link>
        </>

    )
}

export default Login