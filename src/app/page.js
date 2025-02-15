"use client"
import { useState } from 'react';
import custom from './custom.module.css';
import Link from "next/link"

export default function Home() {
  const [color, setcolor] = useState("red")
  return (
    <>
      <h2>Link </h2>
      <Link href="/productlist">Go To Product List</Link>

      {/* CSS Module */}
      <main>
        <h1 className={custom.main}>Css Module with Next js</h1>
      </main>

      {/* Conditinal Css */}
      <main>
        <h1 className={color=="red"?custom.red:custom.green}>Conditinal CSS with Next js</h1>
        <button onClick={()=>{setcolor('green')}}>Update Color</button>
      </main>
    </>
  );
}
