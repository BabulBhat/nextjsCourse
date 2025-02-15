import Link from "next/link"
import Image from "next/image"
import ProfilePic from "../../public/next.svg";
export default function Home() {

  return (
    <>
      <h2>Link </h2>
      <Link href="/productlist">Go To Product List</Link>
      <Image 
        src={'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'}
        className="img-fluid"
        width={1520}
        height={1520}
      />

    </>
  );
}
