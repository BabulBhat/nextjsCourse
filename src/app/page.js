import { BASE_URL } from "./config/constants";

export default function Home() {
  console.log(process.env.DBPASS);

  return (
    <>
      <h1>Main Page</h1>
      {BASE_URL}
    </>
  );
}
