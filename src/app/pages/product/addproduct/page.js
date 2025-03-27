"use client"
import { useState } from "react";
import Layout from "../../../components/Layout";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    const [formData, setformData] = useState({
        name: "",
        price: "",
        company: "",
        color: "",
        category: "",
        description: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData({
            ...formData,
            [name]: value
        })
    }
    const handleSave = async () => {
        const{name,price,company,color,category,description} = formData;
        const response = await fetch(`http://localhost:3000/api/product`,{
            method:"POST",
            body: JSON.stringify({name,price,company,color,category,description})
        })
        let result = await response.json();
        if(result.success){
            alert("Success");
            router.push('/pages/product')
        }
        else{
            alert("Failed");
        }
    }
    return (
        <Layout>
            <div className="card mx-3 mt-3">
                <div className="card-header bg-success text-white">
                    <div className="d-flex align-items-center justify-content-between">
                        <h4 className="m-0 py-2">Product</h4>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="">Product Name</label>
                                <input type="text" className="form-control" placeholder="Product Name" name="name" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="">Product Price</label>
                                <input type="number" className="form-control" placeholder="Product Price" name="price" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="">Product Company</label>
                                <input type="text" className="form-control" placeholder="Product Company" name="company" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="">Product Color</label>
                                <input type="text" className="form-control" placeholder="Product Color" name="color" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="">Product Category</label>
                                <input type="text" className="form-control" placeholder="Product Category" name="category" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="">Product Description</label>
                                <textarea className="form-control" placeholder="Product Description" name="description" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group mt-3">
                                <button className="btn btn-primary" onClick={handleSave}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}