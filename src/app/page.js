"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name)
  }
  return (
    <>
      <h2>Link </h2>
      <hr />
      <Link href="/login">Go to Login page</Link> 
      <br />
      <Link href="/about">Go to About page</Link>

      <br />
      <br />

      <h2>Navigation </h2>
      <hr />
      <button className="btn btn-primary btn-sm my-1" onClick={()=>navigate("/login")}>Go to Login page</button>
      <br />
      <button className="btn btn-primary btn-sm my-1" onClick={()=>navigate("/about")}>Go to About page</button>
    </>
  );
}
