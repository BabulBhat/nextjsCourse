"use client"
import React from 'react'
import Link from "next/link";
import { useRouter } from 'next/navigation';
const About = () => {
  const router = useRouter();
  return (
    <>
      <div>About page</div>
      <Link href="/">Go to Home page</Link>
    </>
  )
}

export default About