"use client"
import Link from "next/link"

const Studentlist = () => {  
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li>
          <Link href='/studentlist/1'>Anil</Link>
        </li>
      </ul>
    </div>
  )
}

export default Studentlist