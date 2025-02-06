"use client"
import React from 'react'
import Link from "next/link";
import { useRouter } from 'next/navigation';
const About = () => {
  const router = useRouter();
  return (
    <>
      <div>About page</div>
      <h2>Link </h2>
      <hr />
      <Link href="/about/aboutstudent">Go to About Student page</Link>
      <br />
      <Link href="/about/aboutteacher">Go to About Teacher page</Link>

      <br />
      <br />

      <h2>Navigation </h2>
      <hr />
      <button className="btn btn-primary btn-sm my-1" onClick={()=>{router.push('/about/aboutstudent')}}>Go to About Student page</button>
      <br />
      <button className="btn btn-primary btn-sm my-1" onClick={()=>{router.push('/about/aboutteacher')}}>Go to About Teacher page</button>

      <br />
      <Link href="/">Go to Home page</Link>
    </>
  )
}

export default About