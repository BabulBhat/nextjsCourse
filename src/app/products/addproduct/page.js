"use client"
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Page() {  
    const router = useRouter();
    
    const [form, setForm] = useState({
        name : "",
        price : "",
        company : "",
        color : "",
        category : ""
    })
   
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }
    const handleAdd = async() => {
        const { name , price, company, color , category} = form;
        const response = await fetch(`http://localhost:3000/api/product`,{
            method : 'POST',
            body : JSON.stringify({name , price, company, color , category})
        })

        let result = await response.json();
        if(result.success){
            alert("Success");
            router.push('/products');
        }
        else
        {
            alert("Failed");
        }
        
    }
    return (
        <div className="w-50 m-auto">
            <h3 className="py-3">Add Product</h3>
            <div className="form-group my-2">
                <input type="text" className="form-control" value={form.name} name="name" placeholder="Enter Product Name" onChange={handleChange} />
            </div>
            <div className="form-group my-2">
                <input type="number" className="form-control" value={form.price} name="price" placeholder="Enter Product Price" onChange={handleChange} />
            </div>
            <div className="form-group my-2">
                <input type="text" className="form-control" value={form.company} name="company" placeholder="Enter Product Company" onChange={handleChange} />
            </div>
            <div className="form-group my-2">
                <input type="text" className="form-control" value={form.color} name="color" placeholder="Enter Product Color" onChange={handleChange} />
            </div>
            <div className="form-group my-2">
                <input type="text" className="form-control" value={form.category} name="category" placeholder="Enter Product Category" onChange={handleChange} />
            </div>
            <div>
                <button className="btn btn-success btn-sm" onClick={handleAdd}>Add Product</button>
            </div>
        </div>
    )
}