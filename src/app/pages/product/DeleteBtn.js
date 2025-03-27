"use client"
import { useRouter } from "next/navigation";
export default function DeleteBtn(props) {
    const router = useRouter();
    const handleDelete = async() => {
        const response = await fetch(`http://localhost:3000/api/product/${props.id}`,{
            method : "DELETE"
        })
        let result = await response.json();
        if (result.success) {
            alert("Success");
            router.push('/pages/product')
        }
        else {
            alert("Failed");
        }
    }

    return (
        <button className="btn btn-danger btn-sm mx-1" onClick={handleDelete}>Delete</button>
    )
}