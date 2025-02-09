"use client";
import {useRouter} from 'next/navigation'
export default function Notfound(){
    const router = useRouter();
    return(
        <div>
            <h1>This About Page is Not Available</h1>
            <button onClick={()=>{router.push('/')}} className="btn btn-sm btn-success">Go Back to Homepage</button>
        </div>
    )
}