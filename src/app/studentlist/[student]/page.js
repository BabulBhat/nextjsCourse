"use client"
import { useParams, useSearchParams } from "next/navigation"

const StudentDetails = () => {
    const params= useParams();
    const searchParams = useSearchParams();
    return (
        <div>
            <h1>Student Details</h1>
            <p>Student Name : - {params.student}</p>
            <p>Student Search : - {searchParams.get("new")}</p>
        </div>
    )
}

export default StudentDetails