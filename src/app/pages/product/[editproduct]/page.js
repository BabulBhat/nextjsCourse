"use client"
import { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import { useRouter } from "next/navigation";

export default function Page(props) {
    const router = useRouter();
    const [editFormData, seteditFormData] = useState({
        name: "",
        price: "",
        company: "",
        color: "",
        category: "",
        description: ""
    })
    useEffect(() => {
        handleEdit();
    }, [])
    const handleEdit = async () => {
        let id = await props.params;
        id = id.editproduct;
        const response = await fetch(`http://localhost:3000/api/product/${id}`, {
            method: "GET"
        })
        let result = await response.json();
        seteditFormData(result.result);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        seteditFormData({
            ...editFormData,
            [name]: value
        })
    }
    const handleUpdate = async () => {
        let id = await props.params;
        id = id.editproduct;
        const { name, price, company, color, category, description } = editFormData;
        const response = await fetch(`http://localhost:3000/api/product/${id}`,{
            method: 'PUT',
            body: JSON.stringify({name, price, company, color, category, description})
        })
        let result = await response.json();

        if(result.success){
            alert("Success")
            router.push('/pages/product')
        }
        else{
            alert("Failed")
        }
    }
    return (
        <Layout>
            <div className="card mx-3 mt-3">
                <div className="card-header bg-success text-white">
                    <div className="d-flex align-items-center justify-content-between">
                        <h4 className="m-0 py-2">Edit Product</h4>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="">Product Name</label>
                                <input type="text" className="form-control" placeholder="Product Name" name="name" value={editFormData.name} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="">Product Price</label>
                                <input type="number" className="form-control" placeholder="Product Price" name="price" value={editFormData.price} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="">Product Company</label>
                                <input type="text" className="form-control" placeholder="Product Company" name="company" value={editFormData.company} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="">Product Color</label>
                                <input type="text" className="form-control" placeholder="Product Color" name="color" value={editFormData.color} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="">Product Category</label>
                                <input type="text" className="form-control" placeholder="Product Category" name="category" value={editFormData.category} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="">Product Description</label>
                                <textarea className="form-control" placeholder="Product Description" name="description" value={editFormData.description} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group mt-3">
                                <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}   