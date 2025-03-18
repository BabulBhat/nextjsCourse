import Link from 'next/link'
export default async function Home() {
  return (
    <>
      <Link href={`/products`}>Product</Link>
    </>
  );
}
