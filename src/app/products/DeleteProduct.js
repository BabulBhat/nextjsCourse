"use client"

import { useRouter } from "next/navigation";

export default function DeleteProduct(props) {
    const router = useRouter();
    const hanldeDelete = async () => {
        let id = props.id;
        const response = await fetch(`http://localhost:3000/api/product/${id}`, {
            method: "DELETE"
        });
        let result = await response.json();
        if (result.success) {
            alert("Success");
            router.push('/products')
        }
        else {
            alert("Failed");
        }

    }

    return (
        <button className="btn btn-danger btn-sm mx-1" onClick={hanldeDelete}>Delete</button>
    )
}