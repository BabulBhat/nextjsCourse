import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight : '100',
  subsets : ['latin'],
  display : 'swap'
});
export default function Home() {
  return (
    <>
      <h1>Main Page</h1>
      <h2 style={{fontFamily:"Roboto", fontWeight: 200}}>Font with Link tag in Next js</h2>
      <h2 className={roboto.className}>Dynamic Font Usage</h2>
    </>
  );
}
