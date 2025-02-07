"use client"
import { useParams } from "next/navigation"
export default function Lecture({params}) {
    const para = useParams();
    console.log(para.lecture);
    return(
        <div>
            <h1>{para.lecture[0]}</h1>            
        </div>
    )
}